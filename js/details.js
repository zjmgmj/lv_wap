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
	
	//评价图片放大切换
	$('.score_d_img img').bind('click', function() {
		var thisImg = $(this).parent();
		var index_num = $(this).index();
		var lengthNum = thisImg.find('img').length;
		$('.pic_show').show();
		imgMaxPath = thisImg.children('img')[index_num].getAttribute('src');
		var picHtml = '<div class="swiper-slide"><img src=\"' + imgMaxPath + '\" /></div>',
			imgMaxPath, picHtmlmin = '';
		for(var i = 0; i < lengthNum; i++) {
			imgMaxPath = thisImg.children('img')[i].getAttribute('src');
			if(i < index_num) {
				picHtmlmin = picHtmlmin + '<div class="swiper-slide"><img src=\"' + imgMaxPath + '\" /></div>';
			}
			if(i > index_num) {
				picHtml = picHtml + '<div class="swiper-slide"><img src=\"' + imgMaxPath + '\" /></div>';
			}
		}
		picHtml = '<div class="swiper-container"><div class="swiper-wrapper">' + picHtml + picHtmlmin + '</div></div>';
		$('.pic_show').html(picHtml);
		var swiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			initialSlide: 0,
			updateFormElements: true,
			paginationClickable: true
		});
		return false;
	});
	$('.pic_show').bind('click', function() {
		$('.pic_show').hide();
	});
	/*end*/
	
	
	$('#buy_btn').click(function(){
		$('.buy_check').show();
	});
	$('.buy_back').click(function(){
		$('.buy_check').hide();
	});
})