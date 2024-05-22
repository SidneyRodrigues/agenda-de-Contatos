const form = document.getElementById('form-contato');
const contatos = [];
const num = [];

let linhas = '';

form.addEventListener('submit', function(e){
  e.preventDefault();

  adicionaLinha();
  atualizaTabela();
});

function adicionaLinha() {
  
  const inputNomeContato = document.getElementById('nome-contato');
  const inputNumeroContato = document.getElementById('telefone-contato');

  if(contatos.includes(inputNomeContato.value)) {
    alert(`O contato: ${inputNomeContato.value} já foi adicionado`);
  } else {
    contatos.push(inputNomeContato.value);
    num.push(inputNumeroContato.value);

    let linha = '<tr>';
      linha += `<td>${inputNomeContato.value}</td>`;
      linha += `<td>${inputNumeroContato.value}</td>`;
      linha += `</tr>`;

    linhas += linha;
  }

  inputNomeContato.value = '';
  inputNumeroContato.value = '';
}

function atualizaTabela() {
  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML = linhas;
}
