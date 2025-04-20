// Sunil Park

/*
1. Write a JavaScript function that reverse a number.
Example x = 32243;
Expected Output : 34223
*/

function getReversedNumber(x) {
  let str = "";

  for (let c of String(x)) {
    str = c + str;
  }

  return str;
}
const p1 = getReversedNumber(32243);
console.log("p1:", p1); // 32243

// ============================================================================ //

/*
2. Write a JavaScript function that checks whether a passed string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
*/

function isPalindrome(str) {
  for (let i = 0; i < str.length; i++) {
    // check if first and last characters are not equal
    if (str[i] !== str[str.length - 1 - i]) return false;
  }

  return true;
}
const p2 = isPalindrome("12321");
console.log("p2:", p2); // true

// ============================================================================ //

/*
3. Write a JavaScript function that generates all combinations of a string.
Example string : 'dog'
Expected Output : d,do,dog,o,og,g
*/

function generateCombination(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      result.push(str.slice(i, j + 1));
    }
  }
  return result;
}
const p3 = generateCombination("dog");
console.log("p3:", p3); // ['d', 'do', 'dog', 'o', 'og', 'g']

// ============================================================================ //

/*
4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
Example string : 'webmaster'
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.
*/

function getAlphabeticalOrder(str) {
  const map = new Map();
  const firstLetter = "a".charCodeAt(0);
  let result = "";

  // setup map
  for (let c of str) {
    if (map.has(c)) {
      map.set(c, map.get(c) + 1);
    } else map.set(c, 1);
  }

  // check all alphabets from a to z
  for (let i = 0; i < 26; i++) {
    const currChar = String.fromCharCode(firstLetter + i);
    // add the character to the result string if it's in the map
    if (map.has(currChar)) result += currChar.repeat(map.get(currChar));
  }

  return result;
}
const p4 = getAlphabeticalOrder("webmaster");
console.log("p4:", p4); // abeemrstw

// ============================================================================ //

/*
5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string
in upper case.
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox '
*/

function getConvertedUpperCase(str) {
  let result = "";
  let isUpperCase = true;

  for (let i = 0; i < str.length; i++) {
    // if isUpperCase is true, change the character
    result += isUpperCase ? str[i].toUpperCase() : str[i];

    isUpperCase = false;
    if (str[i] === " ") isUpperCase = true;
  }
  return result;
}
const p5 = getConvertedUpperCase("the quick brown fox");
console.log("p5:", p5); // The Quick Brown Fox

// ============================================================================ //

/*
6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
Example string : 'Web Development Tutorial'
Expected Output : 'Development'
*/

function getLongestWord(str) {
  let curr = "";
  let longest = "";

  for (let c of str) {
    // if the current character is space,
    // then compare the current string to longest string
    if (c === " ") {
      if (longest.length < curr.length) longest = curr;
      curr = "";
      continue;
    }

    curr += c;
  }

  // compare the last string too
  if (longest.length < curr.length) longest = curr;

  return longest;
}
const p6 = getLongestWord("Web Development Tutorial");
console.log("p6:", p6); // Development

// ============================================================================ //

/*
7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
Example string : 'The quick brown fox'
Expected Output : 5
*/

function getVowelsTotal(str) {
  const vowels = { a: true, e: true, i: true, o: true, u: true };
  let count = 0;

  for (let c of str) {
    if (vowels[c.toLowerCase()]) count++;
  }

  return count;
}
const p7 = getVowelsTotal("The quick brown fox");
console.log("p7:", p7); // 5

// ============================================================================ //

/*
8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and
itself.
*/

function isPrimeNumber(n) {
  // base conditions
  if (n === 1) return false;
  if ((n % 2 === 0 || n % 3 === 0) && n !== 2 && n !== 3) return false;

  for (let i = 5; i * i < n - 1; i += 6) {
    // set prime variables
    // Prime: [5, 7] -> [11, 13] -> [17, 19] -> [23, 29] -> ...
    const [currPrime, nextPrime] = [i, i + 2];

    // check if n divided by prime number has decimal
    if (n % currPrime === 0 || n % nextPrime === 0) return false;
  }

  return true;
}
const p8 = isPrimeNumber(91);
console.log("p8:", p8); // false

// ============================================================================ //

/*
9. Write a JavaScript function which accepts an argument and returns the type.
Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
*/

function cb() {}
function getDataType(x) {
  return typeof x;
}
const p9 = getDataType(cb);
console.log("p9:", p9); // function

// ============================================================================ //

/*
10. Write a JavaScript function which returns the n rows by n columns identity matrix.
*/

function createMatrix(n) {
  return new Array(n).fill().map(() => new Array(n).fill().map(() => ""));
}
const p10 = createMatrix(5);
console.log("p10:", p10); // size of 5 * 5 array

// ============================================================================ //

/*
11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second
greatest numbers, respectively.
Sample array : [1,2,3,4,5]
Expected Output : 2,4
*/

function getSecondNumbers(nums) {
  // if there is no second greatest and lowest numbers in the array
  // return empty array
  if (nums.length < 2) return [];

  return [nums[1], nums[nums.length - 2]];
}
const p11 = getSecondNumbers([1, 2, 3, 4, 5]);
console.log("p11:", p11); // [2, 4]

// ============================================================================ //

/*
12. Write a JavaScript function which says whether a number is perfect.
According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper
positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum).
Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently,
the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1
+ 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
*/

function isPerfectNumber(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (Number.isInteger(n / i)) sum += i;
  }
  return n === sum;
}
const p12 = isPerfectNumber(28);
console.log("p12:", p12); // true

// ============================================================================ //

