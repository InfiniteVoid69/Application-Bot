import { EmbedBuilder } from "discord.js";


module.exports = {
  data: {
    name: `appChannel`,
  },
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .addFields([
        {
          name: 'Application Channel',
          value: `${interaction.values[0]}`,
          inline: false
        }
        ])
    await interaction.edit(embed);
  },
};
