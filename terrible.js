jQuery( document ).ready( function($) {
	$('span.feed-source a').each(function() {
		var $this = $(this);
		var country = $this.text()
						   .split('(')[1]
						   .split(')')[0]
						   .toLowerCase();
		$this.after('<i class="flag ' + country +'">&nbsp;</i>')
		console.log(country);
	});
});