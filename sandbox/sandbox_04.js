/**
 * Building empty classes
 */

let pet = {};
pet.givenName = undefined;
pet.ageInYears = undefined;
pet.species = undefined;
pet.hasOffspring = undefined;
pet.valueInDollars = undefined;
pet.toy = {};
pet.treat = {};

let petToy = {};
petToy = undefined;
petToyCost = undefined;
petToyColor = undefined;

let petTreat = {};
petTreat.name = undefined;
petTreat.calorie = undefined;
petTreat.cost = undefined;

/**
 * Building Pets array (an array of obj)
 */
let pets = [];

/**
 * Data Entry of pet obj
 */

pets.push(
    pet.givenName = 'Calvin',
    pet.ageInYears = 7,
    pet.species = 'Bull-labrador',
    pet.hasOffspring = false,
    pet.valueInDollars = Infinity
)

pets.push(
    pet.givenName = 'Mocha',
    pet.ageInYears = 7,
    pet.species = 'Bull-labrador',
    pet.hasOffspring = false,
    pet.valueInDollars = Infinity
)

// console.log(pets);
// console.log(pets[0]);
pets.forEach(function (pet){console.log(pet.givenName)});

pets.forEach(function (pet){console.log(pet)})

console.log(pet.givenName);
console.log(pets[])