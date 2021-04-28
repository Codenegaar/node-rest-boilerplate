module.exports = ({ helloChannel, services, logger }) => {
    helloChannel.consume(process.env.BP_HELLO_QUEUE, message => {
        logger.info(`Message recieved: ${message.content.toString()}`);
    }, { noAck: true });
}