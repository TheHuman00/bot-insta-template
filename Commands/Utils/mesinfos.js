const Command = require(`../../Structure/Command.js`);

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: `mesinfos`,
            description: `Voir des informations à propos de toi.`,
            category: `Utils`,
            enabled: true,
            aliases: [],
            cooldown: 3,
            dmOnly: false,
        });
    }

    async run(message, args) {
        message.author.fetch().then(e => {
            message.chat.sendMessage(
                `Nom complet: ${message.author.fullName}\nNom d'utilisateur: ${message.author.username}\nID: ${message.author.id}\nBiographie:\n${message.author.biography}\nAbonné: ${message.author.followerCount}\nAbonnement: ${message.author.followingCount}\nCompte business: ${message.author.isBusiness}\nCompte vérifié: ${message.author.isVerified}\nCompte privé: ${message.author.isPrivate}\nNombre de posts: ${message.author.mediaCount}\nNombre de posts IGTV: ${message.author.totalIgtvVideos}`)
        })
    }
}