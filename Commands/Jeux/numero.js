const Command = require(`../../Structure/Command.js`);

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: `numero`,
            description: `Trouve le bon numéro.`,
            category: `Jeux`,
            enabled: true,
            aliases: [ "bingo" ],
            cooldown: 3,
            dmOnly: false,
        });
    }

    async run(message, args) {
        message.chat.sendMessage(`Le bingo a commencé, trouvez un nombre entre 1 et 100 en 2 minutes.`);
        let numberToFind = Math.floor(Math.random() * (100 - 1 + 1) + 1);
        const collector = message.createMessageCollector({
            filter: (m) => m.content === String(numberToFind),
            idle: 120000
        });

        collector.on(`message`, (m) => {
            if (parseInt(m.content) < numberToFind) {
                message.chat.sendMessage(`${m.author.fullName} le nombre est plus grand que ${m.content} !`)
            }            
            if (parseInt(m.content) > numberToFind) {
                message.chat.sendMessage(`${m.author.fullName} le nombre est plus petit que ${m.content} !`)
            }
            if (m.content === String(numberToFind)) {
                message.chat.sendMessage(`${m.author.fullName} (${m.author.username}) a trouvé le numéro, c'était: ${numberToFind}, GG !!`)
                collector.end();
            }
        });

        collector.on(`end`, (reason) => {
            if (reason === `idle`) {
                message.chat.sendMessage(`Le temps est écoulé et personne n'a trouvé le numéro ... c'était: ${numberToFind}!`)
            }
        });
    }
}