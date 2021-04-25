module.exports = class HelloService {
    constructor({ logger }) {
        this.logger = logger;
    }

    /**
     * Say hello to someone
     * @param {string} name The name of the person to say hello to
     * @returns A hello message
     */
    sayHello(name) {
        let lTags = { tags: ['hello', 'say-hello'] };
        this.logger.verbose(`Attempting to say hello`, lTags);

        return `Hello ${name}!`;
    }
};