$(function() {
	$(".person-right").bind("click", function() {
		if ($(this).find("i").hasClass("checkedbox")) {
			$(this).find("i").removeClass("checkedbox");
		}else{
			$(this).find("i").addClass("checkedbox");
		}

	})
})