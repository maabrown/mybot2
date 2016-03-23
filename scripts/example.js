module.exports = function(bot) {
	bot.hear(/javascript/i, function(msg){
		return msg.send('JS rocks')
	})
}