function foodDelivery(chickenMenus, fishMenus, veganMenus){
    /*
    • Пилешко меню –  10.35 лв. 
    • Меню с риба – 12.40 лв. 
    • Вегетарианско меню  – 8.15 лв. 
    */
let chickenMenusSum = chickenMenus*10.35;
let fishMenusSum = fishMenus*12.40;
let veganMenusSum = veganMenus*8.15;
let menusSum = chickenMenusSum+fishMenusSum+veganMenusSum;
let cakePrice=menusSum/5;
console.log(menusSum+cakePrice+2.50);
};

foodDelivery(2,4,3);
foodDelivery(9,2,6);