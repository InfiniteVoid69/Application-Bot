const { EmbedBuilder} = require('discord.js');

module.exports = {
    data: {
        name: `createAppBtn`
    },
    async execute(interaction, client) {
        await interaction.update({
            content: 'you pressed: Create Application',
            components: []
        })
    }
}