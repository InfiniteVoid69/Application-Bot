const {
  ActionRowBuilder,
  StringSelectMenuBuilder,
  SlashCommandBuilder,
  StringSelectMenuOptionBuilder,
  ComponentType,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("menu")
    .setDescription("Create a menu"),

  async execute(interaction) {
    const channelMenu = new StringSelectMenuBuilder()
      .setCustomId("menu1")
      .setPlaceholder("*Select the Channel the Application will go in")
      .setOptions(
        new StringSelectMenuOptionBuilder({
          label: "Option 1",
          value: "op1",
        }),
        new StringSelectMenuOptionBuilder({
          label: "Option 2",
          value: "op2",
        })
      );

    const row = new ActionRowBuilder().addComponents(channelMenu);
    const message = await interaction.reply({
      components: [row],
    });
  },
};
