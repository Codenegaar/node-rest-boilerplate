const { format, createLogger, transports } = require("winston");
const path = require("path");

/**
 * Configures and creates a logger
 * @returns The created logger
 */
module.exports = async () => {
    //Configure logger format
    let myFormat = format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.colorize(),
        format.align(),
        format.cli({ colors: {
            info: 'blue',
            error: 'red',
            warning: 'yellow',
            debug: 'yellow greenBG'
        }}),
        format.simple(),
    );

    //Configure transports
    let consoleTransport = new transports.Console({
        level: process.env.BP_CON_LOG_LEVEL
    });
    let fileTransport = new transports.File({
        level: process.env.BP_FILE_LOG_LEVEL,
        filename: path.join(__dirname, `/../../logs/${process.env.BP_LOG_FILE_NAME}`),
    });

    //Create logger
    let logger = createLogger({
        format: myFormat,
        transports: [ consoleTransport, fileTransport ]
    });

    return logger;
};