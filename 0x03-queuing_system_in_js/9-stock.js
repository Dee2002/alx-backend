const kue = require('kue');
const queue = kue.createQueue();

const stockData = [
  { item: 'Book', quantity: 10 },
  { item: 'Laptop', quantity: 5 },
  { item: 'Phone', quantity: 20 },
];

stockData.forEach((item) => {
  queue.create('stock', item).save((err) => {
    if (!err) console.log(`Stock order created for ${item.item}`);
  });
});

queue.process('stock', (job, done) => {
  console.log(`Processing stock order for ${job.data.item}`);
  /* Simulate processing time */
  setTimeout(() => {
    console.log(`Stock order fulfilled for ${job.data.item}`);
    done();
  }, 2000);
});