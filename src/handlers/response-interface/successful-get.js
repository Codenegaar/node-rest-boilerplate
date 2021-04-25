module.exports = class {
    constructor(message, data) {
        this.statusCode = 200;
        this.body = {
            isSuccess: true,
            message,
            data,
        };
    }
};