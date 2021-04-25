const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");

const api = require("../api");

/**
 * Creates and configures an express application
 * @param {*} params
 * @param {*} params.logger A previously created logger to use in the middleware 
 * @param {*} params.handlers Handlers to use
 * @returns The created express application
 */
module.exports = async ({ logger, handlers }) => {
    //Create an express app
    let expressApp = express();

    //use middleware packages
    expressApp.use(bodyParser.json());

    expressApp.use(cors({
        origin: true,
        credentials: true,
    }));
    expressApp.options("*", cors());

    //Register a logger
    expressApp.use((req, _res, next) => {
        logger.http("Recieved a " + req.method + " request to: " + req.path);
        next();
    });

    //Connect API
    expressApp.use(
        process.env.BP_PREFIX,
        api({ handlers })
    );

    //Start listening
    expressApp.listen(process.env.BP_PORT, err => {
        if (err) {
            logger.error(`Error starting the server: ${err}`);
            process.exit(1);
        } else {
            logger.verbose(`Server started listening on ${process.env.BP_PORT}, prefix: ${process.env.BP_PREFIX}`);
        }
    });

    return expressApp;
}