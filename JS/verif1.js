var nameEQ = "=";
var ca = document.cookie.split(';');
for(var i=0;i < ca.length;i++) {
	var endstr=document.cookie.indexOf (";", offset);
  	if (endstr==-1) endstr=document.cookie.length;
  	if (unescape(document.cookie.substring(offset, endstr)) == "1"){
		createCookie("TheCookie","",-1);
		document.location.href="Nop.html";
	}
}
