const router = require("express").Router();

const hello =       require("./hello");

module.exports = ({ app, middlewares, handlers }) => {
    app.use("/", router);

    hello({ app, middlewares, handlers });

    router.get("/", async(req, res) => {
        res.send("Done");
    });
};