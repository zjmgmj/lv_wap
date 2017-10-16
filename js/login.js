$(document).ready(function() {
	//判断是否微信登陆
	function isWeiXin() {
		var ua = window.navigator.userAgent.toLowerCase();
		console.log(ua); //mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
		if(ua.match(/MicroMessenger/i) == 'micromessenger') {
			return true;
		} else {
			return false;
		}
	}
	if(isWeiXin()) {
		console.log('微信登录');
	} else {
		login_check_show();
	}
	$('.tel_login').click(function() {
		login_check_show();
	});
	function login_check_show(){
		$('.login_check').show();
		$('.login').hide();
	}
	var login_bg_h=$(window).height()-$('.detail_header').height();
	$('.login,.login_check').css('height',login_bg_h);
	
});