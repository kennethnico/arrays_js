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
const prices = orders.map(item => item.total);
console.log('Original:',orders);
console.log('Precios',prices);
//Este método apunta al array en memoria, no duplica la información - es decir, modifica el array original
//const taxes = orders.map(item =>{
//    item.tax = .19;
//    return item;
//});
//console.log('Original:',orders);
//console.log('Taxes',taxes);
//Cómo evitamos eso y copiamos el array (?)
const taxes2 = orders.map(item=>{
    return{
        ...item, //Así copiamos al array completamente
        tax : .19
    }
});
console.log('Original:',orders);
console.log('Taxes',taxes2);