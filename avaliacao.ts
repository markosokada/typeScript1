//1)
interface Pessoa{
    nome:string;
    idade:number;
    endereco:string;
}
//2)

function saudacao(nome:string){
    return ("Ola! "+ nome)
}
console.log(saudacao("marcos"));
//3)
function multiplicar (n1:number,n2:number){
    return(n1*n2)
}

console.log(multiplicar(5,2));
//4)
const numeros:number []=[1,2,3,4,5,];
const numeros2 = numeros.map(x =>x*2);

console.log(numeros2)
//5)
let i:number=0;

const pessoa=[{nome:"joao",idade:25,endereco:"rua das flores,123"},
            {nome:"maria",idade:30,ndereco:"Avenida dosol,456"},
            {nome:"Pedro",idade:35, endereco:"Travessa dalua,789"}]

for( i=0;i<pessoa.length;i++){
    console.log(pessoa[i])
}