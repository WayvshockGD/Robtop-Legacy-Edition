const { Client } = require("discord.js-light");

module.exports = class _Manager {
    /** @param {Client} client */
    constructor(client) {
        /** @type {Map<string, RobtopLegacy.ICommand>} */
        this.commands = new Map();
        this.client = client;
    }

    /** @param {RobtopLegacy.ICommand} command */
    load(command) {
        this.commands.set(command.name, command);
        console.log(`Loaded command ${command.name}`);
    }
}