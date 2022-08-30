//Sort funciona para hacer ordenamiento dentro de los arrays
const months = ["March", "Jan", "Feb", "Dec"];
const numbers = [1, 30, 4, 21, 100000];
const words = ["réservé", "premier", "communiqué", "café", "adieu", "éclair", "banana",];
const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

console.log('Ordenando Array moths',months.sort());
//Output: Ordenando Array moths [ 'Dec', 'Feb', 'Jan', 'March' ]
console.log('Ordenando Array numbers',numbers.sort());
//Output: Ordenando Array numbers [ 1, 100000, 21, 30, 4 ]
console.log('Ordenando Array numbers menor a mayor ',numbers.sort((a,b)=> a - b));
//Menor a mayor
//Output: Ordenando Array numbers -  [ 1, 4, 21, 30, 100000 ]
console.log('Ordenando Array numbers mayor a menor ',numbers.sort((a,b)=> b - a));
//Mayor a menor
//Output: Ordenando Array numbers -  [ 1, 4, 21, 30, 100000 ]
console.log('Ordenando Array words',words.sort());
//Ordenando Array words ['adieu', 'banana','café', 'communiqué', 'premier', 'réservé','éclair']
console.log('Ordenando Array orders',orders.sort((a,b)=> a.total - b.total));
//Ordenando Array orders [
//   { customerName: 'Zulema', total: 120, delivered: false },
//   { customerName: 'Valentina', total: 240, delivered: true },
//   { customerName: 'Nicolas', total: 600, delivered: true },
//   { customerName: 'Santiago', total: 1840, delivered: true }
// ]