'use strict'

function bubbleSort2(items) {
  var nItems = items.length;
  var temp;

  for(var i =0; i<nItems;i++){
    var swapped = false;
    for(var j=0; j<nItems; j++){
      if(items[j]>items[j+1]){
        temp = items[j];
        items[j]= items[j+1];
        items[j+1] = temp;
        swapped = true;
      }
    }
    if(!swapped){
      break;
    }
  }
  return items;
}


// Driver code
function main() {

  sort_from_file('random_wordlist.txt')
  //sort_from_file('reversed_wordlist.txt')
  //sort_from_file('sorted_wordlist.txt')

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
    console.log(bubbleSort2(items))

  })
}

main()
