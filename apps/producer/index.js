import kafkajsProducer from './kafkajs.producer.js';
import noderdKafkaProducer from './node-rdkafka.producer.js';

console.log('Start producer...');

switch (process.env.npm_config_producer) {
    case 'kafkajs':
        kafkajsProducer().catch((err) => {
	        console.error("error in producer: ", err)
        });
        break;
    case 'noderdkafka':
        noderdKafkaProducer();
        break;
    default:
        console.log('Missing producer lib type!');
        break;
}
