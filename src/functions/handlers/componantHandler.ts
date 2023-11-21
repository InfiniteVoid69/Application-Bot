const fs = require("fs");

module.exports = (client) => {
  client.assetHandler = async() => {
    const assetFolders = fs.readdirSync(`./src/assets`);
    for (const folder of assetFolders) {
      const assetFiles = fs
        .readdirSync(`./src/assets/${folder}`)
        .filter((file) => file.endsWith(".ts"));

        const { buttons, selectMenus } = client;

        switch (folder) {
            case "buttons":
                for (const file of assetFiles){
                    const button = require(`../../assets/${folder}/${file}`);
                    buttons.set(button.data.name, button);
                }
                break;
            case "selectMenus":
              for (const file of assetFiles){
                  const menu = require(`../../assets/${folder}/${file}`);
                  console.log(menu.data.name, menu)
                  selectMenus.set(menu.data.name, menu);
              }
              break;
        
            default:
                break;
        }
    }
  };
};
