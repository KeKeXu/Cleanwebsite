<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>无标题文档</title>
<style type="text/css">
table{width:90%;margin:0 auto; border:1px solid #ccc; border-collapse:collapse;}
td,th{text-align:center; border:1px solid #ccc;}

</style>
</head>

<body>
<?php
$user=$_POST["user"];
$pass=$_POST["pass"];
if(md5($user)=="0ad688b4b1c7a63cd81f8c540c98d988" && md5($pass)=="f379eaf3c831b04de153469d1bec345e"){
	$handle=fopen("user.txt","r");
	echo "<table>";
	echo "<tr><th>服务项目</th><th>服务地点</th><th>服务要求</th><th>联系电话</th><th>联系人</th><th>日期</th>";
	while (!feof ($handle)) {
		$buffer = fgets($handle, 4096);
		$arr=explode("&",$buffer);
		echo "<tr>";
		echo "<td>".$arr[0]."</td><td>".$arr[1]."</td><td>".$arr[2]."</td><td>".$arr[3]."</td><td>".$arr[4]."</td><td>".$arr[5]."</td>";
		echo "</tr>";
	}
	echo "</table>";
	fclose ($handle);
}else{
	
	echo "<script>alert('用户名或密码不正确,请重新登录');location.href='getInfor.php';</script>";
}
?>
</body>
</html>


