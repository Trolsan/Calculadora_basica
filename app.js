const suma = document.getElementById('suma')
const resta = document.getElementById('resta')
const multi = document.getElementById('multi')
const division = document.getElementById('division')
const modulo = document.getElementById('modulo')
const valor1 = document.getElementById('valor1')
const valor2 = document.getElementById('valor2')
const resultado = document.getElementById('resultado')
const operacion = document.getElementById('operacion')

operacion.addEventListener('keyup', operacionn)

function operacionn (event){

  let codigo = event.which || event.keyCode
  
  console.log("tecla " + codigo);
  if(codigo === 83){
    resultado.textContent = Number(valor1.value) + Number(valor2.value)
  }else if (codigo === 82){
    resultado.textContent = valor1.value - valor2.value
  }else if (codigo === 77){
    resultado.textContent = valor1.value * valor2.value
  }else if (codigo === 68){
    resultado.textContent = (valor1.value / valor2.value).toFixed(2)
  }else if (codigo === 79){
    resultado.textContent = valor1.value % valor2.value
  }else if (codigo === 8){
    resultado.textContent = "Resultado"
  }
}






