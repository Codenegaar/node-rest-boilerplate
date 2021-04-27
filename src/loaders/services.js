const HelloService = require("../services/hello");

/**
 * Instanciate services
 * @param {*} logger winston logger
 * @returns Services
 */
module.exports = ({ logger }) => {
    let services = {
        helloService: new HelloService({ logger })
    };

    return services;
};