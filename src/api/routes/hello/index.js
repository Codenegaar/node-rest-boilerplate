const router = require("express").Router();

module.exports = ({ app, middlewares, handlers }) => {
    app.use("/hello", router);

    router.get("/", async(req, res) => {
        let result = await handlers.helloHandler.getHello(req.query.name);

        res.status(result.statusCode).send(result.body);
    });
};