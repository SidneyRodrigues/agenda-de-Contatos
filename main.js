const form = document.getElementById("form-contato");
let linhasContatos = [];



form.addEventListener("submit", function(e) {
  e.preventDefault();

  adicionaLinhaContato();
});

function adicionaLinhaContato() {
  const inputNomeContato = document.getElementById("nome-contato");
  const inputNumeroContato = document.getElementById("telefone-contato");
  let valor = inputNumeroContato.value.replace(/\D/g,"");
  let formato = "";

  if (valor.length === 11) {
    formato = `(${valor.substring(0, 2)}) ${valor.substring(2,7)} - ${valor.substring(7)}`;
    inputNumeroContato.value = formato;

    let linhaContato = "<tr>";
    linhaContato += `<td>${inputNomeContato.value}</td>`;
    linhaContato += `<td>${inputNumeroContato.value}</td>`;
    linhaContato = "</tr>";

    linhasContatos += linhaContato;

    const tabelaContato = document.getElementById("tbody-contato");
    tabelaContato.innerHTML = linhasContatos;

    inputNomeContato.value = "";
    inputNumeroContato.value = "";
  } else if (valor.length === 10) {
    formato = `(${valor.substring(0, 2)}) ${valor.substring(2,6)} - ${valor.substring(6)}`;
    inputNumeroContato.value = formato;

    let linhaContato = "<tr>";
    linhaContato += `<td>${inputNomeContato.value}</td>`;
    linhaContato += `<td>${inputNumeroContato.value}</td>`;
    linhaContato = "</tr>";

    linhasContatos += linhaContato;

    const tabelaContato = document.getElementById("tbody-contato");
    tabelaContato.innerHTML = linhasContatos;

    inputNomeContato.value = "";
    inputNumeroContato.value = "";
  } else {
    alert("Número de telefone inválido");
  }
}

