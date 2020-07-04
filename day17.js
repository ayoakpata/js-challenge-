/* 

    a function, rollTheDice(), 
    which is supposed to simulate two 
    dice being rolled and totalled
 */

const rollTheDice = () => {
  let die1 = Math.floor(Math.random() * 6 + 1);
  let die2 = Math.floor(Math.random() * 6 + 1);
  return die1 + die2;
};

console.log(rollTheDice());
console.log(rollTheDice());

//This code is needs a little fix i believe 😭😭
