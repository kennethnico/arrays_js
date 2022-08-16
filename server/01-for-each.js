const letters = ['a','b','c'];
//Forma antigua
for (let i = 0; i < letters.length; i++){
    const element = letters[i];
    console.log("for: ",element);
}
//forma nueva
letters.forEach(item => console.log("forEach: ",item));