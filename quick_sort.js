'use strict'

function quickSortPartition(arr, start, end) {
  let pivot = arr[start];

  let left = start + 1;
  let right = end;
  let done = false;
  while (!done) {
    while (left <= right && arr[left] <= pivot) {
      left += 1;
    }
    while (arr[right] >= pivot && right >= left) {
      right -= 1;
    }
    if (right < left)
      done = true;
    else {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
    }

    return right;
  }
}

function quickSortCore(arr, start, end) {
  if (start < end) {
    let splitPoint = quickSortPartition(arr, start, end);
    quickSortCore(arr, start, splitPoint - 1);
    quickSortCore(arr, splitPoint + 1, end);
  }
}

function quickSort(arr) {
  quickSortCore(arr, 0, arr.length - 1);
}

// Driver code
function main() {

  sort_from_file('random_wordlist.txt')
  sort_from_file('reversed_wordlist.txt')
  sort_from_file('sorted_wordlist.txt')

}

function sort_from_file(filename) {
  let fs = require('fs')

  fs.readFile(filename, (err, data) => {

    if (err)
      return console.log(err)

    let items = data.toString()
      .split("\r\n")

    console.log(filename)
    console.log("--------")
    console.log(quickSort(items))
  })
}

main()
