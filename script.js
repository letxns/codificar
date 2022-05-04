/*
O que falta? 
-funcao cesar que receberá uma variavel recebendo o valor inserido pelo usuário. Além disso, utilizaremos o split('').
variavel checando a opção marcada. variavel recebendo os passos (utilizar um parseInt recebendo o valor do campo de entrada).
caso marcado codificar, entao o valor do campo resultado receberá a função codificando. se não, receberá a função decodificando.
-função cesarCod, recebendo dois parametros(estudar melhor sobre eles)

*/

var criptografia = document.querySelector('#tipoCodigo');
var btn = document.querySelector('#btnSubmit');
var codificar = document.querySelector('#codificar');
var decodificar = document.querySelector('#decodificar');
var input = document.querySelector('#textoEntrada');
var output = document.querySelector('#textoSaida');
//var radioButtons = document.getElementById('radioButtons');

tipoCodigo.addEventListener('change', function(event){
    var tipoSelecionado = event.target.value;

    if(tipoSelecionado == "cifraCesar"){
        passos.style.display = "block";
        btnSubmit.setAttribute('click', cifraCesar());
    }else if(tipoSelecionado == "base64"){
        passos.style.display = "none";
        btnSubmit.setAttribute('click', base64());
    } else{
        passos.style.display = "none";
    }
});

codificar.addEventListener('click', function(){
    btnSubmit.innerText = "CODIFICAR";
});

decodificar.addEventListener('click', function(){
    btnSubmit.innerText = "DECODIFICAR";
});

btn.addEventListener('click', function(e){
    e.preventDefault() 
});

function base64(){
    if(codificar.checked){
        return output.value = btoa(input.value);
    } else if(decodificar.checked){
        return output.value = atob(input.value);
    }
}

function cifraCesar(){
    if(codificar.checked){
        //return output.value = btoa(input.value);
    } else if(decodificar.checked){
        //return output.value = atob(input.value);
    }
}

function enviar(){
    if(criptografia.value == "base64"){
        base64() 
    }else if(criptografia.value == "cifraCesar"){
        cifraCesar()
    }

}
