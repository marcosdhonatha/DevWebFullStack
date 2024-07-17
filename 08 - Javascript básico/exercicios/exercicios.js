//1      /////////////////////////////////

function maior(num1, num2) {
    if (num1 > num2)
        return num1;
    else
        return num2;


}

console.log(maior(22, 12));
//////////////////////////////////////////////////


//2      /////////////////////////////////////


function ordem(vetor) {
    let menor = vetor[0]



    for (let i = 0; vetor.lenght(); i++) {
        if (vetor[i] < menor) {
            menor = vetor[i];
            vetor[i] = menor


        }
    }

    return 0;
}