const amqp = require("amqplib/callback_api");
const consumers = require("../consumers");

let rmqConnection;
let helloChannel;

/**
 * Creates a connection to rabbitMQ
 * @param {*} params
 * @param {*} params.logger winston logger instance
 */
async function createConnection({ logger }) {
    rmqConnection = await new Promise((resolve, reject) => {
        amqp.connect(
            "amqp://" + process.env.BP_AMQP_HOST,
            (error, connection) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(connection);
                }
            }
        );
    });
    logger.info(`Connected to rabbitmq`);
}

/**
 * Create a channel for hello queue
 * @param {*} params 
 * @param {*} params.logger Winston logger instance
 */
async function createHelloChannel({ logger }) {
    helloChannel = await new Promise((resolve, reject) => {
        rmqConnection.createChannel((err, result) => {
            if (err) {
                logger.error(`Error creating channel: ${err}`);
                reject(err);
                return;
            }
            resolve(result);
        });
    });

    helloChannel.assertQueue(process.env.BP_HELLO_QUEUE, {
        durable: false,
    });
    logger.info(`Hello queue has been registered`);
}

module.exports = async ({ services, logger }) => {
    //Connect
    await createConnection({ logger });
    
    //Create channels
    await createHelloChannel({ logger });

    //Register consumers
    consumers({
        channels: {
            helloChannel,
        }, services, logger
    });
};