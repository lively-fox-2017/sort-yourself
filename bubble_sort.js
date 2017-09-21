'use strict'

function bubbleSort(items) {
var temp;
  for(let i=0; i< items.length; i++){
    for(let j=i+1; j< items.length; j++){
      if(items[i] > items[j]){
        temp = items[i];
        items[i] = items[j];
        items[j] = temp;
       }
    }
  }
  return items;
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
    console.log(bubbleSort(items))

  })
}

main()
