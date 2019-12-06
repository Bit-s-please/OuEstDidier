var step = 5;

function IsItTrue(btn) {
console.log(step);
  switch (btn) {
  	case 6:
  		if(step == 2){
  			step = 1;
  		}
  		else{
  			step = 5;
  		}
  		break;
  	case 38:
  		step = 5;
  		break;
  	case 59:
  		step = 5;
  		break;
  	case 4:
  		step = 5;
  		break;
  	case 25:
  		break;
  	case 67:
  		if(step == 4){
  			step = 3;
  		}
  		else{
  			step = 5;
  		}
  		break;
  	case 51:
  		step = 5;
  		break;
  	case 35:
  		step = 5;
  		break;
  	case 16:
  		if(step == 1){
  			step = 0;
  		}
  		else{
  			step = 5;
  		}
  		break;
  	case 73:
  		step = 5;
  		break;
  	case 20:
  		step = 5;
  		break;
  	case 11:
  		if(step == 5){
  			step = 4;
  		}
  		else{
  			step = 5;
  		}
  		break;
  	case 96:
  		step = 5;
  		break;
  	case 61:
  		if(step == 3){
  			step = 2;
  		}
  		else{
  			step = 5;
  		}
  		break;
  	case 3:
  		step = 5;
  		break;
  	case 22:
  		step = 5;
  		break;
  	default:
  		console.log("Retiens bien : est")
  }
  console.log(step);

  if(step == 0){
    document.location.href="../HTML/RICKROLL.html";
  }

  if(step == 5){
  	window.open("../HTML/popup.html", "TRY AGAIN !", "height=450 , width=475");
  }
}