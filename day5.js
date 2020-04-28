/* Write a program to find the Hamming distance between two strings.

Note: Hamming distance between two strings of equal length is 
the number of positions at which the corresponding characters are different. 
In more technical terms, it is a measure of the minimum number of changes 
required to turn one string into another.

The Hamming distance between:

“karolin” and “kathrin” is 3.
“karolin” and “kerstin” is 3.
1011101 and 1001001 is 2.
2173896 and 2233796 is 3.

*/

function hammingDistance(str1, str2) {
  let result = 0;

  if (str1.length == str2.length) {
    for (let i = 0; i < str1.length; i++) {
      if (str1[i].toLowerCase() != str2[i].toLowerCase()) {
        result++;
      }
    }
    return result;
  } else {
    throw new Error('strings length not equal');
  }
}
