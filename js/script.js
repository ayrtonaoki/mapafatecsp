function selecionaLocal(local, andar) {
	if (andar) {
		let totalPredios = document.getElementById(andar).contentWindow.document.getElementsByTagName('rect');
		for (i = 0; i < totalPredios.length; i++) {
			totalPredios.item(i).style.fill = '#545B62';
		};
		document.getElementById(andar).contentWindow.document.getElementById(local).style.fill = '#007bff';
		document.getElementById('localSelecionado').style.display = 'block';
		document.getElementById('localSelecionado').innerHTML = document.getElementById('_' + local).innerHTML;
	}
	else {
		let totalPredios = document.getElementsByTagName('rect');
		for (i = 0; i < totalPredios.length; i++) {
			totalPredios.item(i).style.fill = '#545B62';
		};

		document.getElementById(local).style.fill = '#007bff';
		document.getElementById('localSelecionado').style.display = 'block';
		document.getElementById('localSelecionado').innerHTML = document.getElementById('_' + local).innerHTML;
	}
};

function mudaMapa(mapa, salas) {
	let totalMapas = document.getElementsByTagName('iframe');
	let totalSalas = document.getElementsByClassName('dropdown');

	for (i = 0; i < totalMapas.length; i++) {
		totalMapas.item(i).style.display = 'none';
		totalMapas.item(i).src = totalMapas.item(i).src;
	};
	for (i = 0; i < totalSalas.length; i++) {
		totalSalas.item(i).style.display = 'none';
	};

	document.getElementById(mapa).style.display = 'inline';
	document.getElementById(salas).style.display = 'inline';
	document.getElementById('localSelecionado').style.display = 'none';
};

function mudaListaSalas(andar) {
	let totalSalas = document.getElementsByClassName('list-group');

	for (i = 0; i < totalSalas.length; i++) {
		totalSalas.item(i).style.display = 'none';
	};

	document.getElementById('listaSalas').style.display = 'block';
	document.getElementById(andar).style.display = 'block';
};

function validaFormulario() { 
	var name = document.forms["formulario"]["nome"];			 
	var email = document.forms["formulario"]["email"]; 
	var assunto = document.forms["formulario"]["assunto"]; 
	var address = document.forms["formulario"]["mensagem"]; 

	if (email.value == "")								 
	{ 
		window.alert("Por favor, digite um e-mail válido!"); 
		email.focus(); 
		return false; 
	} 

	if (email.value.indexOf("@", 0) < 0)				 
	{ 
		window.alert("Por favor, digite um e-mail válido!"); 
		email.focus(); 
		return false; 
	} 

	if (email.value.indexOf(".", 0) < 0)				 
	{ 
		window.alert("Por favor, digite um e-mail válido!"); 
		email.focus(); 
		return false; 
	} 

	if (assunto.value == "Selecione um assunto")								 
	{ 
		window.alert("Por favor, selecione um Assunto!"); 
		assunto.focus(); 
		return false; 
	}

	if (mensagem.value == "")					 
	{ 
		window.alert("Por favor, digite uma mensagem!"); 
		mensagem.focus(); 
		return false; 
	} 

	return true; 
};
