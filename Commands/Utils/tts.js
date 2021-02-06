const Command = require(`../../Structure/Command.js`);
const discordTTS = require("../../util/tts.js");

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: `tts`,
            description: `Voir des informations à propos de toi.`,
            category: `Utils`,
            enabled: true,
            aliases: [],
            cooldown: 3,
            dmOnly: false,
        });
    }

    async run(message, args) {
        const argss = args.join(" ");	
        if(!argss){
			return message.chat.sendMessage(`Veuillez mettre un lien youtube.`);
        }

            const stream = discordTTS.getVoiceStream(argss);
            const array = [];
            stream
            .on('data', chunk => {
                message.chat.startTyping();
                array.push(chunk);
            })
            .on('end', () => {
                message.chat.stopTyping();
                message.chat.sendVoice(Buffer.concat(array));
            });
    }
}