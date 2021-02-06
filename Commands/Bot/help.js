const Command = require(`../../Structure/Command.js`);

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: `help`,
            description: `Envoie la liste des commandes.`,
            category: `Bot`,
            enabled: true,
            aliases: [`?`],
            cooldown: 3,
            dmOnly: false,
        });
    }

    async run(message, args) {
        message.chat.sendMessage(`Voici les commandes que vous pouvez utiliser !`);
        setTimeout(function(){ 
            message.chat.sendMessage(`---------Général--------- \n/help, /ping, /prefix`);
            message.chat.sendMessage(`---------Images---------- \n/annonce, /beau, /flou, /supprimer, /gay, /poutine, /rip, /poubelle`);
            message.chat.sendMessage(`----------Jeux----------- \n/numero`);
            message.chat.sendMessage(`----------Utils---------- \n/mesinfos`);
        }, 100);
    }
}