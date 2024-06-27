import kue from 'kue';

const queue = kue.createQueue();

const jobData = [
  {
    phoneNumber: '1234567890',
    message: 'Hello, this is your reminder!',
  },
  {
    phoneNumber: '9876543210',
    message: 'Don\'t forget the meeting at 10 AM!',
  },
  {
    phoneNumber: '5556667777',
    message: 'Reminder: Pay your bills today!',
  },
];

jobData.forEach((jobInfo) => {
  const job = queue.create('sms', jobInfo).save((err) => {
    if (!err) console.log(`Job created with ID ${job.id}`);
  });
});

queue.process('sms', (job, done) => {
  console.log(`Sending SMS to ${job.data.phoneNumber}: ${job.data.message}`);
  /* Simulate sending SMS */
  setTimeout(() => {
    done();
  }, 1000);
});

queue.on('job complete', (id) => {
  kue.Job.get(id, (err, job) => {
    if (err) return;
    job.remove((err) => {
      if (err) throw err;
      console.log(`Job ${job.id} successfully removed from queue`);
    });
  });
});

process.on('SIGINT', () => {
  queue.shutdown(5000, (err) => {
    console.log('Kue shutdown: ', err || '');
    process.exit(0);
  });
});