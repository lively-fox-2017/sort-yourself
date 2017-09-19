'use strict'

function selectionSort(arrays){
  let result = [];

  while (arrays.length > 0) {
    let min = Infinity;
    let minIdx;

    for (let i = 0; i < arrays.length; i++) {
      if (arrays[i] < min) {
        min = arrays[i];
        minIdx = i;
      }
    }

    result.push(...arrays.splice(minIdx, 1));
  }
  
  return result;
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

    let items = data.toString().split("\r\n")

    console.log(filename)
    console.log("--------")
    console.log(selectionSort(items))

  })
}

main()