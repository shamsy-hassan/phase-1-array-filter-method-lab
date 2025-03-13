// Code your solution here
// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers, name){
    let findDriver = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
    return findDriver;
}

console.log(findMatching(drivers, 'Bobby'));

function fuzzyMatch(drivers, letters){
    let driversByLetter = drivers.filter(driver => driver.startsWith(letters));
    return driversByLetter
}
const driversList = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
console.log(fuzzyMatch(driversList, "Sa"));


const driversObject = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
];

function  matchName(drivers, name){
    let driversName = driversObject.filter(driver => driver.name === name);
    return driversName;
}

console.log(matchName(drivers, "Bobby"));