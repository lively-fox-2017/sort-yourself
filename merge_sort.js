'use strict'
function mergeSort(arr){
  //cek jika arr.length lebih kecil dari 2 maka return arr
  if (arr.length < 2)
    return arr;
  //buat middle dengan cara membagi 2 array
  var middle = parseInt(arr.length / 2);
  // pecah menjadi bagian kanan dan kiri
  var left   = arr.slice(0, middle);
  var right  = arr.slice(middle, arr.length);
  //panggil method merge dengan inputan recursive left dan right
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
  var result = [];
  //lakukan perulangan sampai panjang arr left dan right
  while (left.length && right.length) {
    //cek jika left[0] <= right[0]
    if (left[0] <= right[0]) {
      //push ke result dengan arr left dengan menghapus data yang bagian depan
      result.push(left.shift());
    } else {
      //push ke result dengan arr right dengan menghapus data yang bagian depan
      result.push(right.shift());
    }
  }
  //lakukan perulangan sampai panjang left dan push ke result dengan menghapus bagian depan
  while (left.length)
    result.push(left.shift());
  //lakukan perulangan sampai panjang right dan push ke result dengan menghapus bagian depan
  while (right.length)
    result.push(right.shift());
  
  return result;
}

// function mergeSort(arr) {
//
// }
//
// function merge(left, right) {
//
// }

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
    console.log(mergeSort(items))

  })
}

main()
