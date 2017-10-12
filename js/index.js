<<<<<<< HEAD
$(document).ready(function() {
	//日历
	/*var iframe = $("#iframepage").hide();
	$(".calendarTime").click(function() {
		if(iframe.is(':hidden')) {
			iframe.fadeIn();
		} else {
			iframe.fadeOut();
		}
	});

	var date = '';
	var year, month;
	if(date != '') {
		var dates = date.split("-");
		year = dates[0];
		month = dates[1];
		day = dates[2];
		$("#J-xl").val(date);
		getGoodsNum(year + "-" + month + "-" + day);
	} else {
		year = new Date().getFullYear();
		month = new Date().getMonth() + 1;
		getGoodsNum(year + "-" + month + "-" + new Date().getDate());
	}*/
	
	var temp_html='<div class="recommend_list">'+
							'<img src="images/491971db-b1e8-4e58-94ae-bfa8eb4276e3.jpg" />'+
							'<div class="recommend_piece">'+
								'<span class="">￥</span><span class="">5980</span><span class="">起</span>'+
							'</div>'+
							'<div class="recommend_num">累计报名人数：21人</div>'+
							'<h4 class="recommend_title">【早鸟特惠】西双版纳雨林穿梭，一起体验成长</h4>'+
							'<p class="recommend_detail">试想 张开眼睛，前方是一棵大树直上苍天 左手摘下一片芭蕉，叶上的水珠被晃动滴在脸上 右手抓住一根古藤，听藤上的枝叶诉说雨林故事 左脚越过已经腐朽的却长满了木耳和蘑菇的树干 右脚踏上长满了绿色青苔的石头</p>'+
							'<div class="recommend_label">'+
								'<span>国内游</span><span>西双版纳傣族自治州景洪市</span><span>6-18岁</span>'+
							'</div></div>'
	//滚动加载
	lz_load($("#recommend_content"),temp_html);

});

var countArray = [];
var unit = "场";
var chooseDate = false;

function SelectDate(obj) {
	chooseDate = true;
	$(".content").empty();
	page = 1;
	getGoodsByDate(obj[0] + "-" + obj[1] + "-" + obj[2]);
}

function SelectMonth(obj) {

	getGoodsNum(obj.year + "-" + obj.month + "-01")
}

function SelectYear(obj) {

	getGoodsNum(obj.year + "-" + obj.month + "-01")
}

function getGoodsNum(date) {
	$.ajax({
		type: "post",
		url: "data/actlist.json", //获取每天有几场活动
		data: "date=" + date,
		success: function(obj) {
			countArray = obj.data;
			if(date != "") {
				var dt = new Date(Date.parse(date.replace(/-/g, "/")));

				//日历
				$("#iframepage").fullCalendar({
					year: new Date(dt).getFullYear(), //完整的年份
					month: new Date(dt).getMonth() + 1, //当前月份
					height: 440,
					current: new Date(dt)
				});
			}
		}
	});
}

//切换内容
function getGoodsByDate(date) {
	$.ajax({
		type: "post",
		url: "" + date,
		success: function(obj) {
			var html = '';
			$(".content").append(html);

		},
		error: function() {}
	});
}
=======
>>>>>>> branch 'master' of https://github.com/zjmgmj/lv_wap.git
