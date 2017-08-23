// JavaScript Document
$(function(){
	$("#aboutus_menu ul li").click(function(){
		var index=$("#aboutus_menu ul li").index(this);
		$("#aboutus_menu ul li").removeClass("on").eq(index).addClass("on");
		$(".con_right_a").removeClass("on").eq(index).addClass("on");
	})
})