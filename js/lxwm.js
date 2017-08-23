// JavaScript Document

window.onload=function(){
	
			var lo=116.295059;
			var la=39.856543;	
			
			// 百度地图API功能
	var map = new BMap.Map("con_right");    // 创建Map实例
	map.centerAndZoom(new BMap.Point(lo,la),15);  // 初始化地图,设置中心点坐标和地图级别
	map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
	map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
		
	//创建小狐狸
	var pt = new BMap.Point(lo,la);
	var myIcon = new BMap.Icon("logo1.gif", new BMap.Size(45,45));
	var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
	map.addOverlay(marker2);  
	
	
	// 将标注添加到地图
	var opts = {
	  position :pt,    // 指定文本标注所在的地理位置
	  offset   : new BMap.Size(30, -30)    //设置文本偏移量
	}
	var label = new BMap.Label("火星人教育", opts);  // 创建文本标注对象
		label.setStyle({
			 color : "red",
			 fontSize : "12px",
			 height : "20px",
			 lineHeight : "20px",
			 fontFamily:"微软雅黑"
		 });
	map.addOverlay(label);   	
		
		
		
	
}