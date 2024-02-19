const returnFirstTwoDrivers = function (arrayOfDrivers) {
    return arrayOfDrivers.slice(0, 2);
  };
const returnLastTwoDrivers = function (arrayOfDrivers) {
    return arrayOfDrivers.slice(2, 4);
};
  const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
  const firstTwoDrivers = returnFirstTwoDrivers(drivers);
  const lastTwoDrivers = returnLastTwoDrivers(drivers);
  console.log(firstTwoDrivers);
  console.log(lastTwoDrivers);

  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const selectDifferentDrivers = function (arrayOfDrivers, selector) {
    return selector(arrayOfDrivers);
}



function createFareMultiplier(multiplier) {
    return function fareMultiplier(value) {
        return value * multiplier;
    };
  }

function createFareDoubler(fare) {
    return function fareDoubler(value) {
        return value * fare;
    };
}

const fareDoubler = createFareDoubler(2);
console.log(fareDoubler(10));

function createFareTripler(fare) {
    return function fareTripler(value) {
        return value * fare;
    };
}

const fareTripler = createFareTripler(3)
console.log(fareTripler(10))

