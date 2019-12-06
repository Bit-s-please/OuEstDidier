var img = document.getElementById('image');
var didier = document.getElementById("FIND");
var titre = document.getElementById("H1");

var width = img.clientWidth;
var height = img.clientHeight;

didier.innerHTML = "Didier"
didier.setAttribute('href', "../HTML/charlie.html");
didier.style.top = height+"px";
didier.style.left = width+"px";
titre.style.fontSize = "550%";

window.addEventListener("resize", rezizeWindow);


function rezizeWindow(){
	width = img.clientWidth;
	height = img.clientHeight;
	didier.style.top = height+"px";
	didier.style.left = width+"px";
	titre.setFont(0.50);
	console.log("C'est cadeau !!:")
}