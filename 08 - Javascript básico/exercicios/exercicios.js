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


    let vetor_ordenado = [];
    let menor = vetor[0];
    let tam_vet = vetor.length;
    for (let i = 0; i < tam_vet; i++) {

        let menor = vetor[0];
        for (let j = 0; j < vetor.length; j++) {
            if (vetor[j] < menor) {
                menor = vetor[j];
            }
        }



        vetor_ordenado.push(menor);
        vetor.splice(vetor.indexOf(menor), 1);

    }

    return vetor_ordenado;
}

let v = [1, 3, 5, 8, 2, 14,];

console.log(ordem(v));
////////////////////////////////////////////////


//3   ////////////////////////////////////////

function maior_valor(vet) {

    let menor = vet[0];
    for (let i = 0; i < vet.length; i++) {
        if (vet[i] < menor)
            menor = vet[i];
    }
    return menor;
}

var vet = [1, -9, 90, -12]
console.log(maior_valor(vet))
/////////////////////////////////////////////

//4       //////////////////////////////////

function media_5(vet) {

    let soma = 0;
    for (let i = 0; i < 5; i++) {
        soma += vet[i];
    }
    return soma / 5;
}
let array = [1, 2, 3, 4, 5]
console.log(media_5(array))
//////////////////////////////////////////////

//5         /////////////////////////////////

function impar_par(num) {
    if (num % 2 == 0)
        return "par"
    else
        return "impar"
}

console.log(impar_par(12))
////////////////////////////////////////////

//6      ///////////////////////////////////

for (let i = 1; i <= 100; i++) {

    if (i % 4 == 0)
        console.log("pi")
    else
        console.log(i)
}
///////////////////////////////////////////


console.clear();
//7     //////////////////////////////////

function propriedades(obj) {

    console.log(obj);
}

let obj = {
    nome: "",
    idade: "",
    telefone: ""
}
propriedades(obj)
//////////////////////////////////////////


//8        ///////////////////////////////

function datas(data) {
    data = new Date()
    let dia = data.getDate();

    let mes = data.getMonth()
    let ano = data.getFullYear()
    return [dia, mes, ano];
}

console.log(datas())
/////////////////////////////////////////
console.clear();

//9       ////////////////////////////////

function dados_alunos(alt, idd) {
    this.altura = alt,
        this.idade = idd;
}
alunos = [];
alunos.push(new dados_alunos(1.70, 20));
alunos.push(new dados_alunos(1.90, 20));
alunos.push(new dados_alunos(1.67, 20));
alunos.push(new dados_alunos(1.50, 10))

function analise_alunos(alunos) {

    let maior_alt = alunos[0].altura;
    let menor_alt = alunos[0].altura;
    let soma_idade = 0;
    alunos.forEach(element => {
        soma_idade += element.idade
        if (element.altura < menor_alt)
            menor_alt = element.altura;
        if (element.altura > maior_alt)
            maior_alt = element.altura

    });

    console.log("Maior idade: " + maior_alt,
        "\nMenor idade: " + menor_alt, "\nMédia das idades: " + soma_idade / alunos.length)
}
analise_alunos(alunos)
////////////////////////////////////////////
console.clear();

//10      /////////////////////////////////////////

function padrao(num){

    for(let i=0;i<num;i++){
        for(let j=0;j<i;j++){
            console.log("*")
        }

    }
}

padrao(5);
//////////////////////////////

// OUTRA MANEIRA MAIS INTELIGENTE DE FAZER ISSO:
console.clear()
function padrao1(num){

   

    for(let j=0;j<num;j++){

        let string="";
    for(let i=0; i<j+1; i++){
        string +="*"
    }
console.log(string);
}
}
padrao1(5)