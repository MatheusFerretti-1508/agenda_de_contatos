const form = document.getElementById('agenda');
const botao = document.getElementById('botao-confirma')
const nome = [];
const numero = [];
let linhas = ' '

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaNome();
    atualizaTabela();

});

function adicionaNome (){
    const inputNome = document.getElementById('nome');
    const inputNumero = document.getElementById('numero');

    nome.push(inputNome.value);
    numero.push(parseFloat(inputNumero.value));

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`;
    linha += `</tr>`;

    linhas += linha;
}


function atualizaTabela(){
    const CorpoTab = document.querySelector(('tbody'));
    CorpoTab.innerHTML = linhas
}




