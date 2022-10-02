const { Client, Collection, GatewayIntentBits, Partials, Routes } = require('discord.js'); 
const { REST } = require('@discordjs/rest');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers
    ]
});
require('dotenv').config();

client.events = new Collection()
client.slashcommands = new Collection()

process.stdin.resume();//so the program will not close instantly

function exitHandler(options, exitCode) {
    // place exit funtions here
}

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadEvents(bot, false)

module.exports = client

//do something when app is closing
process.on('exit', exitHandler.bind(null,{cleanup:true}));

//catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, {exit:true}));

// catches "kill pid" (for example: nodemon restart)
process.on('SIGUSR1', exitHandler.bind(null, {exit:true}));
process.on('SIGUSR2', exitHandler.bind(null, {exit:true}));

//catches uncaught exceptions
process.on('uncaughtException', exitHandler.bind(null, {exit:true}));

client.login(process.env.TOKEN);