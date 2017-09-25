'use strict'

function selectionSort(arrays){

  var arrBaru = []

  while(arrays.length >= 1) {
    var terkecil = arrays[0]
    var index = 0

    for(var i = 0; i < arrays.length; i++) {
      if(arrays[i] <= terkecil) {
        terkecil = arrays[i]
        index = i
      }
    }
    arrBaru.push(arrays[index])
    arrays.splice(index, 1)
  }
  return arrBaru
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
