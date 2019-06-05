function selecionaLocal(local) {
	let totalPredios = document.getElementsByTagName('rect');
	for (i = 0; i < totalPredios.length; i++) {
		totalPredios.item(i).style.fill = '#545B62';
	};

	document.getElementById(local).style.fill = '#007bff';
}

function teste2(path) {
	if(path == 'estrela1') {
		window.location.pathname = 'mapafatecsp/html/edificio_santiago.html';
	}
}