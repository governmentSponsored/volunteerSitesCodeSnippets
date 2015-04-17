jQuery( document ).ready( function($) {
	$('span.feed-source a').each(function() {
		var $this = $(this);
		var country = $this.text();
		var str = ' – ';
		if(country.indexOf(str) > -1) { 
			country = country.split(' – ')[1].toLowerCase();
			$this.after('<a href="http://www.pcvresource.com/tag/' + country + '"><i class="flag ' + country +'">&nbsp;</i></a>');
		}
			console.log(country);
	});
	var url = window.location.href;
	
	if(url.indexOf('resources-by-country/') > -1) {
		var country = $("h1.entry-title").text().toLowerCase();
		if(country.indexOf('edit') > -1) {
			country = country.split(' edit')[0];
		}
		$('aside div.st-tag-cloud a').each(function() {
			var $this = $(this);
			var text = $this.text().toLowerCase();
			console.log(text);
			console.log(text.indexOf(country));
			if(text.indexOf(country) === -1) {
				$this.remove();
			} else {
				$this.addClass('terrible-tag');
			}
		});	
	}
});
