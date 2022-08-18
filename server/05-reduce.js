//Método reduce, toma un array y lo reduce a un solo valor. No devuelve otro array, devuelve un
const totales = [1,2,3,4];
//Con For
let sum=0;
for (let i = 0; i < totales.length; i++) {
    const element= totales[i];
    sum = sum+ element;
}
console.log(sum);
//Con reduce
const rd = totales.reduce((ttl,item) => ttl + item,0);
console.log(rd);