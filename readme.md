# Homework 4: Using jQuery

Utilizing jQuery .data() method and .each function.
Also use JSON to create a pluggable theme.

Example of using .data method 
```javascript
$('.characterDiv').data({
  name: val.name,
  hp: val.hp,
  ap: val.attackPower,
  cp: val.counterAttackPower,
  aap: val.attackPower
});
```

Example of .each function
```javascript
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
```