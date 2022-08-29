//Flat y FlatMap
const matriz =[
  [1,2,3],
  [4,5,[6,7,8],9],
  [10,11,12]
];
const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const element = matriz[i];
    for (let j = 0; j < element.length; j++) {
        const element2 = element[j];
        newArray.push(element2);
    }
}
const newArray2 = matriz.flat();
console.log('for',newArray);
console.log('flat',newArray2);