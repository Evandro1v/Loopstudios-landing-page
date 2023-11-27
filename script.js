document.getElementById('idhamburger').addEventListener('click', function () {
  exibirMenu();
});

document.getElementById('idclose').addEventListener('click', function () {
  fecharMenu();
});
var pagina = document.getElementById('idpagina');

function exibirMenu() {
  // Obtém a referência do menu que será exibido
  var Exibirmenumobile = document.getElementById('idmenumobile');

  // Altera o estilo para exibir o menu
  Exibirmenumobile.style.display = 'flex';
  pagina.style.display = 'none';

}

function fecharMenu() {
  // Obtém a referência da div que sera fechada
  var Exibirmenumobile = document.getElementById('idmenumobile');

  // Altera o estilo para exibir a pagina e fechar o menu
  Exibirmenumobile.style.display = 'none';
  pagina.style.display = 'flex';

}