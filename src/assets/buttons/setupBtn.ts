const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, ChannelSelectMenuBuilder, ChannelType, EmbedBuilder, isChannelSelectMenu, ComponentType} = require('discord.js');

module.exports = {
    data: {
        name: `setupBtn`
    },
    async execute(interaction, client) {
        const save = new ButtonBuilder()
        .setCustomId('save')
        .setLabel('Save')
        .setStyle(ButtonStyle.Success)
    const back = new ButtonBuilder()
        .setCustomId('setup')
        .setLabel('Back')
        .setStyle(ButtonStyle.Secondary)
    const cancel = new ButtonBuilder()
        .setCustomId('cancel')
        .setLabel('Cancel')
        .setStyle(ButtonStyle.Danger)
    const appChannel = new ChannelSelectMenuBuilder()
        .setCustomId('appChannel')
        .setMinValues(1)
        .setMaxValues(1)
        .setPlaceholder('*Select the Channel the Application will go in')
        .setChannelTypes(ChannelType.GuildText)
    const logChannel = new ChannelSelectMenuBuilder()
        .setCustomId('logChannel')
        .setMinValues(1)
        .setMaxValues(1)
        .setPlaceholder('*Select the Channel the logs will go in')
        .setChannelTypes(ChannelType.GuildText)
        const btnrow = new ActionRowBuilder()
            .addComponents(save, cancel, back);
        const selectrow1 = new ActionRowBuilder()
            .addComponents(appChannel)
        const selectrow2 = new ActionRowBuilder()
            .addComponents(logChannel)



        const reply = await interaction.reply({
            embeds: [embed],
            components: [selectrow1, selectrow2, btnrow]
        });

    }
}