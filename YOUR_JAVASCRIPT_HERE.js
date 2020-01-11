// Write your JS here


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

//Tests
console.log(Object.keys(hero));
console.log(typeof(hero.inventory));

//Creating placeholder variable
const person = hero
console.log(Object.keys(person));

//Resting function
const rest = function(person) {
  console.log (person.health + " Health before function logic")
  
  if (person.health < 10) {
    person.health=10
    console.log (`Health reset to ${person.health} health`)
    return(person)
    }
    if (person.health === 10) {
    console.log (`You are already at full health. No need to rest`)
    //window.alert ("You are already at full health. There is no need to rest")
    
  }
  return(person)
};

// Testing event listener for  image click:
const innPress = document.getElementById("inn")
innPress.addEventListener("click", function() {
  window.alert("this works!");
});

// Trying to run a function on image click (does not work)
// const innPress = document.getElementById("inn")
// innPress.addEventListener("click", testfunction());

// function testfunction() {
//   window.alert ("ok");
// };





// const pickUpItem = function() {
//   console.log ("pickup function")
// };
// const equipWeapon = function() {
//   console.log ("equip function")
// };

