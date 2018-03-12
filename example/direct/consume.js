let {RabbitMqInterface} = require('../../dist/rabbitode');


const rabbitInterface = new RabbitMqInterface();

rabbitInterface.startDirectConsumer({
    exchangeName: 'direct_test_exchange',
    exchangeType: 'direct',
    queueName: 'direct_test_queue',
    consumerCallback: handleConsume,
});

function handleConsume (channel) {
    return function (msg) {
        console.log('************************************************************');
        console.log(msg.content.toString());
        channel.ack(msg);
        console.log('************************************************************');
    }
}