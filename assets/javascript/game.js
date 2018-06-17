const themes = {
	"characters": [
    {
      "name": "Lloyd",
      "src": "assets/images/x_Lloyd.jpeg",
      "hp": 20,
      "attackPower": 6,
      "counterAttackPower": 7
    },
    {
      "name": "Nya",
      "src": "assets/images/x_Nya.jpeg",
      "hp": 20,
      "attackPower": 7,
      "counterAttackPower": 5
    },
    {
      "name": "Zane",
      "src": "assets/images/x_Zane.jpeg",
      "hp": 20,
      "attackPower": 8,
      "counterAttackPower": 6
    },
    {
      "name": "Lord Garmadon",
      "src": "assets/images/x_Lord_Garmadon.jpeg",
      "hp": 20,
      "attackPower": 5,
      "counterAttackPower": 9
    }
  ]
};

$('#defense-area').data( {isEmpty: true} );

/*
<div class="characters" id="character0">
<img class="image" src="assets/images/x_Lloyd.jpeg" alt="Lloyd">
<!-- <div class="image"></div> -->
<p>Lloyd</p>
<p>❤️ <span>20</span></p>
</div>
*/
let $div;
let $span;
$.each( themes.characters, function(key, val) {
  $div = $('<div>');
  $div.attr('id', 'character'+key).addClass('characters');
  
  $span = $('<span>');
  $span.attr('id', 'hp').text( val.hp );

  $div.append( $('<img>').addClass('sel-area-img').attr('src', val.src).attr('alt', val.name) );
  $div.append( $('<p>').text(val.name));
  $div.append( $('<p>').text('❤️ ').append( $span ));

  $div.data({
    hp: val.hp,
    ap: val.attackPower,
    cp: val.counterAttackPower,
    aap: 0
  });

  $('#selection-area').append( $div );
});

// player character selection
$('#selection-area').on('click', '.characters',function() {
  const player = $(this)
  $('#attack-area').prepend( player );

  const enemies = $('#selection-area .characters');
  $('#holding-area').prepend( enemies );
});

$('#holding-area').on('click', '.characters',function() {
  const $defenseArea = $('#defense-area');
  const data = $defenseArea.data();

  if (data.isEmpty) {
    $defenseArea.prepend( $(this) );
    $defenseArea.data( {isEmpty: false} );
    $('#attack-area').append( $('<button>').text('Attack'));
  }
  console.log('holding-area on click');
});

function removeFigther() {
  $('#defense-area').data( {isEmpty: true} );
  $('#defense-area').empty();
  $('#attack-area button').remove();
};

// const characters = [
//   {
//     name: "charac0",
//     healthPoints: 100,
//     attackPower: 100,
//     counterAttackPower: 100
//   },
//   {
//     name: "charac1",
//     healthPoints: 20,
//     attackPower: 5,
//     counterAttackPower: 5
//   },
//   {
//     name: "charac2",
//     healthPoints: 100,
//     attackPower: 100,
//     counterAttackPower: 100
//   },
//   {
//     name: "charac3",
//     healthPoints: 25,
//     attackPower: 6,
//     counterAttackPower: 8
//   },
// ];

// const playerInput = 3;

// const computerInputs = [1,2,0];

// const player = Object.create( characters[playerInput] );
// player.computedAttackPower = player.attackPower;

// for (let i = 0; i < computerInputs.length; i++) {

//   let computerInput = computerInputs[i];

//   let enemy = Object.create( characters[computerInput] );

//   console.log(`enemy hp: ${enemy.healthPoints}, counter attack power: ${enemy.counterAttackPower}`);
//   console.log(`player hp: ${player.healthPoints}, computed attack power: ${player.computedAttackPower}`);

//   while ( player.healthPoints > 0 && enemy.healthPoints > 0 ) {
//     //attack
//     enemy.healthPoints -= player.computedAttackPower;
//     //increment
//     player.computedAttackPower += player.attackPower;

//     //counter attack
//     if (enemy.healthPoints > 0) {
//       player.healthPoints -= enemy.counterAttackPower;
//     } else {
//       console.log("enemy is dead and can't hit no more.")
//     }    
//     console.log(`enemy hp: ${enemy.healthPoints}`)
//     console.log(`player hp: ${player.healthPoints}`)
//     console.log(`player computed attach power: ${player.computedAttackPower}`);
//   }

//   if (player.healthPoints < 1) {
//     console.log("player is dead");
//     break;
//   }
// }
// // $.each( characters, (index, char) => {
// //   $.each( char, (key, value) => {
// //     console.log( `${key}: ${value}` );
// //   });
// // });