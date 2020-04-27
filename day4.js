/*  Write a JavaScript function that produces a star pattern likes this.

*
**
***
****
*****
****
***
**
*

*/

let varValue = '*';
for (var i = 1; i <= 5; i++) {
  console.log(varValue.repeat(i));
  if (i == 5) {
    for (j = 4; j >= 1; j--) {
      console.log(varValue.repeat(j));
    }
  }
}
