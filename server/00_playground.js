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

//5 Calcula la suma total de los elementos
const num1 = [1,1,1];
const num2 = [2,4,8];
const sumT = num1.reduce((n,i)=> n+i,0);
const sumT2 = num2.reduce((n,i)=> n+i,0);
console.log("Total del array 1: ",sumT);
console.log("Total del array 2: ",sumT2);

//6 Retornar si al menos alguno de los números es par
const isPar = [1,3,5,7,10,11];
const isPar2 = [1,3,5];
const rta = isPar.some(item => item%2===0);
const rta2 = isPar2.some(item => item%2===0);
console.log("Rta1: ",rta);
console.log("Rta2: ",rta2);

//7 Retorna un booleano si todos los elementos son pares
function solution7(numbers){
    return numbers.every(item => item%2 === 0);
}
slt0 =[2,4,6,8,10];
slt1 =[1,3,5,7,10,11];
slt2 =[1,3,5];
console.log("¿Todos los números son pares?", solution7(slt1));