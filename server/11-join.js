//Es un método que nos aydua a unificar un Array
const elements = ['Fire','Air','Water','my','item','test'];
const separator ='--';
let stringFinal ='';
for (let i = 0; i < elements.length; i++) {
    let item = elements[i];
    if(i<elements.length-1) {
        stringFinal = stringFinal+item+separator;
    }else{
        stringFinal = stringFinal+item;
    }
}
console.log('Con FOR: ', stringFinal);
const sFinal2 = elements.join('--');
console.log('Con JOIN: ', sFinal2);

const title = 'Curso de manipuacion de arrays';
const mySite = 'https://www.mypersonalsiteweb.com/';
const myURL = mySite+title.split(' ').join('-').toLowerCase()+'.html';
console.log(myURL);
