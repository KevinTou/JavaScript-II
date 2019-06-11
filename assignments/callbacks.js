// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ["Pencil", "Notebook", "yo-yo", "Gum"];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

getLength(items, function(length) {
  console.log("The items array length is: ", length);
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}

last(items, function(item) {
  console.log("The last item is: ", item);
});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  const sum = x + y;
  return cb(sum);
}

sumNums(2, 4, function(sumNum) {
  console.log("The sum is: ", sumNum);
});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  const product = x * y;
  return cb(product);
}

multiplyNums(2, 4, function(multiplyNum) {
  console.log("The product is: ", multiplyNum);
});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  const checkedArray = list.filter(li => {
    return li === item;
  });
  return cb(checkedArray.length > 0 ? true : false);
}

contains("Pencil", items, function(isInside) {
  console.log("The item is inside:", isInside);
});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let duplicateFree = [];
  array.forEach(item => {
    if (duplicateFree.includes(item)) {
      return;
    } else {
      duplicateFree.push(item);
    }
  });
  return cb(duplicateFree);
}

removeDuplicates(items, function(arr) {
  console.log("Duplicate free array: ", arr);
});
