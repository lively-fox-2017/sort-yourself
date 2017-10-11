'use strict'

function selectionSort(arrays){
  var minIdx, temp, len = arrays.length;
  for (var i = 0; i < len; i++) {
    minIdx = i;
    for (var j = i+1; j<len; j++) {
      if(arrays[j]<arrays[minIdx]) {
        minIdx = j;
      }
    }
    temp = arrays[i];
    arrays[i] = arrays[minIdx];
    arrays[minIdx] = temp;
  }
  return arrays;
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
