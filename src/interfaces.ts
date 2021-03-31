
export interface MqExchangeMessage {
  exchangeName: string;
  routingKey: string;
  content: Buffer | string;
}

export interface MqTaskMessage {
  queueName: string;
  content: Buffer | string;
}

export interface ConsumerConfig {
  exchangeName: string;
  exchangeType: string;
  queueName: string;
  consumerCallback: (x: any) => (y: any) => void;
}