$(document).ready(function() {
	$('#details').bind('click', function() {
		$('.details_content').show();
		$('.score').hide();
		$(this).addClass('active');
		$('#scores').removeClass('active');
	});
	$('#scores').bind('click', function() {
		$('.details_content').hide();
		$('.score').show();
		$(this).addClass('active');
		$('#details').removeClass('active');
	});
})