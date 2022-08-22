//No indica si el elemento está o no dentro del Array
const pets =['cat','dog','bat'];
let flag = false;
for (let i = 0; i < pets.length; i++) {
    const element = pets[i];
    if(element==='cat'){
        flag = true;
    }
}
console.log("¿Hay un perro? (con FOR)", flag);
const inc = pets.includes('dog');
console.log("¿Hay un perro? (con INCLUDES)", inc);
