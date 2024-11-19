let calcular = function(){
    let numero1 =  document.getElementById("Numero1").value
    numero1 = Number(numero1)
     
    let numero2 =  document.getElementById("Numero2").value
    numero2 = Number(numero2)
    
 
    let result = (numero1 + numero2)
    console.log(result)  
    let resultado = Number(result)
    
      
      let saídaResultado = document.getElementById("Resultado")
      saídaResultado.innerHTML = resultado
     }