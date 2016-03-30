


// The message must be directed to the bot (b/c it is a respond method)
// Will respond in private chat and in public if direct message using @


// Bot will respond to mesage in the current chat room using the send method
// Bot will respond to anyone who says crossfit in any channel b/c of the hear method
bey_gifs = [
		"http://giphy.com/gifs/beyonce-hair-flip-weave-RUPe2o8mKzmDK",
		"http://giphy.com/gifs/beyonce-hair-gif-Z0Umc2aJY64XS",
		"http://giphy.com/gifs/beyonce-hair-flip-SHlDG8YSEnBmg",
		"http://giphy.com/gifs/beyonce-hair-flip-4YAkSYGsKieXK"
	]

blue_ivy = ["http://giphy.com/gifs/beyonce-blue-ivy-gif-bn1SZvFaafuEM",
		"http://giphy.com/gifs/beyonce-perfect-blue-ivy-13oSpHy5MdYydy"]



module.exports = function(bot) {

	bot.respond(/beyonce/i, function(msg) {
		msg.reply('Hot Sauce in my Bag, SWAG')
	})

	bot.hear(/crossfit/i, function(msg){
		msg.send('Who said anything about crossfit?')
	})

	bot.hear(/hotsauce/i, function(msg) {	
		bot.brain.set('hotsauceCount',
			(bot.brain.get('hotsauceCount') || 0) + 1)
	})
	
	bot.hear(/how many have swag\?/i, function(msg){

		msg.reply((bot.brain.get('hotsauceCount')))
		msg.send("http://giphy.com/gifs/beyonce-formation-hot-sauce-LqD2owvdxy8Io")
	})

	bot.hear(/hair flip/i, function(msg){
		msg.send( msg.random( bey_gifs))
	})

	bot.respond(/ blue (.*)/i, function(msg) {
		var blue_word = escape(msg.match[1]);
		if (blue_word == "ivy") {
			msg.send('A Star is Born');
			msg.send( msg.random(blue_ivy));
			
		} else {
			msg.send('Try Again');
		}
	})

	bot.respond(/what are your favorite Beyonce songs\?/i, function(msg) {
		var songs = ['Resentment', 'Smash Into You', 'Blow', 'Crazy in Love'];
		var songsLength = songs.length;
		for (i=0; i < songsLength; i++) {
			msg.send((i+1) + ". " + songs[i])
		}
	})

	bot.respond(/which Beyonce songs do you hate\?/i, function(msg) {
		var dislikeSongs = ['Ave Maria', 'Gift from Virgo', 'Daddy', 'Halo'];
		var songLengthDislike = dislikeSongs.length;
		function returnSongs(num) {
			if (num == 4) {
				return returnSongs(num - 1);
			}
			else if (num < 0) {
				return -1;
			}
			else if (num < 4) {
				msg.send(dislikeSongs[num]);
				return returnSongs(num - 1);
			}
		}
		returnSongs(songLengthDislike);
	})

	bot.hear(/convert (.*) to btc/i, function(msg){
		var usd = escape(msg.match[1]);
		var btc = 419;
		var converted;
		var newConverted;
		
		function doItAll() {
			usdToBTC();
			convertNum();
			msg.reply(newConverted)
		}

		function usdToBTC() {
			converted = usd/btc;
		}

		function convertNum() {
			newConverted = Math.round(converted);
		}
		//console.log(usd);
		doItAll();
	})

}