//Es un método que nos aydua a unificar un Array
const elements = ['Fire','Air','Water'];
const separator ='--';
let stringFinal ='';
for (let i = 0; i < elements.length; i++) {
    let item = elements[i];
    stringFinal = stringFinal+item+separator;
}
console.log('Con FOR: ', stringFinal);
const sFinal2 = elements.join('--');
console.log('Con JOIN: ', sFinal2);
