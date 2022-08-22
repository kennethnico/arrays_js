//1. Multiplica todos los elementos por 2
function solution(array){
    const respuesta = array.map(element => {
            return element*2;
        })
    console.log(respuesta);
}
const arr = [2,4,5,6]
solution(arr);
//2. Transforma un array de objetos a un array de Strings
const obj = [
    {
        name: 'Edwin',
        lastName: 'Nicolas',
        age: 28,
    },
    {
        name: 'Kenet',
        lastName: 'Ruiz',
        age: 28,
    }
    ];

function solution2(obj){
    let r = [];
    obj.forEach(arr => {
        r.push(arr.name);
    });
    console.log(r);
}
solution2(obj);
//3. Calcula y agrega una nueva propiedad en un array
const miArray = [
    {
        name: 'Producto1',
        price: 1000,
        stock: 10
    },
    {
        name: 'Producto2',
        price: 2000,
        stock: 20
    },
    {
        name: 'Producto3',
        price: 3000,
        stock: 30
    },
];
function solution3(array){
    array.forEach(item =>{
       item.taxes = item.price * .19;
    });
    return array;
}
function solution3_1(array){
    return array.map(item =>({
        ...item,
        taxes: Math.trunc(item.price*.19)
    }));
}
console.log(solution3(miArray));
console.log(solution3_1(miArray));
//4 Retorna solo las palabras de 4 letras
const words = ['amor', 'sol','piedra','día'];
const func = words.filter(item => item.length >= 4);
console.log(func);
//5 Filtra las compras que cumplan con las condiciones.
solution([
    {
        customerName: "Nicolas",
        total: 100,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
]);
//6 Busca dentro de un string y descubre si ¿Tiene la clave?
//7 Crea un buscador que retorne palabras de acuerdo parámetro de búsqueda
//8 Calcula la suma total de los elementos
const num1 = [1,1,1];
const num2 = [2,4,8];
const sumT = num1.reduce((n,i)=> n+i,0);
const sumT2 = num2.reduce((n,i)=> n+i,0);
console.log("Total del array 1: ",sumT);
console.log("Total del array 2: ",sumT2);
//9 Calcular la suma de todas las compras entre objetos
//10 Retornar si al menos alguno de los números es par
const isPar = [1,3,5,7,10,11];
const isPar2 = [1,3,5];
const rta = isPar.some(item => item%2===0);
const rta2 = isPar2.some(item => item%2===0);
console.log("Rta1: ",rta);
console.log("Rta2: ",rta2);
//11 Retorna un booleano si todos los elementos son pares
function solution7(numbers){
    return numbers.every(item => item%2 === 0);
}
slt0 =[2,4,6,8,10];
slt1 =[1,3,5,7,10,11];
slt2 =[1,3,5];
console.log("¿Todos los números son pares?", solution7(slt1));
//12 Resuelve si dentro de una lista de cartas tienes el AS
//13 Retorna la posición de una llave dentro de una lista
//14 Transforma un string y sepáralo por comas, como en un CSV
//15 Construye una URL con base a un string