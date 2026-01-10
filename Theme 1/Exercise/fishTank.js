function fishTank(lenght, width, high, percent ){
let fishTankVolume = lenght*width*high;
let litresVolume = fishTankVolume/1000;
let percentInDouble= percent/100;
console.log(litresVolume*(1-percentInDouble));
};

fishTank(85,75,47,17);
fishTank(105,77,89,18.5)