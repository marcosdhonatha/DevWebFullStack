


//############## Aula: Objetos - Propriedades  #############

var aluno = {
    nome: "Marcos",
    Nota: [10, 9, 8]
};

var nomePropriedade = "Idade";

aluno[nomePropriedade] = 21;
aluno.matricula = 202121;
aluno.sobrenome = "Dhonatha";
console.log(aluno);


var estudante = new Object();
estudante.nome = "Marcos";
estudante.sobrenome = "Dhonatha";

console.log(estudante);
console.clear();
//#########################################//


//##### Aula: Objetos - Métodos ##########

function calmedia() {

    return (this.Notas[0] + this.Notas[1]) / 2;

}
var aluno = {
    Nome: "Marcos",
    Notas: [10, 9,],
    media: calmedia
}

var aluno1 = {
    Nome: "João",
    Notas: [10, 10,],
    media: calmedia
}



console.log(aluno.media(aluno.Notas[0], aluno.Notas[1]))
console.log(aluno1.media(aluno1.Notas[0], aluno1.Notas[1]))
console.clear();
//#########################################//

//##### Aula: Objetos - Construtores ##########

var calcmedia = function () {
    return (this.nota1 + this.nota2) / 2
}


var turma = [
    {
        nome: "Marcos",
        nota1: 20,
        nota2: 28,
        media: calcmedia
    },
    {
        nome: "João",
        nota1: 30,
        nota2: 18,
        media: calcmedia
    }

];

var aluno = turma[0];

console.log(aluno);
console.log(aluno.media());
console.clear();


function criarAluno(nome, n1, n2) {

    return (
        {
            nome: nome,
            nota1: n1,
            nota2: n2,
            media: function () {
                return (this.nota1 + this.nota2) / 2
            }
        }
    )
}

var aluno = criarAluno("Marcoss", 10, 9);
console.log(aluno);
console.clear()


var turma = [
    criarAluno("marcos", 21, 22),
    criarAluno("maria", 22, 98),
    criarAluno("Mario", 1, 4),
    criarAluno("Marcelo", 22, 53),
    criarAluno("Pedro", 34, 21),
    criarAluno("Ana", 21, 24),
]

turma.forEach(function (elemento) {

    console.log(elemento);
})
console.clear()


//Função como objeto
function aluno_1(nome, n1, n2) {
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;
    this.media = function () {
        return (this.nota1 + this.nota2) / 2
    }
}

var a = new aluno_1("Samuel", 18, 22);
var b = new aluno_1("Igor", 32, 48);
console.log(a)
console.log(b)
console.clear()

//#########################################//


//######## DATAS #############


var d = new Date();
console.log(d);

var da= new Date(2024, 6,23)
console.log(da)

console.log(d.getDate())
console.log(d.getMonth())
console.log(d.getFullYear())
console.log(d.getDay())

var dias =["dom", "seg", "ter", "qua", "quin", "sex", "sab"]
console.log(dias[d.getDay()])

console.clear();
//####################################################//


//######## AULA: Const, Let e Var#################


var numero= 2;
let numero2=5;
const numero3=6;
console.log(numero, numero2, numero3)

