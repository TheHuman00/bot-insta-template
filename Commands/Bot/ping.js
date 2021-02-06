const Command = require(`../../Structure/Command.js`);

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: `ping`,
            description: `Envoyer le bot ping.`,
            category: `Bot`,
            enabled: true,
            aliases: [`latency`],
            cooldown: 3,
            dmOnly: false,
        });
    }

    async run(message, args) {
        message.chat.sendMessage(`Récupération du ping...`).then(m => {
            m.delete();
            message.chat.sendMessage(`Mon ping est actuellement à ${(m.timestamp - message.timestamp) / 1000}ms\nJ'utilise ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}mb de RAM`)
        })
    }
}