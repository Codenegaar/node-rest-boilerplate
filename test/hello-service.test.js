const HelloService = require("../src/services/hello");
const loggerLoader = require("../src/loaders/logger");

const expect = require("chai").expect;

describe("Hello service tests", async () => {
    //Instanciate service
    let logger = await loggerLoader();
    let helloService = new HelloService({ logger });

    it("Should say hello to Ali", () => {
        let message = helloService.sayHello("Ali");
        expect(message).to.equal("Hello Ali!");
    });
});