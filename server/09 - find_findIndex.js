//Solo retorna un objeto que cumpla el condicional, a diferencia de filter que regresa un Array. Find regresa el objeto.
const elements =[1,30,49,29,10,13];
let rta = undefined;
for (let i = 0; i <elements.length; i++) {
    const element = elements[i];
    if(element === 30){
        rta = element;
        break;
    }
}
console.log("Con FOR: ",rta);
const rta2 = elements.find(item => item === 30);
console.log("Con FIND: ",rta2);
//Encontrando productos por ID
const products = [
    {
        name: "Pizza",
        price: 12,
        id: '๐'
    },
    {
        name: "Burger",
        price: 23,
        id: '๐'
    },
    {
        name: "Hot dog",
        price: 34,
        id: '๐ญ'
    },
    {
        name: "Hot cakes",
        price: 355,
        id: '๐ฅ'
    },
];
const rta3 = products.find(i => i.id=== '๐ฅ');
console.log("Producto encontrado: ", rta3);
const rta4 = products.findIndex(i => i.id=== '๐ฅ');
console.log("Producto encontrado y su posiciรณn es: ", rta4);