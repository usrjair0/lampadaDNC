var lamp = window.document.getElementById('lampada')

function estaQuebrada(){
    return lamp.src.indexOf('quebrada') > -1 
    //Essa função é acionada se o valor for maior que -1 
    //retorna -1 se não encontrar "quebrada" na lamp.src
    //logo quando assumo que return lamp.src.indeOf('quebrada')>-1 é maior
    //que -1 assumo que ele encontrou a palavra 
    //quebrada no source da imagem, o que significa que esta quebrada
    //Se for maior temos sim, se for menor ou igual temos não  
}
function ligar(){
    if(!estaQuebrada()){ //se estaQuebrada for uma negativa ou seja a lampada não esta
        //quebrada, logo o botão ligar funciona 
        lamp.src = './assets/ligada.svg' //estou alterando o source para mostrar a 
        //imagem da lâmpada ligada
    }
}
function desligar(){
    if(!estaQuebrada()){
        lamp.src = './assets/desligada.svg'
    }  
}
lamp.addEventListener ('click', quebrar) /* É uma forma de criar o evento 
on click que teria que adicionar na imagem para chamar a funcao quebrar
se eu quiser basta chamar essa funcao na img da lampada fazendo 
onclick="quebrar()" dessa forma que fiz não preciso criar essa funcao*/
function quebrar(){
    lamp.src = './assets/quebrada.svg'
}
