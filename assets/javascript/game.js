const characters = [
  {
    name: "charac0",
    healthPoints: 100,
    attackPower: 100,
    counterAttackPower: 100
  },
  {
    name: "charac1",
    healthPoints: 20,
    attackPower: 5,
    counterAttackPower: 5
  },
  {
    name: "charac2",
    healthPoints: 100,
    attackPower: 100,
    counterAttackPower: 100
  },
  {
    name: "charac3",
    healthPoints: 25,
    attackPower: 6,
    counterAttackPower: 8
  },
];

const playerInput = 3;

const computerInputs = [1,2,0];

const player = Object.create( characters[playerInput] );
player.computedAttackPower = player.attackPower;

for (let i = 0; i < computerInputs.length; i++) {

  let computerInput = computerInputs[i];

  let enemy = Object.create( characters[computerInput] );

  console.log(`enemy hp: ${enemy.healthPoints}, counter attack power: ${enemy.counterAttackPower}`);
  console.log(`player hp: ${player.healthPoints}, computed attack power: ${player.computedAttackPower}`);

  while ( player.healthPoints > 0 && enemy.healthPoints > 0 ) {
    //attack
    enemy.healthPoints -= player.computedAttackPower;
    //increment
    player.computedAttackPower += player.attackPower;

    //counter attack
    if (enemy.healthPoints > 0) {
      player.healthPoints -= enemy.counterAttackPower;
    } else {
      console.log("enemy is dead and can't hit no more.")
    }    
    console.log(`enemy hp: ${enemy.healthPoints}`)
    console.log(`player hp: ${player.healthPoints}`)
    console.log(`player computed attach power: ${player.computedAttackPower}`);
  }

  if (player.healthPoints < 1) {
    console.log("player is dead");
    break;
  }
}
// $.each( characters, (index, char) => {
//   $.each( char, (key, value) => {
//     console.log( `${key}: ${value}` );
//   });
// });