var img = document.getElementById('image');
var didier = document.getElementById("FIND");

var width = img.clientWidth;
var height = img.clientHeight;

didier.innerHTML = "Didier"
didier.setAttribute('href', "https://openclassrooms.com");


function clickButton(){
	width = img.clientWidth;
	height = img.clientHeight;
	button.setAttribute("style", "background-color:red; position: absolute;left: " + width*0.833 + "px;top: " + height*0.202 + "px;padding: " + 0.0257*height + "px " + 0.0074*width + "px;border-color: transparent;");

	audio.play();

	win.style.visibility = "visible";
	win.style.top =window.innerHeight*0.10+"px";
	win.style.left =window.innerWidth*0.10+"px";

	console.log("C'est cadeau !!:")
}