//Lo opuesto a Some - Todos los elementos deben cumplir con la condición
const numbers = [1,30,49,29,10,13];
let rta = true;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if(element >= 40){
        rta = false;
    }
}
console.log("Con FOR: ", rta);
const rta2 = numbers.every(item => item<=40);
console.log("Con EVERY: ", rta2);
//Reto, todos sean menores de 15 años
const team = [
    {
        name: "Nicolas",
        age: 12,
    },
    {
        name: "Andrea",
        age: 8,
    },
    {
        name: "Zulema",
        age: 2,
    },
    {
        name: "Santiago",
        age: 18,
    },
];
const edad = team.every(item => item.age<=15);
console.log("¿Todos son menores de 15? ",edad);