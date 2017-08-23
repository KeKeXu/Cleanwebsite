// JavaScript Document

$(function(){
	//滚动字幕
	var timer=null;
		var marquee = document.getElementById('marquee');
		var offset=0;
		var scrollheight =marquee.offsetHeight;
		var firstNode = marquee.children[0].cloneNode(true);
		marquee.appendChild(firstNode);
		timer=setInterval(rMarquee,80);
		
		marquee.onmouseover=function(){
			clearInterval(timer);
		}
		marquee.onmouseout=function(){
			 timer=setInterval(rMarquee,80);
		}
		function rMarquee(){
			 offset += 1;				 
			if(offset == scrollheight){
				offset = 0;
			}
			marquee.style.marginTop = "-"+offset+"px";
		   
		}
	
	
	
})


