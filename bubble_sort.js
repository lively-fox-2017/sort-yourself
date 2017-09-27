'use strict'

function bubbleSort(items) {
  //lakukan perulangan dimulai dari panjang items-1 sampai 0
  for (var i = (items.length - 1); i >= 0; i--) {
    // console.log('------------------i='+i);
    //lakukan perulangan dimulai dari panjang items-i sampai 0
    for (var j = (items.length - i); j > 0; j--) {//8-8=0,
      // console.log(items[j]+' > '+items[j-1]);
      //cek jika items[j]<items[j-1] maka tukar items[j] dengan items[j-1]
      if (items[j] < items[j - 1]) {
        //Swap the numbers
        var tmp = items[j];
        items[j] = items[j - 1];
        items[j - 1] = tmp;
        // console.log(items);
      }
    }
  }
  return items
}
// var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
// console.log((testArrayGenap))
// console.log(bubbleSort(testArrayGenap))
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
