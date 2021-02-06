const Command = require(`../../Structure/Command.js`);

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: `prefix`,
            description: `Configure the bot prefix.`,
            category: `Bot`,
            enabled: true,
            aliases: [],
            cooldown: 3,
            dmOnly: false,
        });
    }

    async run(message, args, data) {
        if (message.chat.isGroup && !message.chat.adminUserIDs.includes(parseInt(message.author.id))) return message.chat.sendMessage(`You do not have the permission to use this command.`);
        let prefix = args[0];
		if(!prefix){
			return message.chat.sendMessage(`Veuillez spécifier un argument.`);
		}
		if(prefix.length > 5){
			return message.chat.sendMessage(`Le préfixe ne peut pas comporter plus de 5 caractères.`);
		}
        
        if (message.chat.isGroup) {
            data.groups.prefix = prefix;
            data.groups.save();
        } else {
            data.users.prefix = prefix;
            data.users.save();
        }

		message.chat.sendMessage(`Le préfixe est maintenant: ${prefix}`);
    }
}