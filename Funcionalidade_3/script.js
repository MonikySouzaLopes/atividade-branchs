let calcular = function(){
    const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const numImpares = vetor.filter(num => num % 2 !== 0);


    let saídaResultado = document.getElementById("Resultado")
    saídaResultado.innerHTML = numImpares

}