/*
13. Write a JavaScript function to compute the factors of a positive integer.
*/

function getFactors(n) {
  let nums = [];
  for (let i = 1; i <= n; i++) {
    if (Number.isInteger(n / i)) nums.push(i);
  }
  return nums;
}
const p13 = getFactors(20);
console.log("p13:", p13); // [1, 2, 4, 5, 10, 20]

// ============================================================================ //

/*
14. Write a JavaScript function to convert an amount to coins.
Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
Output : 25, 10, 10, 1
*/

function getAmountToCoins(remain, coins) {
  const result = [];
  let l = 0;
  while (0 < remain) {
    // if remained amount is smaller than the current coin
    // then look for next coin
    if (remain < coins[l]) {
      l++;
      continue;
    }

    result.push(coins[l]);
    remain -= coins[l];
  }

  return result;
}
const p14 = getAmountToCoins(46, [25, 10, 5, 2, 1]);
console.log("p14:", p14); // [25, 10, 10, 1]

// ============================================================================ //

/*
15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n
from the user and display the result.
*/

// skip

// ============================================================================ //

/*
16. Write a JavaScript function to extract unique characters from a string.
Example string : "thequickbrownfoxjumpsoverthelazydog"
Expected Output : "thequickbrownfxjmpsvlazydg"
*/

function getUniqueCharacters(str) {
  const set = new Set();
  let result = "";

  for (let c of str) {
    if (set.has(c)) continue;

    set.add(c);
    result += c;
  }

  return result;
}
const p16 = getUniqueCharacters("thequickbrownfoxjumpsoverthelazydog");
console.log("p16:", p16); // thequickbrownfxjmpsvlazydg

// ============================================================================ //

/*
17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
*/

function getCountLetters(str) {
  const result = {};
  for (let c of str) {
    // check if object has current character
    if (result[c]) result[c] = result[c] + 1;
    else result[c] = 1;
  }

  return result;
}
const p17 = getCountLetters("occurrences");
console.log("p17:", p17); // { o: 1, c: 3, u: 1, r: 2, e: 2, n: 1, s: 1 }

// ============================================================================ //

/*   
18. Write a function for searching JavaScript arrays with a binary search.
Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
*/

function binarySearch(nums, target) {
  // assume that the nums is already sorted
  let l = 0,
    r = nums.length - 1;

  while (l <= r) {
    const m = Math.floor((l + r) / 2);

    if (nums[m] === target) return m;
    if (nums[m] < target) l = m + 1;
    else r = m - 1;
  }

  return null;
}
const p18 = binarySearch([1, 3, 4, 6, 8, 9, 10, 21], 6);
console.log("p18:", p18); // 3

// ============================================================================ //

/*
19. Write a JavaScript function that returns array elements larger than a number.
*/

function getLargeNumbers(nums, target) {
  return nums.filter((n) => target < n);
}
const p19 = getLargeNumbers([1, 3, 6, 8, 9, 12], 7);
console.log("p19:", p19); // [8, 9, 12]

// ============================================================================ //

/*
20. Write a JavaScript function that generates a string id (specified length) of random characters.
Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
*/

function getRandomId(str, length) {
  let result = "";

  // run while loop until the result string reaches the length value
  while (result.length < length) {
    const random = Math.floor(Math.random() * str.length);
    result += str[random];
  }

  return result;
}
const p20 = getRandomId(
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  8
);
console.log("p20:", p20);

// ============================================================================ //

/*
21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
Sample array : [1, 2, 3] and subset length is 2
Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
*/

function getSubset(arr, leng, depth = 0, path = [], output = []) {
  if (path.length === leng) {
    output.push([...path]);
    return;
  }

  for (let i = depth; i < arr.length; i++) {
    // variable "i" needs to start from the last index
    // to continue the next number
    getSubset(arr, leng, i + 1, [arr[i], ...path], output);
  }

  return output;
}
const p21 = getSubset([1, 2, 3], 2);
console.log("p21:", p21); // [ [2, 1], [3, 1], [3, 2] ];

// ============================================================================ //

/*
22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number
of occurrences of the specified letter within the string.
Sample arguments : 'microsoft.com', 'o'
Expected output : 3
*/

function getCountTarget(str, target) {
  let count = 0;

  for (let c of str) {
    if (c === target) count++;
  }

  return count;
}
const p22 = getCountTarget("microsoft.com", "o");
console.log("p22:", p22); // 3

// ============================================================================ //

/*
23. Write a JavaScript function to find the first not repeated character.
Sample arguments : 'abacddbec'
Expected output : 'e'
*/

function getFirstNotRepeated(str) {
  const arr = [];
  const map = new Map();

  // add all characters into map
  for (let c of str) {
    if (map.has(c)) {
      // true -> dupplicated character
      map.set(c, true);
      continue;
    }

    map.set(c, false);
    arr.push(c);
  }

  for (let c of arr) {
    // if the get value is true
    // then continue the loop
    if (map.get(c)) continue;
    return c;
  }

  return null;
}
const p23 = getFirstNotRepeated("abacddbec");
console.log("p23:", p23); // e

// ============================================================================ //

/*
24. Write a JavaScript function to apply Bubble Sort algorithm.
*/

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // if two index items have swapped the position
    let hasSwapped = false;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      // if next index is smaller than the current index item
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        hasSwapped = true;
      }
    }

    // if nothing has updated,
    // then break the for loop
    if (!hasSwapped) break;
  }

  return arr;
}
const p24 = bubbleSort([4, 3, 6, 2, 8, 1]);
console.log("p24:", p24); // [1, 2, 3, 4, 6, 8]
