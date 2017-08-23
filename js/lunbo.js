// JavaScript Document
$(function(){
	var user={};
		user.now=0;
		user.timer=null;
		user.pic=[
		"../images/banner1.jpg",
		"../images/banner2.jpg",
		"../images/banner3.jpg",
		"../images/banner4.jpg"
		];

	$(".pic_list").pointTab(user);
})
	jQuery.fn.extend({
	pointTab:function(user){
		return this.each(function(){
			var that=this;
			var sLi=$(that).find("div").eq(0).find("li");
			var xLi=$(that).find("div").eq(1).find("li");
			xLi.click(function(){
			user.now=xLi.index(this);
			$(":animated").stop(true,true);
			  sLi.css('background-image',"url("+user.pic[user.now]+")").css("opacity",0).animate({opacity:1},1000);
			  xLi.removeClass("on").eq(user.now).addClass("on");
	  
			});//xli.click
		
			//自动切换
			user.timer=window.setInterval(function(){goNext()},6000);
			
			sLi.mouseover(function(){
				window.clearInterval(user.timer)
			}).mouseout(function(){
				user.timer=window.setInterval(function(){goNext()},6000);
			});	
	
			function goNext(){
					user.now++;
					if(user.now>=user.pic.length){
						user.now=0
					}
					sLi.css('background-image',"url("+user.pic[user.now]+")").css("opacity",0).stop(true,true).animate({opacity:1},1000);
					 xLi.removeClass("on").eq(user.now).addClass("on");
					  
					}
			
	})//return
	}//pointTab
	
})