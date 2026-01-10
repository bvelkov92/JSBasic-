function repainting(poliamidSqM,paintLitres, difluentLitres, workHours){
    /*
    • Предпазен найлон - 1.50 лв. за кв. метър
    • Боя - 14.50 лв. за литър
    • Разредител за боя - 5.00 лв. за литър
    */

let poliamidSum =  (poliamidSqM + 2) * 1.50;
let paintSum= (paintLitres + (paintLitres*10/100)) * 14.50;
let difluentSum= difluentLitres * 5.00;
let sumForBags = 0.40;
let totalSumForMaterials = poliamidSum+paintSum+difluentSum+sumForBags;
let workersSalary = (totalSumForMaterials* (30/100))* workHours      
console.log(totalSumForMaterials +workersSalary);
};

repainting(10,11,4,8);
repainting(5,10,10,1);