//Método para concatenar/fusionar arrays //Concat es inmutable: Genera un array nuevo
const elements =[1,1,2,2];
const elements2 =[3,3,4,4];

const newArray= [...elements]; //Se duplica, en lugar de tener la referencia al arreglo
for (let i = 0; i < elements2.length; i++) {
    const element = elements2[i];
    newArray.push(element);
}
const newArray2 = elements.concat(elements2);
const newArray3 = [...elements2,...'randoms'];
console.log(newArray);
console.log(newArray2);
console.log(newArray3);