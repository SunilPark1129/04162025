// Sunil Park

// implement my own version of these array instance methods: map, filter, reduce, includes, find, slice

// test case
const arr = [1, 2, 3, 4, 5];

/*==================================================================*/

// map

arr.__proto__.myMap = function (cb) {
  const r = [];
  for (let i = 0; i < this.length; i++) {
    r.push(cb(this[i], i, this));
  }
  return r;
};
const p1 = arr.myMap((x) => x + 2);
console.log(p1); // [3, 4, 5, 6, 7]

/*==================================================================*/

/*==================================================================*/

// filter

arr.__proto__.myFilter = function (cb) {
  const r = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) r.push(this[i]);
  }
  return r;
};
const p2 = arr.myFilter((x) => x < 3);
console.log(p2); // [1, 2]

/*==================================================================*/

/*==================================================================*/

// reduce

arr.__proto__.myReduce = function (cb, initialValue) {
  // if parameter has second argument
  let i = initialValue ? 0 : 1;
  let r = initialValue || this[0];

  for (i; i < this.length; i++) {
    r = cb(r, this[i], i, this);
  }
  return r;
};
const p3 = arr.myReduce((a, b) => (a > b ? a : b));
console.log(p3); // 5

/*==================================================================*/

/*==================================================================*/

// includes

arr.__proto__.myInclude = function (x) {
  for (let i = 0; i < this.length; i++) {
    if (x === this[i]) return true;
  }
  return false;
};
const p4 = arr.myInclude(3);
console.log(p4); // true

/*==================================================================*/

/*==================================================================*/

// find

arr.__proto__.myFind = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) return this[i];
  }
};
const p5 = arr.myFind((x) => x > 3);
console.log(p5); // 4

/*==================================================================*/

/*==================================================================*/

// slice

arr.__proto__.mySlice = function (a, b) {
  let r = [];

  let left = a,
    right = b || this.length;

  // calculate negative starting number
  if (left < 0) {
    if (Math.abs(left) > this.length) left = 0;
    else left = this.length + left;
  }

  // calculate negative ending number
  if (right < 0) right = this.length + right;

  for (let i = left; i < Math.min(right, this.length); i++) {
    r.push(this[i]);
  }
  return r;
};
const p6 = arr.mySlice(-2, 5);
console.log(p6); // [4, 5]

/*==================================================================*/
