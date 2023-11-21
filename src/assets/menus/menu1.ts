module.exports = {
  data: {
    name: `menu1`,
  },
  async execute(interaction, client) {
    await interaction.update({
      content: `You selected ${interaction.values[0]}`,
    });
  },
};
