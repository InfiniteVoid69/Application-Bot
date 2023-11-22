module.exports = {
  data: {
    name: `logChannel`,
  },
  async execute(interaction, client) {
    await interaction.update({
      content: `Log Channel: <#${interaction.values[0]}>`,
    });
  },
};
