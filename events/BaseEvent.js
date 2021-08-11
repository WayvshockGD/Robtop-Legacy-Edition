const { Client } = require("discord.js-light");

module.exports = class BaseEvent {
    /** @param {Client} client */
    constructor(client) {
        this.client = client;

        return this.run;
    }

    run() {}
}