// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = ()=> { 
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = ()=> { 
    return drivers.slice(-2);
}
const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (fareMultiplier)=> {
    return function (fare){
        return (fareMultiplier * fare);
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, array) {
    return array(drivers);
  }