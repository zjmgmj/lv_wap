$(document).ready(function() {
	$('#pending_pay').click(function() {
		$('.tabbar_content').hide();
		$('.pending_pay').show();
		$('.tabbar_list').find('span').removeClass('active');
		$(this).find('span').addClass('active');
	});
	$('#not_traveled').click(function() {
		$('.tabbar_content').hide();
		$('.not_traveled').show();
		$('.tabbar_list').find('span').removeClass('active');
		$(this).find('span').addClass('active');
	});
	$('#evaluated').click(function() {
		$('.tabbar_content').hide();
		$('.evaluated').show();
		$('.tabbar_list').find('span').removeClass('active');
		$(this).find('span').addClass('active');
	});
	$('#refund_order').click(function() {
		$('.tabbar_content').hide();
		$('.refund_order').show();
		$('.tabbar_list').find('span').removeClass('active');
		$(this).find('span').addClass('active');
	});
	$('#all').click(function() {
		$('.tabbar_content').hide();
		$('.all').show();
		$('.tabbar_list').find('span').removeClass('active');
		$(this).find('span').addClass('active');
	});
});
