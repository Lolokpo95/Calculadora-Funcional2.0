const botonNumeros = document.getElementsByName('data-number')
const botonOpera = document.getElementsByName('data-opera')
const botonIgual = document.getElementsByName('data-igual')[0];
const botonDelet = document.getElementsByName('data-delet')[0];
let result = document.getElementById('result')
let valorActual = '';
let opeaAnterior = '';
let operacion = undefined;

botonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText)

    })
});

botonOpera.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperacion(boton.innerText);
        
    })
});

botonIgual.addEventListener('click', function(){
    calcular()
    actualizarDisplay()
});

botonDelet.addEventListener('click', function(){
    clear()
    actualizarDisplay()
});

function selectOperacion(op) {
    if(valorActual === '') return;
    if(opeaAnterior !== ''){
        calcular()
    }
    operacion = op.toString();
    opeaAnterior = valorActual;
    valorActual = '' ;
}
function calcular(){
    let calculo;
    const anterior = parseFloat (opeaAnterior)
    const actual = parseFloat (valorActual);
    if (isNaN(anterior) || isNaN(actual))return; 
 
   switch(operacion) {
       case '+':
                 calculo = anterior + actual;
                 break;

        case '-':
                calculo = anterior - actual ;
                 break;

        case 'x':
                calculo = anterior * actual;
                break;
                
        case '/':
                calculo = anterior / actual;
                break;

                case '%':
                calculo = anterior % actual;
                break;
                    default:
                        return;
    
                    }
                    valorActual = calculo;
                    operacion = undefined;
                    opeaAnterior= '';
                    
}


function agregarNumero(num){
    valorActual = valorActual.toString() + num.toString();
    
    actualizarDisplay();
    
 }

 function clear() {
     valorActual = '';
    valorActual = '';
    operacion = undefined;
 }
    
function actualizarDisplay () {
            result.value = valorActual;
            
        }

        clear();
