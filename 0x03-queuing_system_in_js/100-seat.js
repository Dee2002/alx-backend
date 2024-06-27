const kue = require('kue');
const queue = kue.createQueue();

const bookingData = Array.from({ length: 100 }, (_, index) => ({
  seatNumber: index + 1,
  booked: false,
}));

bookingData.forEach((booking) => {
  queue.create('booking', booking).save((err) => {
    if (!err) console.log(`Booking created for seat ${booking.seatNumber}`);
  });
});

queue.process('booking', (job, done) => {
  console.log(`Processing booking for seat ${job.data.seatNumber}`);
  /* Simulate booking process */
  setTimeout(() => {
    console.log(`Seat ${job.data.seatNumber} booked successfully`);
    done();
  }, 1500);
});