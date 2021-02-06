module.exports = class {
    constructor(client) {
        this.client = client;
    }

    async emit(user, message) {
        this.client.logger.log(`${user.fullName} (${user.username}) a aimé un message de ${message.author.fullName} (${message.author.username})`, `log`)
    }
}
