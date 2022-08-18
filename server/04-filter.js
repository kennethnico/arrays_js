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