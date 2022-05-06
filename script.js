var criptografia = document.querySelector('#tipoCodigo');
var btn = document.querySelector('#btnSubmit');
var codificar = document.querySelector('#codificar');
var decodificar = document.querySelector('#decodificar');
var input = document.querySelector('#textoEntrada');
var output = document.querySelector('#textoSaida');
var passos = document.querySelector('#passos');

tipoCodigo.addEventListener('change', function(event){
    var tipoSelecionado = event.target.value;
    if(tipoSelecionado == "cifraCesar"){
        passos.style.display = "flex";
    }else if(tipoSelecionado == "base64"){
        passos.style.display = "none";
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
    if(codificar.checked && tipoCodigo.value == "base64"){
        return output.value = btoa(input.value);
    } else if(decodificar.checked && tipoCodigo.value == "base64"){
        return output.value = atob(input.value);
    }
}

function cifraCesar(){
    var input = input.value.split('');
    var incremento =  parseInt(passos.value);
    if (codificar.checked){
        output.value = cesarCodifica(input, incremento);
    } else if (decodificar.checked){
        output.value = cesarDecodifica(input, incremento);
    }
}

function cesarCodifica(input, incremento){
    return input.map((texto)=>{
        var codifique = texto.charCodeAt()
        if(codifique >= 65 && codifique <= 90){
            return String.fromCharCode(((codifique - 65 + incremento) % 26) + 65);
        }else if(codifique >= 97 && codifique <= 122){
            return String.fromCharCode(((codifique - 97 + incremento) % 26) + 97);
        }else {
            return texto
        }
    }).join('')
}

function cesarDecodifica(input, incremento){
    return input.map((texto)=>{
        var codifique = texto.charCodeAt()
        if(codifique >= 65 && codifique <= 90){
            return String.fromCharCode(((codifique - 90 - incremento) % 26) + 90);
        }else if(codifique >= 97 && codifique <= 122){
            return String.fromCharCode(((codifique - 122 - incremento) % 26) + 122);
        }else {
            return texto
        }
    }).join('')
}

function enviar(){
    if(criptografia.value == "base64"){
        return base64() 
    }else if(criptografia.value == "cifraCesar"){
        return cifraCesar()
    }
}