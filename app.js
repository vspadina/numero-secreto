//APLICAÇÃO ESTÁ RODANDO COM LIVE SERVER PARA ATUALIZAR AUTOMATICAMENTE INDEX SEMPRE QUE SALVAR ALTERAÇÕES NO APP.JS
alert ('Seja bem-vindo ao jogo do número secreto!'); // Primeira linha codada para mostrar mensagem de alerta no app
console.log('Primeiro Alerta apresentado corretamente.'); //Mostrar no console que o alerta de boas vindas foi apresentado com sucesso
let numeroMaximo = 50;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); // Variável criada para armazenar o número secreto no app, Math.random serve para gerar um número aleatório entre 0 e 1, multiplicado por 100 para gerar um número entre 0 e 100, e somado 1 para que o número gerado seja entre 1 e 100, sem o + 1 o número gerado seria entre 0 e 99.
console.log('O numero definido para essa rodada é o número '+numeroSecreto); //Irá mostrar o número secreto no console ao inspecionar página da web
//let chute = prompt ('Escolha um número entre 1 e 30'); //Prompt serve para o usuário digitar um número no app, armazenando o valor na varíavel chute
let chute;
console.log('O prompt para escolha do número foi apresentado com sucesso, que no caso foi o número '+numeroSecreto); //Mostrar no console o número digitado pelo usuário
let tentativas = 1; //Variável criada para armazenar o número de tentativas do usuário

while(chute != numeroSecreto){ //while (enquanto), sendo usado para criar um loop que só será interrompido quando o usuário acertar o número secreto, sinal de != é para diferente
    chute=prompt('Escolha um número entre 1 e ' +numeroMaximo); //prompt para inserção do numero secreto foi movido para dentro do while para que o usuário possa tentar novamente caso erre o número
    //se o chute for igual ao número secreto
if (chute == numeroSecreto) {
    break; //break serve para interromper o loop while, ou seja, o usuário acertou o número secreto e o loop foi interrompido
} //Condicional IF usada parar comparar o número secreto com o número digitado pelo usuário. O que estiver dentro da chave só será executado caso a condicional IF seja verdadeira.
else { //esse else foi criado para dar dicas ao usuário conforme forem feitos chutes errados tentando adivinhar o número secreto
    if(chute > numeroSecreto){
        alert('O numero secreto é menor que ' + chute);
        console.log('O número ' +chute+ ' é maior do que o número ' +numeroSecreto+ ', que é o número secreto.');
    } else{
        alert('O número secreto é maior que ' +chute);
        console.log('O número ' +chute+ ', apresentado pelo usuário, foi menor do que o número '+numeroSecreto);
    }
    //tentativas = tentativas + 1; //Incremento para adicionar mais uma tentativa ao usuário, caso ele erre o número secreto
    tentativas++; //Incremento simplificado para adicionar mais uma tentativa ao usuário, caso ele erre o número secreto
}
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; //Operador ternário para verificar se o número de tentativas é maior que 1, se sim, a palavra tentativas será usada, se não, a palavra tentativa será usada
alert(`Boa! o número secreto era ${numeroSecreto}, você acertou com ${tentativas} ${palavraTentativa}!`); //Alerta para o usuário informando que ele acertou o número secreto e quantas tentativas foram necessárias
console.log('O usuário acertou o número secreto, que era o número '+numeroSecreto+' e precisou de '+tentativas+' tentativas para acertar.'); //Mostrar no console que o usuário acertou o número secreto e quantas tentativas foram necessárias
//if(tentativas > 1){
 //Uma alternativa para o uso de crase na interpolação ou concatenação é o uso de + para concatenar strings e variáveis (EX: 'O número secreto era ' + numeroSecreto)
//Crase para uso de template string, que permite a interpolação de variáveis dentro de strings (sinalizados por ${} e contendo o nome da variável dentro do cifrão e das chaves)
//alert jogado para fora do while por conta do break, para que o usuário saiba que acertou o número secreto e quantas tentativas foram necessárias
//} else{
//    alert('Acertou o número aí mano! De primeirassa, tá maluco!!!');
//}
//console.log('O usuário acertou o número secreto.');//console.log serve para mostrar a mensagem no console do navegador, PORÉM É UMA FERRAMENTA PARA DEV, o usuário padrão não veria a mensagem (Inspecionar --> Console. Será apresentada a mensagem no console somente se o número estiver certo)
