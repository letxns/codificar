/*
O que falta? 
- implementar a função base64, que receberá uma variavel recebendo o valor inserido pelo usuário. 
checar a opção marcada: code or decode? o valor do texto de saída vai receber a função com a lógica
- implementar a função com a lógica, recebendo dois parâmetros: uma entrada e um numero. checar a opção marcada: code or decode?
a função irá retornar, caso a opção esteja marcada: btoa(input) e, caso não: atob(input)
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

btn.addEventListener('click', function enviar(e){
    e.preventDefault
});

//é esse codigo q ta codificando ao selecionar o tipo de criptografia
function base64(){
    if(codificar.checked){
        return output.value = btoa(input.value);
    } else if(decodificar.checked){
        return output.value = atob(input.value);
    }
}

//responsavel por codificar/decodificar


function enviar(e){
    if(criptografia.value == "base64"){
        base64()
        btn.addEventListener('click', function base64(){
            e.preventDefault() 
        });
        return base64()   
    }else if(criptografia.value == "base64"){
        base64()
        e.preventDefault()
    }else if(criptografia.value == "cifraCesar"){
        cifraCesar()
    }else if(criptografia.value == "cifraCesar"){
        cifraCesar()
    }

}

