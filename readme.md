# Homework 4: Using jQuery

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