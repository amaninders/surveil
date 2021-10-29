$(function() {

	$('input[type=text], textarea').each(function (index) {
		$(this).on('input', function(e){
			chrome.runtime.sendMessage({text: $(e.target).val()})
		});
	})
});

window.addEventListener('message', function(event) {
	if (event.data.html) {
		new Notification('Templated!', {
			icon: 'icon.png',
			body: 'HTML Received for "' + event.data.name + '": `' +
					event.data.html + '`'
		});
	}
});