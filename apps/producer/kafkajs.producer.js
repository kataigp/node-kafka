import { Kafka } from "kafkajs";
import dotenv from 'dotenv';

dotenv.config();

const { CLIENT_ID, BROKERS, TOPIC } = process.env;

const initAndSend = async () => {

	const kafka = new Kafka({ clientId: CLIENT_ID, brokers: BROKERS.split(',') })
	const producer = kafka.producer()

	await producer.connect()
	let i = 0

	setInterval(async () => {
		try {
			let i = Math.floor(Math.random()*100);

			let key = "kafkajs-"+i;
			let message = `Message from producer: ${i}`;
			let headers = { header: key };

			await producer.send({
				topic: TOPIC,
				messages: [
					{
						key,
						value: message,
						headers
					},
				],
			})
			console.log(`Successfully wrote... ${key}:${message}`);
			i++
		} catch (err) {
			console.error('Something went wrong!', err);
		}
	}, 2000)
}

export default initAndSend;