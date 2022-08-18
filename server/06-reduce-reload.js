//Reduce reload
const numbers =[1,3,2,3];
/*
* output
* 1: 1
* 2: 1
* 3: 2*/
const histograma = numbers.reduce((acumulador, item) => {
    if(!acumulador[item]){
        acumulador[item]=1;
    }else{
        acumulador[item] = acumulador[item]+1;
    }
    return acumulador;
},{});
console.log(histograma);
const orders = [
    {
        customerName: "Edwin",
        level: 'low',
    },
    {
        customerName: "Iker",
        level: 'medium',
    },
    {
        customerName: "Santiago",
        level: 'hight',
    },
    {
        customerName: "Matias",
        level: 'medium',
    },
];
const levelR = orders.map(item => item.level).reduce((acumulador, item) => {
    if(!acumulador[item]){
        acumulador[item]=1;
    }else{
        acumulador[item] = acumulador[item]+1;
    }
    return acumulador;
},{});
console.log(levelR);