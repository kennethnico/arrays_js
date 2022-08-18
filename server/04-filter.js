//Filter es inmutable - no cambia el array original, crea uno nuevo
const words =['spray','limit','elite','exuberant'];
//Con for
const  newArray = [];
for (let i = 0; i < words.length ; i++) {
    const element = words[i];
    if (element.length>=6){
        newArray.push(element);
    }
}
console.log('Original con For',words);
console.log('Palabras con For',newArray);
//Con filter
const newArray2 = words.filter(item => item.length>=6);
console.log('Original con Filter',words);
console.log('Palabras con Filter',newArray2);

const orders =[
    {
        customerName: 'Edwin',
        total: 60,
        delivered: true,
    },
    {
        customerName: 'Kenet',
        total: 100,
        delivered: true,
    },
    {
        customerName: 'Nicolás',
        total: 160,
        delivered: false,
    },
];
const deliveredDone = orders.filter(item => item.delivered && item.total >= 100);
console.log('Ordenes - ', orders);
console.log('Orders filters', deliveredDone);