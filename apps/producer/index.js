import kafkajsProducer from './kafkajs.producer.js';
import noderdKafkaProducer from './node-rdkafka.producer.js';

const message = ['Start'];
switch (process.env.npm_config_producer) {
    case 'kafkajs':
        message.push('kafkajs');
        kafkajsProducer();
        break;
    case 'noderdkafka':
        message.push('node-rdkafka');
        noderdKafkaProducer();
        break;
    default:
        console.log('Missing producer lib type!');
        break;
}
message.push('producer...');
console.log(message.join(' '));