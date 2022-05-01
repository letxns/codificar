var selecionarCriptografia = document.querySelector('#tipoCodigo');
var btn = document.querySelector('#btnSubmit');
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
    decodificar();
});

function cifraCesar(){
    alert("OI CESAR");
}

function base64(){
    alert("OI BASE64");
}