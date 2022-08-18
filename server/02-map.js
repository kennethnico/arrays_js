const letters = ['a','b','c'];
//Con for
const newArray =[];
for (let i = 0; i < letters.length; i++) {
    const element = letters[i];
    newArray.push(element + '++');
}
console.log('Original:',letters);
console.log('Nuevo:',newArray);
//Con map
const newArray2 = letters.map(item => {return `${item}++`;});
console.log('Original:',letters);
console.log('Nuevo-map:',newArray2);