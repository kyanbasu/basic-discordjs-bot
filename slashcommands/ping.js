const {SlashCommandBuilder} = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
	.setName('ping')
	.setDescription('Do gry w ping ponga.')
	,run: async(client, interaction) => {
        return interaction.reply(`pong! ${Date.now() - interaction.createdTimestamp}ms`)
    },
}