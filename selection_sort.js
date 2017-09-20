'use strict'

function selectionSort(arrays){
  var nArr = arrays.length;
  var pointer ;
  var min;
  var temp;
  for(var i=1; i<nArr-1; i++){
    pointer=i;
    for(var j=i; j<nArr; j++){
      if(arrays[j]<arrays[i]){
        min=arrays[j];
      }
    }
    temp = arrays[i];
    arrays[i] = arrays[j];
    arrays[j] = temp;
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
