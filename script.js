var selecionarMetodo = document.querySelector('#tipoCodigo');
var btn = document.querySelector('#btnSubmit');
//var radioButtons = document.getElementById('radioButtons');

tipoCodigo.addEventListener('change', function(event){
    var tipoSelecionado = event.target.value;
    if(tipoSelecionado == "cifraCesar"){
        passos.style.display = "block";
    }else if(tipoSelecionado != "cifraCesar"){
        passos.style.display = "none";
    }
});

codificar.addEventListener('click', function(){
    btnSubmit.innerText = "Codificar";
});

decodificar.addEventListener('click', function(){
    btnSubmit.innerText = "Decodificar";
});

//Projeto em que mensagens poderão ser codificadas e decodificadas através de duas formas: utilizando a cifra de César e a Base 64.