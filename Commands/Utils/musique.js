const Command = require(`../../Structure/Command.js`);
const ytdl = require('ytdl-core');

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: `musique`,
            description: `Voir des informations à propos de toi.`,
            category: `Utils`,
            enabled: true,
            aliases: [],
            cooldown: 3,
            dmOnly: false,
        });
    }

    async run(message, args) {
        const argss = args[0];		
        if(!argss){
			return message.chat.sendMessage(`Veuillez mettre un lien youtube.`);
        }
        if(argss.includes('https://youtu.be') || argss.includes('https://www.youtube.com/watch')) {

            const stream = ytdl(argss, { filter: format => format.container === 'mp4' });
            const array = [];
            message.chat.sendMessage(`La vidéo doit faire max 1min...\nSi c'est le cas ça arrive !`).then(m => {
                m.delete({timeout: 1000});
            });
            stream
            .on('data', chunk => {
                message.chat.startTyping();
                array.push(chunk);
            })
            .on('end', () => {
                message.chat.stopTyping();
                message.chat.sendVoice(Buffer.concat(array));
            });
        } else {
            message.chat.sendMessage(`Veuillez mettre un lien youtube valide (les playlists ne marche pas).`);
        }
    }
}