function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if(de >= ate){
        alert('O valor "Do número" deve ser menor que o valor "Até o número".');
        return;
    }
    if (quantidade > (ate - de + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
      }

    let sorteados = [];
    let numeroSorteado;
    
    // sorteia a quantidade de números que o usuário escolheu
    for (let i = 0; i < quantidade; i++){
        numeroSorteado = obterNumeroAleatorio(de, ate);
         
        // Verifica se o número já foi sorteado
        while (sorteados.includes(numeroSorteado)) {
            numeroSorteado = obterNumeroAleatorio(de, ate);

        }

         // Adiciona o número sorteado ao array
        sorteados.push(numeroSorteado);
       }

       let resultado = document.getElementById('resultado');
       resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
       alterarStatusBotao();
}

// Função para obter um número aleatório entre dois valores
function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

 // Função para alterar o status do botão
function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();

}