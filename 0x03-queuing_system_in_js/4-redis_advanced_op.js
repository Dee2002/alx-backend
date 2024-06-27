import redis from 'redis';

const client = redis.createClient();

client.on('connect', () => {
  console.log('Redis client connected to the server');

  createHash();
});

client.on('error', (error) => {
  console.error(`Redis client not connected to the server: ${error.message}`);
});

function createHash() {
  client.hmset('HolbertonSchools', {
    Portland: 50,
    Seattle: 80,
    'New York': 20,
    Bogota: 20,
    Cali: 40,
    Paris: 2
  }, redis.print);

  client.hgetall('HolbertonSchools', (err, reply) => {
    if (err) console.error(err);
    else console.log(reply);
  });
}