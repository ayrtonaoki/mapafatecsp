function selecionaLocal(local, andar) {
	if (andar) {
		let totalPredios = document.getElementById(andar).contentWindow.document.getElementsByTagName('rect');
		for (i = 0; i < totalPredios.length; i++) {
			totalPredios.item(i).style.fill = '#545B62';
		};
		document.getElementById(andar).contentWindow.document.getElementById(local).style.fill = '#007bff';
	}
	else {
		let totalPredios = document.getElementsByTagName('rect');
		for (i = 0; i < totalPredios.length; i++) {
			totalPredios.item(i).style.fill = '#545B62';
		};

		document.getElementById(local).style.fill = '#007bff';
	}
};

function mudaMapa(mapa, salas) {
	let totalMapas = document.getElementsByTagName('iframe');
	let totalSalas = document.getElementsByClassName('dropdown');

	for (i = 0; i < totalMapas.length; i++) {
		totalMapas.item(i).style.display = 'none';
	};
	for (i = 0; i < totalSalas.length; i++) {
		totalSalas.item(i).style.display = 'none';
	};

	document.getElementById(mapa).style.display = 'inline';
	document.getElementById(salas).style.display = 'inline';
};

function mudaListaSalas(andar) {
	let totalSalas = document.getElementsByClassName('list-group');

	for (i = 0; i < totalSalas.length; i++) {
		totalSalas.item(i).style.display = 'none';
	};

	document.getElementById('listaSalas').style.display = 'block';
	document.getElementById(andar).style.display = 'block';
};

function verificaFormulario(form, mensagem) {
	let mensagem = document.forms[form][mensagem].value;
	if (mensagem == "") {
		alert("Digite uma mensagem para enviar o email!");
		return false;
	}
};
