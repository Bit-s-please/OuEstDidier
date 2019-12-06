var button = document.getElementById('button');
var img = document.getElementById('image');
var win = document.getElementById('WIN');

var width = img.clientWidth;
var height = img.clientHeight;
var audio = new Audio('../Ressources/Street Fighter II-You Win Perfect.mp3');


changeButtonPosition();

var test = 0;
window.addEventListener("resize", changeButtonPosition);
button.addEventListener("click", clickButton);

function changeButtonPosition(){
	width = img.clientWidth;
	height = img.clientHeight;
	button.setAttribute("style", "background-color:transparent; position: absolute;left: " + width*0.833 + "px;top: " + height*0.202 + "px;padding: " + 0.0257*height + "px " + 0.0074*width + "px;border-color: transparent;");
}

function clickButton(){
	width = img.clientWidth;
	height = img.clientHeight;
	button.setAttribute("style", "background-color:red; position: absolute;left: " + width*0.833 + "px;top: " + height*0.202 + "px;padding: " + 0.0257*height + "px " + 0.0074*width + "px;border-color: transparent;");

	audio.play();

	win.style.visibility = "visible";
	win.style.top =window.innerHeight*0.10+"px";
	win.style.left =window.innerWidth*0.10+"px";

	console.log("C'est cadeau !!:");

	var expires = "";
	document.cookie = "TheCookie=1"+expires+"; path=/";
	document.location.href="PAGEDARK.html";
}