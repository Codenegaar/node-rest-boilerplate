const HelloService = require("../services/hello");

/**
 * Instanciate services
 * @returns Services
 */
module.exports = ({ logger }) => {
    let services = {
        helloService: new HelloService({ logger })
    };

    return services;
};