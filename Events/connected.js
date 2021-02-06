module.exports = class {
    constructor(client) {
        this.client = client;
    }

    async emit() {
        this.client.cache.pendingChats.forEach((chat) => chat.approve());
        this.client.logger.log(`connecté en tant que ${this.client.user.fullName} (${this.client.user.username}).`, `pret`);
        this.client.logger.log(`Abonné: ${this.client.user.followerCount}`, `pret`);
        this.client.logger.log(`Abonnement: ${this.client.user.followingCount}`, `pret`);
        this.client.logger.log(`Compte Business : ${this.client.user.isBusiness}`, `pret`);
        this.client.logger.log(`Compte Vérifié: ${this.client.user.isVerified}`, `pret`);
        this.client.logger.log(`Privé: ${this.client.user.isPrivate}`, `pret`);
    }
}
