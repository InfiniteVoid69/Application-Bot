module.exports = {
  name: "interactionCreate",
  async execute(interaction, client) {
    if (interaction.isChatInputCommand()) {
      const { commands } = client;
      const { commandName } = interaction;
      const command = commands.get(commandName);
      if (!command) return;

      try {
        await command.execute(interaction, client);
      } catch (error) {
        console.error(error);
        await interaction.reply({
          content: `There was an error while exicuting this command...\nIf this continues please report the bug`,
          ephemeral: true,
        });
      }
    } else if (interaction.isButton()) {
      const { buttons } = client;
      const { customId } = interaction;
      const button = buttons.get(customId);
      if (!button) return new Error("There is no CustomId for this button");

      try {
        await button.execute(interaction, client);
      } catch (e) {
        console.error(e);
      }
    } else if (interaction.isStringSelectMenu()) {
      const { selectMenus } = client;
      const { customId } = interaction;
      const menu = selectMenus.get(customId);
      if (!menu) return new Error("There is no CustomId for this menu");

      try {
        await menu.execute(interaction, client);
      } catch (e) {
        console.error(e);
      }
    } else if (interaction.isChannelSelectMenu()) {
      const { selectMenus } = client;
      const { customId } = interaction;
      const menu = selectMenus.get(customId);
      if (!menu) return new Error("There is no CustomId for this menu");

      try {
        await menu.execute(interaction, client);
      } catch (e) {
        console.error(e);
      }
    }
  },
};
