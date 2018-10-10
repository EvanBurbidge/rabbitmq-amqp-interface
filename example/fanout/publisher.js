let {RabbitMqInterface} = require('../../dist/rabbitode.min');

let rabbitInterface = new RabbitMqInterface();


let count = 0;

setInterval(() => {
    count++;
    console.log(`publishing`);
    rabbitInterface.sendFanout({
        exchangeName: 'fanout_test_exchange',
        routingKey: ``, // leave this blank with a fanour
        content: `this is a test message for fanouts: ${count}`
    });
    console.log(`published`);
},  1000);
