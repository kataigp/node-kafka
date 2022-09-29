import Kafka from 'node-rdkafka';
import dotenv from 'dotenv';

dotenv.config();

const { GROUP_ID, BROKERS, TOPIC } = process.env;

const initAndSubscribe = () => {
	const consumer = Kafka.KafkaConsumer({
		'group.id': `${GROUP_ID}-node-rdkafka`,
		'bootstrap.servers': BROKERS
	});

	consumer.connect();
		
	consumer.on('ready', () => { 
		consumer.subscribe([TOPIC]);
		consumer.consume();
	}).on('data', ({ topic, key, value }) => {
		console.log(`Received from: ${topic}, ${key.toString()}:${value.toString()}`);
	});
};

export default initAndSubscribe;



