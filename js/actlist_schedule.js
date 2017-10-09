$(document).ready(function() {
	var iframe = $("#iframepage").hide();
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
	}
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