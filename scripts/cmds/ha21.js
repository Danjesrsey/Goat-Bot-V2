module.exports = {
	config: {
			name: "cc",
			version: "1.0",
			author: "Shizuka",
			countDown: 5,
			role: 0,
			shortDescription: "sarcasm",
			longDescription: "sarcasm",
			category: "reply",
	},
onStart: async function(){}, 
onChat: async function({
	event,
	message,
	getLang
}) {
	if (event.body && event.body.toLowerCase() == "cc") return message.reply("👋");
}
};
