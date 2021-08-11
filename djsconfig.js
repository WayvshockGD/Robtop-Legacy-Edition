let DiscordLight = require("discord.js-light");

/** @type {DiscordLight.ClientOptions} */
let djsconfig = {
    // Just like Eris :))
    rejectOnRateLimit: () => { return; },
    ws: {
        compress: true,
    },
    makeCache: DiscordLight.Options.cacheWithLimits({
        GuildManager: Infinity,
        GuildMemberManager: {
            maxSize: 60,
            sweepInterval: 3600000
        },
        ReactionManager: {
            maxSize: 100,
            sweepInterval: 1800000
        },
        UserManager: {
            maxSize: 60,
            sweepInterval: 3600000
        },
        MessageManager: {
            maxSize: 40,
            sweepInterval: 43200000
        }
    }),
    partials: [
        "MESSAGE",
        "CHANNEL",
        "USER"
    ],
    intents: [
        "DIRECT_MESSAGES",
        "GUILDS",
        "GUILD_EMOJIS_AND_STICKERS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS",
    ]
}

module.exports = djsconfig;