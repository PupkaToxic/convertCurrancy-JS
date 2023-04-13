function convert() {
	var n1, operator1, operator2, result;

	n1 = document.getElementById('num1').value;
	operator1 = document.getElementById('Cur1').value;
	operator2 = document.getElementById('Cur2').value;

	if (operator1 === "Доллар" && operator2 === "Рубль") {
		n1 = parseInt(n1);
		result = n1  * 0.012;
		document.getElementById('out').innerHTML = result;
	}else if (operator1 === "Рубль" && operator2 === "Доллар") {
		n1 = parseInt(n1);
		result = n1  * 81;
		document.getElementById('out').innerHTML = result;
	}else if (operator1 === "Рубль" && operator2 === "Рубль") {
		n1 = parseInt(n1);
		document.getElementById('out').innerHTML = n1;
	}else if (operator1 === "Доллар" && operator2 === "Доллар") {
		n1 = parseInt(n1);
		document.getElementById('out').innerHTML = n1;
	}else if (operator1 === "Рубль" && operator2 === "Евро") {
		n1 = parseInt(n1);
		result = n1 * 90;
		document.getElementById('out').innerHTML = result;
	}else if (operator1 === "Евро" && operator2 === "Рубль") {
		n1 = parseInt(n1);
		result = n1 * 0.011;
		document.getElementById('out').innerHTML = result;
	}else if (operator1 === "Евро" && operator2 === "Евро") {
		n1 = parseInt(n1);
		document.getElementById('out').innerHTML = n1;
	}else if (operator1 === "Доллар" && operator2 === "Евро") {
		n1 = parseInt(n1);
		result = n1 * 0.91;
		document.getElementById('out').innerHTML = result;
	}else if (operator1 === "Евро" && operator2 === "Доллар") {
		n1 = parseInt(n1);
		result = n1 * 1.10;
		document.getElementById('out').innerHTML = result;
	}else {
		result = "Введены некорректные данные"
		document.getElementById('out').innerHTML = result;
	}
}