let Command = require(`../../Structure/Command.js`);
const DIG = require(`discord-image-generation`);

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: `rip`,
            description: `Return a RIP image.`,
            category: `Images`,
            enabled: true,
            aliases: [],
            cooldown: 3,
            dmOnly: false,
        });
    }

    async run(message, args) {
        let avatar = message.author.avatarURL;
        let img = await new DIG.Rip().getImage(avatar);
        message.chat.sendMessage(`Veuillez patienter, nous générons votre image...`).then(m => {
            m.delete();
        message.chat.sendPhoto(img);
        })
    }
};