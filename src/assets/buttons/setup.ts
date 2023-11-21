const { ButtonBuilder, ButtonStyle, ActionRowBuilder} = require('discord.js');

module.exports = {
    data: {
        name: `setup`
    },
    async execute(interaction) {
        const setupBtn = new ButtonBuilder()
            .setCustomId('setupBtn')
            .setLabel('Setup')
            .setStyle(ButtonStyle.Success)
        const createAppBtn = new ButtonBuilder()
            .setCustomId('createAppBtn')
            .setLabel('Create Application')
            .setStyle(ButtonStyle.Secondary)
        const row = new ActionRowBuilder()
            .addComponents(setupBtn, createAppBtn);
        await interaction.update({
            embeds: [],
            components: [row]
        });
    },
}