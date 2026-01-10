function suppliersForSchool(penPacksNum, markerPacksNum, preparationLitres, discountPercent){
//Single price of pen packed: 5.80 lv
//Single price of marker packed: 7.20 lv
//Single price for litre of preparation: 1.20 lv
let totalSum = (penPacksNum*5.80)+(markerPacksNum*7.20)+(preparationLitres*1.20);
totalSum = totalSum-(totalSum*(discountPercent/100));
console.log(totalSum);
};

suppliersForSchool(2,3,4,25);
suppliersForSchool(4,2,5,13);