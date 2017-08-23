// JavaScript Document
//首页轮播图		
$(function(){
	var user={};
		user.now=0;
		user.timer=null;
		user.pic=[
		"images/banner1.jpg",
		"images/banner2.jpg",
		"images/banner3.jpg",
		"images/banner4.jpg"
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



$(function(){
	//滚动字幕
	var timer=null;
		var marquee = document.getElementById('marquee');
		var offset=0;
		var scrollheight =marquee.offsetHeight;
		
		/*var firstNode = marquee.children[0].cloneNode(true);
		marquee.appendChild(firstNode);*/
		
		marquee.innerHTML+=marquee.innerHTML;
		timer=setInterval(rMarquee,300);
		marquee.onmouseover=function(){
			clearInterval(timer);
		}
		marquee.onmouseout=function(){
			 timer=setInterval(rMarquee,300);
		}
		function rMarquee(){
			
			 offset-=2;				 
			if(offset<=-scrollheight){
				offset=0;
			}
			
			marquee.style.marginTop=offset+"px";
		   
		}
	
	
	
})


	
$(function(){
	//为保洁知识添加事件，打开页面fwxm.html在地址后加入div_id.
	$("#marquee li").click(function(){
		var index=$("#marquee li").index(this);
		location.href="html/bjzc.html?div_id="+index;
	})
	
	var speed=60;
	var GD=document.getElementById('wai'); 
	var GD1=document.getElementById('ul1');
	var GD2=document.getElementById('ul2');
	
	GD2.innerHTML=GD1.innerHTML;
	function Marquee(){
		if(GD2.offsetWidth-GD.scrollLeft<=0){
			GD.scrollLeft-=GD1.offsetWidth;
		}else{
			GD.scrollLeft++;
			
		}
	}
	var MyMar=setInterval(Marquee,speed);
	GD.onmouseover=function() {clearInterval(MyMar);}
	GD.onmouseout=function() {MyMar=setInterval(Marquee,speed);}
	
	//为服务项目添加事件，打开页面fwxm.html在地址后加入div_id.
	
	$(".list_service dl").click(function(){
		var index=$(".list_service dl").index(this);
		
		location.href="html/fwxm.html?div_id="+index;
	})
	
})

function AddFavorite(sURL, sTitle)
{
    try
    {
        window.external.addFavorite(sURL, sTitle);
    }
    catch (e)
    {
        try
        {
            window.sidebar.addPanel(sTitle, sURL, "");
        }
        catch (e)
        {
            alert("加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}


function SetHome(obj,url){
  try{
    obj.style.behavior='url(#default#homepage)';
    obj.setHomePage(url);
  }catch(e){
    if(window.netscape){
     try{
       netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
     }catch(e){
       alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
     }
    }else{
    alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【"+url+"】设置为首页。");
    }
 }
}