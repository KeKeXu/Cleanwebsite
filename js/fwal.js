// JavaScript Document
 
   var fwalArr=[{"pic":"anli_1.jpg","title":"乐都汇"},{"pic":"anli_2.jpg","title":"佳境天城-清洗外墙"},{"pic":"anli_3.jpg","title":"天津天士力制药集团股份有限公司"},{"pic":"anli_4.jpg","title":"东方宜琴"},{"pic":"anli_5.jpg","title":"银河SOHO D座"},{"pic":"anli_6.jpg","title":"中央电视台"},{"pic":"anli_7.jpg","title":"清洗灯具"},{"pic":"anli_8.jpg","title":"北京永定河孔雀城别墅保洁"},{"pic":"anli_9.jpg","title":"北京东城区外墙清洗"},{"pic":"anli_10.jpg","title":"嘉里中心"},{"pic":"anli_11.jpg","title":"建外SOHO大厦"},{"pic":"anli_12.jpg","title":"北京海杭大厦清洗地毯"}];
 
 $(function(){
	 var dang=0;
	 var div_id="";
	var iUrl=location.href;
	 var sI=iUrl.indexOf("num");
	  if(sI!=-1){
		var nStr=iUrl.substring(sI);
		if(nStr.indexOf(";")!=-1){
			div_id=nStr.substring(4,nStr.indexOf(";"));
		}else{
			div_id=nStr.substring(4)
		}
	  }
	if(div_id!=""){
			dang=parseInt(div_id)-1;
		}
		
		
	   moveTo(dang)
	  
	 $(".con_right span:eq(0),.con_right span:eq(1)").click(function(){
		 dang--
		 dang=dang<=0?0:dang;
		 moveTo(dang);
	})
	  $(".con_right span:eq(2),.con_right span:eq(3)").click(function(){
		 dang++
		  dang=dang>fwalArr.length-1?fwalArr.length-1:dang;
		 moveTo(dang);
	})
	 
	 
  })
  function moveTo(dang){
	 $("#fwalPic").attr("src","../images/anli/"+fwalArr[dang].pic);
	
	 $(".con_right dt").text(fwalArr[dang].title);
	 
	 if(dang!=0){
		 $(".con_right span").eq(1).html(fwalArr[dang-1].title);
	 }else{
		 $(".con_right span").eq(1).html("已是第一页");
	 }
	 
	 
	 if(dang!=fwalArr.length-1){
	 	$(".con_right span").eq(3).html(fwalArr[dang+1].title);
	 }else{
		 $(".con_right span").eq(3).html("已是最后一页");
	 }
  }