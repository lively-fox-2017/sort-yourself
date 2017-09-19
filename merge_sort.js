'use strict'

function mergeSort(arr) {
  if (arr.length < 2) return arr;

  let midIdx = Math.round(arr.length / 2);
  let left = arr.slice(0, midIdx);
  let right = arr.slice(midIdx, arr.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] <= right[rightIdx]) {
      result.push(left[leftIdx]);
      leftIdx += 1;
    } else {
      result.push(right[rightIdx]);
      rightIdx += 1;
    }
  }

  if (left.length - leftIdx > 0) {
    result.push(...left.splice(leftIdx, left.length - leftIdx));
  }
  if (right.length - rightIdx > 0) {
    result.push(...right.splice(rightIdx, right.length - rightIdx));
  }

  return result;
}

// Driver code
function main() {

  sort_from_file('random_wordlist.txt');
  sort_from_file('reversed_wordlist.txt');
  sort_from_file('sorted_wordlist.txt');

}

function sort_from_file(filename) {
  let fs = require('fs');

  fs.readFile(filename, (err, data) => {

    if (err)
      return console.log(err);

    let items = data.toString()
      .split("\r\n");

    console.log(filename);
    console.log("--------");
    console.log(mergeSort(items));

  });
}

main();