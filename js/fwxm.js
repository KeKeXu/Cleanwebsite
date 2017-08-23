// JavaScript Document
$(function(){
	
	if($(".con_right").height()<$(".con_left").height()){
							$(".con_right").css("height",$(".con_left").height()+"px");
	}	
	$("#fwxm ul li").click(function(){
		var index=$("#fwxm ul li").index(this);
		$("#fwxm ul li").removeClass("on").eq(index).addClass("on");
		$(".con_right_b").removeClass("on").eq(index).addClass("on");
	})
	var iUrl=location.href;
	var sI=iUrl.indexOf("div_id");
	if(sI!=-1){
		var nStr=iUrl.substring(sI);
		var div_id;
		if(nStr.indexOf(";")!=-1){
			div_id=nStr.substring(7,nStr.indexOf(";"));
		}else{
			div_id=nStr.substring(7)
		}
		if(div_id!=''){
			$("#fwxm ul li").removeClass("on").eq(div_id).addClass("on");
			$(".con_right_b").removeClass("on").eq(div_id).addClass("on");
		}
	}
})