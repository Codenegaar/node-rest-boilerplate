const HelloHandler = require("../handlers/hello");

/**
 * Instanciate handlers using services
 * @param {*} params
 * @param {*} params.services Services dependency 
 * @returns Handlers
 */
module.exports = async ({ services }) => {
    let handlers = {
        helloHandler: new HelloHandler({ services }),
    };

    return handlers;
};