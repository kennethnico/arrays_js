//Mutable functions
const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];
const myProducts = [];
//const product = products.find(item => item.id === '🍔');}
const prod_Index = products.findIndex(item => item.id === '🍔');
if (prod_Index !== -1){
    myProducts.push(products[prod_Index]);
    products.splice(prod_Index, 1);
}
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const products2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];
const update ={
    id: '🥞',
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
//Reto 2, hacer una modificación, pero sin modificar el original