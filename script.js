
function myFunction() {
	var a = document.getElementById("ilce").value;
	var b = document.getElementById("tarih").value;
	var c = document.getElementById("olcek").value;
	var d = document.getElementById("plan").value;
	var e = document.getElementById("imar").value;

	if (a == "" || b == "" || c == "" || d == "" || e == "") {
		alert("Lütfen tüm alanları doldurup tekrar deneyiniz");
		location.reload();
	}

	else {

  var str = document.getElementById("demo").innerHTML;   
  var str1 = document.getElementById("ilce").value;
  var txt = str.replace("-ilce-", str1);
  document.getElementById("demo").innerHTML = txt;
  var str = document.getElementById("demo").innerHTML;
  var str2 = document.getElementById("tarih").value;
  var txt1 = str.replace("-tarih-", str2);
  document.getElementById("demo").innerHTML = txt1;
  var str = document.getElementById("demo").innerHTML;
  var str3 = document.getElementById("olcek").value;
  var txt2 = str.replace("-olcek-", str3);
  document.getElementById("demo").innerHTML = txt2;
  var str = document.getElementById("demo").innerHTML;
  var str4 = document.getElementById("plan").value;
  var txt3 = str.replace("-plan-", str4);
  document.getElementById("demo").innerHTML = txt3;
  var str = document.getElementById("demo").innerHTML;
  var str5 = document.getElementById("imar").value;
  var txt4 = str.replace("-imar-", str5);
  document.getElementById("demo").innerHTML = txt4; 
  document.getElementById("demo").style.display = "inline";
	} 
}