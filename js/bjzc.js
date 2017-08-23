// JavaScript Document
$(function(){
	
	if($(".con_right").height()<$(".con_left").height()){
							$(".con_right").css("height",$(".con_left").height()-10+"px");
	}	
	
$("#bjzc_left ul li").click(function(){
	var index=$("#bjzc_left ul li").index(this)+1;
	file="cs"+index+".txt";
		$.ajax({
				 type:"POST",
				 url:"getfile.php",
				 data:{name:file},
				 success:function(data){
					$("#bjzc_left ul li").removeClass("on").eq(index-1).addClass("on");
					$(".con_right_c").html(data); 
					$(".con_right").css("height","auto");
						
						if($(".con_right").height()<$(".con_left").height()){
							$(".con_right").css("height",$(".con_left").height()-10+"px");
						}
				  }
				  
			})
			
		
	//$(".con_right_c").removeClass("on").eq(index).addClass("on");
		
	
	
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
			
			div_id=parseInt(div_id)+1;
			file="cs"+div_id+".txt";
			$.ajax({
				 type:"POST",
				 url:"getfile.php",
				 data:{name:file},
				 success:function(data,st){
					$("#bjzc_left ul li").removeClass("on").eq(div_id-1).addClass("on"); 
					$(".con_right_c").html(data); 
					$(".con_right").css("height","auto");
						
						if($(".con_right").height()<$(".con_left").height()){
							$(".con_right").css("height",$(".con_left").height()-10+"px");
						}
					
					$(window).scrollTop(500);
				  }
				  
				  })
	
		}
	}

})