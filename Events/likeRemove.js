module.exports = class {
    constructor(client) {
        this.client = client;
    }

    async emit(user, message) {
        this.client.logger.log(`${user.fullName} (${user.username}) a dislike un message de ${message.author.fullName} (${message.author.username})`, `log`)
    }
}
