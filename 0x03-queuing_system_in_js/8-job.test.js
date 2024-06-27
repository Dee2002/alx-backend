const kue = require('kue');
const queue = kue.createQueue();
const assert = require('assert');

describe('Job Queue Tests', function() {
  before(function(done) {
    /* Clear the queue before starting the tests */
    queue.testMode.enter();
    queue
      .on('job complete', function(id, result) {
        kue.Job.get(id, function(err, job) {
          if (err) return;
          job.remove(function(err) {
            if (err) throw err;
            console.log('Removed completed job from queue');
          });
        });
      })
      .on('ready', done);
  });

  after(function(done) {
    /* Clean up after all tests */
    queue.testMode.clear();
    queue.shutdown(5000, done);
  });

  it('should process jobs correctly', function(done) {
    const jobData = {
      phoneNumber: '1234567890',
      message: 'Test message',
    };

    queue.create('sms', jobData).save(function(err) {
      if (err) throw err;

      queue.process('sms', function(job, cb) {
        /* Simulate processing time */
        setTimeout(function() {
          cb();
          assert.strictEqual(job.data.phoneNumber, jobData.phoneNumber);
          assert.strictEqual(job.data.message, jobData.message);
          done();
        }, 1000);
      });
    });
  });
});