import redis from 'redis';
import { promisify } from 'util';

const client = redis.createClient();
const getAsync = promisify(client.get).bind(client);

client.on('connect', async () => {
  console.log('Redis client connected to the server');

  try {
    const schoolValue = await getAsync('Holberton');
    console.log(schoolValue);

    await setNewSchool('HolbertonSanFrancisco', '100');

    const newSchoolValue = await getAsync('HolbertonSanFrancisco');
    console.log(newSchoolValue);
  } catch (error) {
    console.error(error);
  }
});

client.on('error', (error) => {
  console.error(`Redis client not connected to the server: ${error.message}`);
});

function setNewSchool(schoolName, value) {
  return new Promise((resolve, reject) => {
    client.set(schoolName, value, redis.print);
    resolve();
  });
}