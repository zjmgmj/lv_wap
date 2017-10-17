$(document).ready(function() {
	$("#input1").shijian({
		startYear: 1989,
		val: 1989,
		endYear: 2017,

		Hour: false, //是否显示小时
		Minute: false, //是否显分钟
		okfun: function(sjObj) {
			age('#input1', sjObj.opt.yyyy);
		}
	});

	//年龄计算
	function age(obj, endYear) {
		var today_date = new Date();
		var today_year = today_date.getUTCFullYear(),
			today_month = today_date.getUTCMonth() + 1,
			today_day = today_date.getDate();
		var input_val = today_year - endYear;
		$(obj).val(input_val);
	}

	$('.choose_age_add').click(function() {
		var html = '<div class="choose-age">' +
			'<p></p><input type="text" value="孩子生日" id="input2" />' +
			'<div class="close_choose_age"><i class="icon iconfont icon-jia"></i></div></div>'
		$('.info-age').append(html);
		$(this).hide();
		$("#input2").shijian({
			startYear: 1989,
			val: 1989,
			endYear: 2017,

			Hour: false, //是否显示小时
			Minute: false, //是否显分钟
			okfun: function(sjObj) {
				age('#input2', sjObj.opt.yyyy);
			}
		});
		$('.close_choose_age').click(function() {
			$(this).parent('.choose-age').remove();
			$('.choose_age_add').show();
			return false;
		});
		return false;
	});

});