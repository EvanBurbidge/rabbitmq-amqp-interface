let {RabbitMqInterface} = require('../../dist/rabbitode.min');


const rabbitInterface = new RabbitMqInterface();

const handleConsume = channel => msg => {
  console.log(rabbitInterface.decodeToString(msg));
  console.log(rabbitInterface.decodeToJson(msg));
  channel.ack(msg);
};

rabbitInterface
  .enableDebugging()
  .startDirectConsumer({
    consumerConfig: {
      exchangeName: 'direct_test_exchange',
      exchangeType: 'direct',
      queueName: 'direct_test_queue',
      consumerCallback: handleConsume,
    },
  });
