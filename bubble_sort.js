'use strict'

function bubbleSort(items) {
  for(let i=0;i<items.length;i++){
    for(let j=0;j<(items.length-i-1);j++){
      if(items[i]<items[j]){
        let temp = items[j];
        items[j] = items[i];
        items[i] = temp;
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
