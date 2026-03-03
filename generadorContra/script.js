//el range sobre el cual se calcula la longitud de la contrasena
const range = document.getElementById('rngLongitud');
//span donde se muestra el valor del range
const spanValor = document.getElementById('longitud'), 
checkMayus = document.getElementById('chbMayus'),
checkMinus = document.getElementById('chbMinus'),
checkNumber = document.getElementById('chbNumbers'),
checkSymbol = document.getElementById('chbSymbol'),
formulario = document.getElementById('form-password');
let mayus = false, minus = false, numero = false, simbolo = false,
contador = 0, arrayPosibles = [];

document.addEventListener("DOMContentLoaded", function(){
    range.value = 8;
});
range.addEventListener('input', (event)=>{
    spanValor.textContent = range.value;
    
});

checkMayus.addEventListener('change', (event) =>{
    if(checkMayus.checked){
        mayus = true;
        console.log("Mayúscula");
    }else{
        mayus = false;
        console.log("Desmarcado");
    }
    
});

checkMinus.addEventListener('change', (event) =>{
    if(checkMinus.checked){
        minus = true;
        console.log("minus");
    }else{
        minus = false;
        console.log("Desmarcado");
    }
    
});

checkNumber.addEventListener('change', (event) =>{
    if(checkNumber.checked){
        numero = true;
        console.log("number");
    }else{
        numero = false;
        console.log("Desmarcado");
    }
    
});

checkSymbol.addEventListener('change', (event) =>{
    if(checkSymbol.checked){
        simbolo = true;
        console.log("symbol");
    }else{
        simbolo = false;
        console.log("Desmarcado");
    }
    
});

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    contador = range.value;
    if(mayus){
        arrayPosibles
        console.log("jai");
    }

    while(contador != 0){

        contador--;
    }
    
});