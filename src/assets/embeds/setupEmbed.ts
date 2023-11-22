
module.exports{
    data: {
        name: `setupEmbed`
    }
    new EmbedBuilder()
        .setColor('#2B2D31')
        .setTitle(`Setup`)
        .addFields([
            {
            name: 'Application Channel',
            value: `*<not selected yet>*`,
            inline: false
            },
            {
            name: 'Log Channel',
            value: `*<not selected yet>*`,
            inline: false
            }
        ])
        .setTimestamp(Date.now())
}