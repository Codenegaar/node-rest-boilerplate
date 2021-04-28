module.exports = ({ helloChannel, services, logger }) => {
    helloChannel.consume(process.env.BP_HELLO_QUEUE, message => {
        let greeting = services.helloService.sayHello(message.content.toString());
        logger.info(greeting);
    }, { noAck: true });
}