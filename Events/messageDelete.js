module.exports = class {
    constructor(client) {
        this.client = client;
    }

    async emit(cachedMessage) {
        if (!cachedMessage) return;
        this.client.logger.log(`@${cachedMessage.author.username} vient de supprimer son message: ${cachedMessage.content}`, `log`);
    }
}
