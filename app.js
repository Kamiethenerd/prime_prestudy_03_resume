$(document).ready(function() {
	$('.resume').hide();
	$('button').on('click', function(){
		$('button').hide();
		$('.resume').fadeIn('slow');
});

});