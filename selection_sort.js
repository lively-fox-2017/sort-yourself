'use strict'

function selectionSort(arrays){
let min;
let temp;
let arrMin;
let i;
let j;
for(i=0; i< arrays.length; i++){
  arrMin = arrays[i];
  min = i;
  for(j=i; j< arrays.length; j++){
    if(arrays[j] < arrMin){
      arrMin = arrays[j];
      min = j;
    }
  }
  if(min !== i){
    temp = arrays[i];
    arrays[i] = arrays[min];
    arrays[min] = temp;
  }
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
