<?php
header("Content-type: text/html; charset=utf-8"); 
$iTemArr=array(0=>"开荒保洁",1=>"石材翻新",2=>"清洗地毯",3=>"清洗外墙",4=>"清洗沙发",5=>"清洗烟道",6=>"清洗水晶灯",7=>"地板打蜡",8=>"清洗门头、广告牌",9=>"灭蟑螂、臭虫、蚂蚁",10=>"水泥地面固化",11=>"瓷砖美缝",11=>"其他项目");
$iTem=$_POST['iTem'];
$aDdress=$_POST['aDdress'];
$ask=$_POST['ask'];
$tel=$_POST['tel'];
$user=$_POST['user'];

$str=$iTemArr[$iTem]."&".$aDdress."&".$ask."&".$tel."&".$user."&".date("Y/m/d");

//$content=file_get_contents("user.txt");
	$file=fopen("user.txt","ab");
	$con=$str."\r\n";
	$key=fwrite($file,$con);
	fclose($file);
echo $key;
	


?>