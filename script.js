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