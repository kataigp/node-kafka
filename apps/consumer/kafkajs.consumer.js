import { Kafka } from "kafkajs";
import dotenv from 'dotenv';

dotenv.config();

const { GROUP_ID, CLIENT_ID, BROKERS, TOPIC } = process.env;

const initAndSubscribe = async () => {

	const kafka = new Kafka({ clientId: CLIENT_ID, brokers: BROKERS.split(',') })

	const consumer = kafka.consumer({
		groupId: `${GROUP_ID}-kafkajs`
  	})

	await consumer.connect()

	await consumer.subscribe({
		topic: TOPIC,
		fromBeginning: true
	  })
	
	  await consumer.run({
		eachMessage: async ({ topic, partition, message }) => {
			const { key, value } = message;
			console.log(`Received from: ${topic}, ${key.toString()}:${value.toString()}`);
		}
	});
}

export default initAndSubscribe;