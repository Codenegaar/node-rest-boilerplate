const Router = require("express").Router;
const routes = require("./routes");
const middlewares = require("./middlewares");

module.exports = ({ handlers }) => {
    const app = Router();

    routes({ app, middlewares, handlers });

    return app;
};