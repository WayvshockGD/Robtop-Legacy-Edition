let DiscordLight = require("discord.js-light");
const djsconfig = require("./djsconfig");
let fs = require("fs");
let glob = require("glob-promise");
const { parse } = require("yaml");
const path = require("path");
const _Manager = require("./_manager");

let config = getConfig();

let client = new DiscordLight.Client(djsconfig);
let commandManager = new _Manager(client);

/** @returns {RobtopLegacy.config} */
function getConfig() {
    let file = fs.readFileSync("./config.yaml", { "encoding": "utf-8" });
    
    return parse(file);
}

async function loadCommands() {
    let basePath = path.join(__dirname, "commands");

    let files = await glob("*.js", {
        cwd: basePath,
        root: basePath,
    });
    for (let file of files) {
        let fileCommand = require(`./commands/${file}`);

        let command = (typeof file === "object") ? fileCommand : new fileCommand();
        commandManager.load(command);
    }
}

(async () => {
    await loadCommands();
    await client.login(config.beta ? config.secrets.betaToken : config.secrets.token);
})();