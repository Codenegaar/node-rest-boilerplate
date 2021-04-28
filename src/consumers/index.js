const helloConsumer =       require("./hello");

module.exports = ({ channels, services, logger }) => {
    helloConsumer({ helloChannel: channels.helloChannel, services, logger });
};