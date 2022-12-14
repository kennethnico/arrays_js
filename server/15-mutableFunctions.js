//Mutable functions
const products = [
    { title: 'Pizza', price: 121, id: 'π' },
    { title: 'Burger', price: 121, id: 'π' },
    { title: 'Hot cakes', price: 121, id: 'π₯' },
];
const myProducts = [];
//const product = products.find(item => item.id === 'π');}
const prod_Index = products.findIndex(item => item.id === 'π');
if (prod_Index !== -1){
    myProducts.push(products[prod_Index]);
    products.splice(prod_Index, 1);
}
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const products2 = [
    { title: 'Pizza', price: 121, id: 'π' },
    { title: 'Burger', price: 121, id: 'π' },
    { title: 'Hot cakes', price: 121, id: 'π₯' },
];
const update ={
    id: 'π₯',
    changes : {
        price: 200,
        description: 'delicioso'
    },
}
const productIndex = products2.findIndex(item => item.id === update.id);
products2[productIndex] = {
    ...products2[productIndex],
    ...update.changes,
}
console.log(products2);

//Reto 1, como hacer para eliminar un elemento,sin modificar el array original.
//Reto 2, hacer una modificaciΓ³n, pero sin modificar el original