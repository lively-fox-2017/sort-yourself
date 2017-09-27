'use strict'

function selectionSort(arrays){
  let lok;
  //looping sebanyak panjang angka
  for (var i = 0; i < arrays.length; i++) {
    //assign lok dengan i
    lok=i;
    //lakukan perulangan dimulai dari i+1 sebanyak panjant arrays
    for (var j = i+1; j < arrays.length; j++) {
      //cek jika arrays[lok]>arrays[j] maka tukar lok dengan j
      if (arrays[lok]>arrays[j]){
        lok=j;
      }
    }
    //tukarkan arrays[i] dengan arrays[lok]
    let temp=arrays[i];
    arrays[i]=arrays[lok];
    arrays[lok]=temp;
  }
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
