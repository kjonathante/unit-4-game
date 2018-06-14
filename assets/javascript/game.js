const characters = [
  {
    name: "charac1",
    healthPoints: 100,
    baseAttackPower: 100,
    attackPower: 100,
    counterAttackPower: 100
  },
  {
    name: "charac2",
    healthPoints: 100,
    baseAttackPower: 100,
    attackPower: 100,
    counterAttackPower: 100
  },
  {
    name: "charac3",
    healthPoints: 100,
    baseAttackPower: 100,
    attackPower: 100,
    counterAttackPower: 100
  },
  {
    name: "charac4",
    healthPoints: 100,
    baseAttackPower: 100,
    attackPower: 100,
    counterAttackPower: 100
  },
];

// for (let i=0; i < characters.length; i++) {
//   let char = characters[i];
//   for (let key in char) {
//     console.log( `${key} - ${char[key]}` );
//   }  
// }

$.each( characters, (index, char) => {
  $.each( char, (key, value) => {
    console.log( `${key}: ${value}` );
  });
});