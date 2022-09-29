import Kafka from 'node-rdkafka';
import dotenv from 'dotenv';

dotenv.config();

const { BROKERS, TOPIC } = process.env;

const initAndSend = () => {
	const producer = Kafka.Producer({
		'bootstrap.servers': BROKERS
	});

	producer.connect();

	producer.on('ready', () => {
		setInterval(() => {
			let i = Math.floor(Math.random()*100);

			let key = "node-rdkafka-"+i;
			let message = `Message from producer: ${i}`;
			let headers = [{ header: key }];

			producer.produce(
				TOPIC,
				null,
				Buffer.from(message),
				key,
				Math.floor(new Date().getTime() / 1000),
				"",
				headers
			);
			
			console.log(`Successfully wrote... ${key}:${message}`);

		}, 2000);
	});

};

export default initAndSend;