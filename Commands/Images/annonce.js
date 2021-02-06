let Command = require(`../../Structure/Command.js`);
const DIG = require(`discord-image-generation`);

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: `annonce`,
            description: `Afficher une image d'annonce.`,
            category: `Images`,
            enabled: true,
            aliases: [ "ad" ],
            cooldown: 3,
            dmOnly: false,
        });
    }

    async run(message, args) {
        let avatar = message.author.avatarURL;
        let img = await new DIG.Ad().getImage(avatar);
        message.chat.sendMessage(`Veuillez patienter, nous générons votre image...`).then(m => {
            m.delete();
        message.chat.sendPhoto(img);
        })
    }
};