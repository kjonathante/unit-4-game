# Homework 4: Using jQuery

Features:
Javascript
  1. JSON - to create a pluggable theme.

jQuery:
  1. .data method
  2. .each function

Utilizing JSON and the jQuery .data() method.


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