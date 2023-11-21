module.exports = {
    data: {
        name: `cancel`
    },
    async execute(interaction, client) {
        await interaction.update({
            content: 'Canceled Task',
            components: [],
            embeds: []
        })
    }
}