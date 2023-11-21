module.exports = {
  data: {
    name: `menu1`,
  },
  async execute(interaction) {
    await interaction.reply({
      content: `You selected ${interaction.values[0]}`,
    });
  },
};
