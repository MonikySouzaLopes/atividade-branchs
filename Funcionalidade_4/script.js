let calcular = function(){
    
    let nota1 =  document.getElementById("Nota1").value
    nota1 = Number(nota1)
  
    let nota2 =  document.getElementById("Nota2").value
    nota2 = Number(nota2)

  
    let nota3 = document.getElementById("Nota3").value
    nota3 = Number(nota3)
    
    let nota4 = document.getElementById("Nota4").value
    nota4 = Number(nota4)
    
  
  let result = (nota1 + nota2 + nota3 + nota4) / 4
  console.log(result)  
  let resultado = Number(result)
  
  let situacao = ""
  
  if (resultado >= 7) {
    situacao="aprovado"
  }else{
    situacao="reprovado"
  }

    

    let saídaResultado = document.getElementById("Resultado")
    saídaResultado.innerHTML = resultado

    let saídaSituacao = document.getElementById("Situação")
    saídaSituacao.innerHTML = situacao
   }
  