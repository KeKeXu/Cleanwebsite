// JavaScript Document
window.onload=function(){
	var oForm=document.getElementById("form1");
	oForm.uSubmit.onclick=function(){
		var iTem=oForm.item.value;
		var aDdress=oForm.address.value;
		var ask=oForm.ask.value;
		var tel=oForm.tel.value;
		var user=oForm.user.value;
		if(aDdress==""){
			alert("还没有填写服务地点噢");
			return  false;
		}else if(!check(tel)){
			alert("联系电话格式不正确噢");
			return  false;
		}else if(user==""){
			alert("还没有填写联系人噢");
			return  false;
		}
		
		if(confirm("确认提交吗？")){
			$.ajax({
				 type:"POST",
				 url:"wsyy/save.php",
				 data:{"iTem":iTem,"aDdress":aDdress,"ask":ask,"tel":tel,"user":user},
				 success:function(data){
					if(data>=10){
							alert("信息提交成功！稍后电话联系您!");
							oForm.reset();
						}else{
							alert("系统故障，请稍后重试！");
						}
				 }
				  
			})//ajax
			
		}
		
		
	}
}

function check(num){
	var reg=/^[0-9()-]{8,14}$/;
	
	return reg.test(num);
}