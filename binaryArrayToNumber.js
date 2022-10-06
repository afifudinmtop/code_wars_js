/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2

However, the arrays can have varying lengths, not just limited to 4.
*/

const binaryArrayToNumber = (arr) => {
  let jumlah = 0;
  let arr2 = [];
  for (let index = arr.length - 1; index > -1; index--) {
    arr2.push(arr[index]);
  }

  for (let index = 0; index < arr2.length; index++) {
    if (arr2[index] > 0) {
      jumlah += Math.pow(2, index);
    }
  }
  return jumlah;
};
