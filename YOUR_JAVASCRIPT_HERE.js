// Write your JS here


const hero = {
  name: "Bas",
  heroic: true,
  inventory: [],
  health: 10,
  weapon: {
    type: "Sword",
    damage: 2
  }
}

//Tests
console.log(Object.keys(hero))
console.log(hero.inventory)

//Creating placeholder variable
const person = hero
console.log(Object.keys(person))

//Resting function
const rest = function(person) {
  console.log (hero.health + " Health before function logic")
  
  if (hero.health < 10) {
    person.health=10
    console.log ("Health set to " + hero.health)
    return (person)
  }
  if (hero.health === 10) {
    console.log ("You are already at full health. No need to rest")
    //window.alert ("You are already at full health. There is no need to rest")
    return (person)
  }
}

rest()