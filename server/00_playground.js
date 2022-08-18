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