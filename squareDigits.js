/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/

function squareDigits(num) {
  let a = num.toString();
  let b = a.split("");
  let c = "";

  for (let index = 0; index < b.length; index++) {
    let d = parseInt(b[index]) * parseInt(b[index]);
    c += d.toString();
  }

  return parseInt(c);
}
