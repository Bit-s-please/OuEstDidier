var img = document.getElementById('image');
var didier = document.getElementById("FIND");
var titre = document.getElementById("H1");
var win = document.getElementById('1');

win.style.color = "red";
win.style.position = "absolute";
win.style.visibility = "hidden";
win.style.backgroundColor = "black";
win.style.fontSize = "6vw";
win.innerHTML = "Didier a trouvé un : pull";
win.setAttribute('href', "../HTML/combinaison.html");

img.style.width = "100%";
img.style.height = "100%";

titre.style.color = "red";
titre.style.fontSize = "4vw";
titre.style.textAlign = "center";
titre.style.marginTop = "0";
titre.style.position = "absolute";

didier.style.fontSize = "1px";
didier.style.position = "absolute";
didier.style.opacity = "0";

var width = img.clientWidth;
var height = img.clientHeight;

didier.innerHTML = "Didier";
didier.style.top = height+"px";
didier.style.left = width+"px";

window.addEventListener("resize", rezizeWindow);
didier.addEventListener("click", clickButton);

function rezizeWindow(){
	width = img.clientWidth;
	height = img.clientHeight;
	didier.style.top = height+"px";
	didier.style.left = width+"px";
}

function clickButton(){
	width = img.clientWidth;
	height = img.clientHeight;

	win.style.visibility = "visible";
	win.style.top =window.innerHeight*0.20+"px";
	win.style.left =window.innerWidth*0.20+"px";
}
