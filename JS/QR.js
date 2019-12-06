
	var k = [38, 38, 40, 40, 37, 39, 37, 39],
	n = 0;
	$(document).keydown(function (e) {
		if (e.keyCode === k[n++]) {
			if (n === k.length) {
				window.location.href='../Ressources/parlezAMIetentrez.zip';
				n = 0;
				return false;
			}
		}
		else {
			n = 0;
		}
	});

	var m = [65,77,73],
	l = 0;
	$(document).keydown(function (e) {
		if (e.keyCode === m[l++]) {
			if (l === m.length) {
				alert('mot de passe : mellon');
				l = 0;
				return false;
			}
		}
		else {
			l = 0;
		}
	});
