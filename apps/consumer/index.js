import kafkajsConsumer from './kafkajs.consumer.js';
import noderdKafkaConsumer from './node-rdkafka.consumer.js';

const message = ['Start'];
switch (process.env.npm_config_consumer) {
    case 'kafkajs':
        message.push('kafkajs');
        kafkajsConsumer();
        break;
    case 'noderdkafka':
        message.push('node-rdkafka');
        noderdKafkaConsumer();
        break;
    default:
        console.log('Missing consumer lib type!');
        break;
}
message.push('consumer...');
console.log(message.join(' '));