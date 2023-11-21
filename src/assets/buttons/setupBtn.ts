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
    const embed = new EmbedBuilder()
        .setColor('#2B2D31')
        .setTitle(`Setup`)
        .addFields([
            {
            name: 'Application Channel',
            value: `N/A`,
            inline: false
            },
            {
            name: 'Log Channel',
            value: `N/A`,
            inline: false
            }
        ])
        .setTimestamp(Date.now())
        
        const btnrow = new ActionRowBuilder()
            .addComponents(save, cancel, back);
        const selectrow1 = new ActionRowBuilder()
            .addComponents(appChannel)
        const selectrow2 = new ActionRowBuilder()
            .addComponents(logChannel)



        const reply = await interaction.reply({
            embeds: [embed],
            components: [selectrow1, btnrow]
        });

        const collector = reply.createMessageComponentCollector({
            componentType: ComponentType.ChannelSelect,
            filter: (i) => i.user.id === interaction.user.id,
        });

        collector.on('collect', (interaction) => {
            if (!interaction.values.length){
                return interaction.reply('Nothing to see here');
            };

            interaction.reply({
                content: `you have selected ${interaction.values}`
            });
        });

    }
}