const ResponseInterface = require("../response-interface");

module.exports = class {
    constructor({ services }) {
        this.helloService = services.helloService;
    }

    /**
     * Say hello to someone
     * @param {string} name Name of the person to say hello to
     */
    getHello(name) {
        let greeting = this.helloService.sayHello(name);
        return new ResponseInterface.SuccessfulGet(
            'Successfully generated hello message',
            {
                greeting
            }
        );
    }
};