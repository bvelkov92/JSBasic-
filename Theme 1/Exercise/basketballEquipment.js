function basketballEquipment(yearTaxPerTraining){
/*
    • Баскетболни кецове – цената им е 40% по-малка от таксата за една година
    • Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
    • Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
    • Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка
*/

let shoes = yearTaxPerTraining-(yearTaxPerTraining*40/100);
let trackSuit = shoes-(shoes*20/100);
let ball = trackSuit/4;
let accessories = ball/5
console.log(yearTaxPerTraining+shoes+trackSuit+ball+accessories);
};
basketballEquipment(365);
basketballEquipment(550);

/* ================Second solution======================*/
function basketballEquipment(yearTaxPerTraining){

let shoes = calculate(yearTaxPerTraining,40);
let trackSuit = calculate(shoes,20);
let ball = trackSuit/4;
let accessories = ball/5
console.log(yearTaxPerTraining+shoes+trackSuit+ball+accessories);
};

function calculate (value, percent){
   return value-(value*percent/100)
};

basketballEquipment(365);
basketballEquipment(550);
