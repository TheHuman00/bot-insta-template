let Command = require(`../../Structure/Command.js`);
const DIG = require(`discord-image-generation`);

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: `flou`,
            description: `Photo flou.`,
            category: `Images`,
            enabled: true,
            aliases: [],
            cooldown: 3,
            dmOnly: false,
        });
    }

    async run(message, args) {
        let avatar = message.author.avatarURL;
        let img = await new DIG.Blur().getImage(avatar);
        message.chat.sendMessage(`Veuillez patienter, nous générons votre image...`).then(m => {
            m.delete();
        message.chat.sendPhoto(img);
        })
    }
};