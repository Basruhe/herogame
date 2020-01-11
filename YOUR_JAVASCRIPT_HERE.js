// Write your JS here

//Creating hero object
const hero = {
  name: "Bas",
  heroic: true,
  inventory: [],
  health: 10,
  weapon: {
    type: "Dagger",
    damage: 2
  }
};


//Object Tests
console.log(Object.keys(hero));
console.log(typeof(hero.inventory));

//Creating placeholder variable
const person = hero
console.log(Object.keys(person));
console.log (hero.health);

// RESTING FUNCTION
rest = function(person) {
  console.log (`There is ${person.health} health before function logic`)
  
  if (person.health < 10) {
    person.health = 10
    console.log (`Health reset to ${person.health} health`)
    }
    if (person.health === 10) {
    console.log ("You are already at full health. No need to rest");
    //window.alert ("You are already at full health. There is no need to rest")
    
  }
  return(person)
};

console.log (person.health);

// Testing event listener for  image click (works)
const innPress = document.getElementById("inn");
innPress.addEventListener("click", function() {
  window.alert("This works")
});

// Trying to run a function on image click (does not work)
// const innPress = document.getElementById("inn");
// innPress.addEventListener("click", testfunction());
// const testfunction = function () {
//   window.alert ("Does this work?");
// };





// PICKUP ITEM

//Weapon pickup:

console.log (`Inventory contains ${person.inventory} before pickup`);


const pickUpItem = function(person, weapon) {
  console.log ("Weapon added:")
  person.inventory.push (weapon);
  console.log(person.inventory);
};
const weapon = "dagger";

console.log (`Inventory contains ${person.inventory} after pickup`);
 
//Testing event listener for image click (works) 
// const weaponPress = document.getElementById("dagger");
// weaponPress.addEventListener("click", function() {
//   window.alert("This works")
// });

// Trying to run the function on  image click (does not work)
const weaponPress = document.getElementById("dagger");
weaponPress.addEventListener("click", pickUpItem(person, weapon));






// const adding = function (a, b,) {
//   return a + b
// }
// console.log (adding (1,2));








const equipWeapon = function() {

};

