
//reactor using the rest operator and an arrow function
/*function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  };
*/
const filterOutOdds = (...nums) => nums.filter(num=>num%2===0);

/*
findMin
Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

Make sure to do this using the rest and spread operator.

const findMin = (...args) => Math.min(...args)
findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1 */

const findMin = (...nums) => Math.min(...nums);

/*

mergeObjects
Write a function called mergeObjects that accepts two 
objects and returns a new object which contains all the keys 
and values of the first object and second object.
*/

const mergeObjects = (object1,object2) => ({...object1, ...object2});

/*
doubleAndReturnArgs
Write a function called doubleAndReturnArgs
 which accepts an array and a variable number of arguments.
  The function should return a new array with the original 
  array values and all of additional arguments doubled.
*/

const doubleAndReturnArgs = (array, ...args) => [...array, ...args.map((num)=>num*2)];

console.log(doubleAndReturnArgs([1,2,3],4,4)); // [1,2,3,8,8]
console.log(doubleAndReturnArgs([2],10,4)); // [2, 20, 8]

// 

const removeRandom = (items) => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.splice(idx,1)];
};

/** Return a new array with every item in array1 and array2. */

const extend = (array1,array2) => { return [...array1,...array2]};

/** Return a new object with all the keys and values
from obj and a new key/value pair */


const addKeyVal = (obj, key, val) => {
    let newObject = {...obj};
    newObject[key]=val;
    return newObject;

};

/** Return a new object with a key removed. */


const removeKey = (obj,key) => {
let newObject = {...obj};
delete newObject[key];
return newObject;

};


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
 return{...obj1,...obj2};
};



/** Return a new object with a modified key and value. */
 
const update = (obj,key,value) =>{
let newObj = {...obj};
newObj[key]=value;
return newObj;
};