const { ButtonBuilder, ButtonStyle, ActionRowBuilder, ChannelSelectMenuBuilder, ChannelType, EmbedBuilder, SlashCommandBuilder } = require('discord.js');
        
module.exports = {
  data: new SlashCommandBuilder()
    .setName('setup')
    .setDescription("Setup the application"),
  async execute(interaction, client) {
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
    await interaction.reply({
        components: [row]
    });
  },
};



