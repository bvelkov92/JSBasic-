function depositCalculator(depositSum, depositTerm, interestPercent){
let a= depositSum*(interestPercent/100);
a=a/12;
a =depositSum+depositTerm*a;
console.log(a);
};

depositCalculator(200,3,5.7);
depositCalculator(2350,6,7);