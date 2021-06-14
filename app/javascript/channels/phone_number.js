function copy_phone_number() {
	let numberBox = document.getElementById("phone_number");
	numberBox.addEventListener("click", function(e) {
		let number = document.getElementById("phone_number").childNodes[3].textContent;
		const el = document.createElement("textarea");
		el.value = number;
		document.body.appendChild(el);
		el.select();
		document.execCommand('copy');
		document.body.removeChild(el);
		alert("'" + number + "' a bien été sauvegardé dans votre presse-papier.");
	})
}

copy_phone_number();