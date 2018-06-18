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
      "counterAttackPower": 50
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
  ],
  "background": "assets/images/Ninjago.png",
  "title": "Ninjago RPG"
};

$('#title-area').html(`<h1>${themes.title}</h1>`);
$('body').css('background-image', `url(${themes.background})`);

initialize();

function initialize() {
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
      name: val.name,
      hp: val.hp,
      ap: val.attackPower,
      cp: val.counterAttackPower,
      aap: val.attackPower
    });

    $('#selection-area').append( $div );
  });
  $('#defense-area').data( {isEmpty: true} );
  $('#message-area').empty();
  $('#holding-area').empty();
  $('#attack-area').empty();
  $('#defense-area').empty();
}

// player character selection
$('#selection-area').on('click', '.characters',function() {
  const player = $(this)
  $('#attack-area').prepend( player );

  const enemies = $('#selection-area .characters');
  $('#holding-area').prepend( enemies );
});

// enemy selection
$('#holding-area').on('click', '.characters',function() {
  const $defenseArea = $('#defense-area');
  const data = $defenseArea.data();

  if (data.isEmpty) {
    $defenseArea.prepend( $(this) );
    $defenseArea.data().isEmpty = false; // {isEmpty: false} );
    $('#attack-area').append( $('<button>').text('Attack'));

    $('#message-area').empty();
  }
});

// attack
$('#attack-area').on('click', 'button', function() {
  let msg1, msg2, restart; // msg1 and msg2 are <p>, restart is <button>

  // get data() object from element
  const player = $('#attack-area div').data();
  const enemy = $('#defense-area div').data();
  // get player accumulated attack power
  const enemyDamage = player.aap;

  // attack
  enemy.hp -= enemyDamage;
  $('#defense-area #hp').text(enemy.hp);
  msg1 = `You attacked ${enemy.name} for ${enemyDamage} damage.`;

  // increment player attack power 
  player.aap += player.ap;

  if (enemy.hp > 0) { // check enemy's hp
    //counter attack
    player.hp -= enemy.cp;
    $('#attack-area #hp').text(player.hp);
    msg2 = `${enemy.name} attacked you back for ${enemy.ap} damage.`;
  } else {
    removeFigther();
    if ( $('#holding-area .characters').length == 0 ) {
      msg1 = 'You Won!!! Game Over!!!';
      restart = 'Restart';
    } else {
      msg1 = `You have defeated ${enemy.name}. You can choose to fight another enemy.`;
    }
  }

  // check if player survives
  if (player.hp < 1) {
    msg1 = "You been defeated. Game Over!!!";
    msg2 = ""; // remove msg from counter attack
    restart = 'Restart';
    $('#attack-area button').remove();
  }

  $messageArea = $('#message-area').empty().append( $('<p>').text(msg1) );
  if (msg2) $messageArea.append( $('<p>').text(msg2) );
  if (restart) $messageArea.append( $('<button>').text(restart).attr('id','restart-btn') );
  
});

// restart 
$('#message-area').on('click', 'button', function(){
  initialize();
});
function removeFigther() {
  $('#defense-area').data().isEmpty = true; // {isEmpty: true} );
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
// });