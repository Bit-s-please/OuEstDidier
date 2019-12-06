var button = document.getElementById('button');
var img = document.getElementById('image');
var win = document.getElementById('WIN');

var width = img.clientWidth;
var height = img.clientHeight;
var audio = new Audio('../Ressources/Street Fighter II-You Win Perfect.mp3');
var img = document.getElementById('image');
var win = document.getElementById('1');

img.style.width = "100%";
img.style.height = "100%";

win.style.color = "red";
win.style.position = "absolute";
win.style.visibility = "hidden";
win.style.backgroundColor = "black";
win.style.fontSize = "6vw";
win.innerHTML = "CONGRATULATIONS YOU WIN <br /> Charlie s'approche de vous et vous chuchotte à l'oreille : le ";
win.setAttribute('href', "../HTML/PAGEDARK.html");

changeButtonPosition();

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

	var expires = "";
	document.cookie = "TheCookie=1"+expires+"; path=/";
}
