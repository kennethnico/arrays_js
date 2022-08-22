//Método para concatenar/fusionar arrays
const elements =[1,1,2,2];
const elements2 =[3,3,4,4];

const newArray= [...elements]; //Se duplica, en lugar de tener la referencia al arreglo
for (let i = 0; i < elements2.length; i++) {
    const element = elements2[i];
    newArray.push(element);
}
const newArray2 = elements.concat(elements2);
console.log(newArray);
console.log(newArray2);
