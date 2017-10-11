$(document).ready(function() {
	$('.contract_info_c_list').click(function() {
		$(this).next('.contract_info_c_toggle').toggle(100);
	});
	$(".check_radio").click(function(){
		$(this).parents('.classify').find('.check_radio').removeClass("checked");
		$(this).addClass("checked");
	});
});