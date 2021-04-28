const loggerLoader =    require("./logger");
const expressLoader =   require("./express");
const serviceLoader =   require("./services");
const handlerLoader =   require("./handlers");
const rabbitmqLoader =  require("./rabbitmq");

module.exports = async () => {
    //Load logger first
    let logger = await loggerLoader();
    logger.verbose(`Logger loaded`);

    //Now load services and handlers
    let services = await serviceLoader({ logger });
    let handlers = await handlerLoader({ services });

    let expressApp = await expressLoader({ logger, handlers });
    await rabbitmqLoader({ services, logger });
};