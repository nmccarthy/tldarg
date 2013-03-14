yam.$(document).ready(function() {
	var html = yam.$('.yj-tapf-precaret').html()

	setInterval(function() {
		if(yam.$('.yj-tapf-precaret').html() != html) {
			html = yam.$('.yj-tapf-precaret').html();
			messageTruncater = new yam.helper.message.MessageListItemTruncater;
			truncated = messageTruncater.truncate(html, 800, 500, 500);
			console.log(truncated);
			if(truncated != html) {
				possibleTruncation = yam.$(truncated);
				if(possibleTruncation[0].innerHTML != possibleTruncation[3].innerHTML) {
					yam.$('.yj-tapf-precaret').css('background-color', 'pink');
				}
			}
			else
			{
				yam.$('.yj-tapf-precaret').css('background-color', 'transparent');
			}
		}
	}, 1)
});