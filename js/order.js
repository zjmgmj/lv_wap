$(function(){
	$(".form-group").on("click",function(){
		$(".form-group input").removeClass("checked");
		$(this).find("input").addClass("checked");
	});
	var num=parseInt($(".order_val").val());
	var price=$(".order_price i").text();
	var total=price*num;
	$(".bottom_left i").text(total);
	console.log(num);
	$(".minus").bind('click',function(){
		if(num>0){
			num-=1;
			$(".order_val").val(num);
			total=price*num;
			$(".bottom_left i").text(total);
			if(num==0){
				$(this).addClass("hui_btn");
			}
		}
		else{
			$(this).addClass("hui_btn")
		}
	});
	$(".plus").bind('click',function(){
		if(num<10){/*10库存量*/						
			num+=1;
			$(".order_val").val(num);
			total=price*num;
			$(".bottom_left i").text(total);
			if(num>0){
				$(".minus").removeClass("hui_btn");
			}
		}
	});
	
})
