// Code your solution in this file!

var selectingDrivers = [];

function returnFirstTwoDrivers(passedArray) {
    const newArray = passedArray.slice(0, 2);
    return newArray
}

function returnLastTwoDrivers(passedArray) {
    let newArray = [];
    let oldArrayLength = passedArray.length;
    newArray = passedArray.slice(oldArrayLength - 2, oldArrayLength);
    return newArray;
}

selectingDrivers[0] = returnFirstTwoDrivers;
selectingDrivers[1] = returnLastTwoDrivers;

function createFareMultiplier(givenValue) {

    return (function (fare) {
        return fare * givenValue;
    })
}

function fareDoubler(fare) {

    const temp = createFareMultiplier(2);
    return temp(fare);
}

function fareTripler(fare) {
    const temp = createFareMultiplier(3);
    return temp(fare);

}

function selectDifferentDrivers(arrayOfDrivers, funct) {

    return funct(arrayOfDrivers);


}