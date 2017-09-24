'use strict'

function quickSort(arr,lo,hi) {
  if(lo<hi){
    let pi = partition(arr,lo,hi);

    quickSort(arr,lo,pi-1);
    quickSort(arr,pi+1,hi);
  }
  return arr;
}

function partition(arr,lo,hi){
  let pivot = arr[hi];
  let i =lo-1;
  for(let j=lo;j<=hi-1;j++){
    if(arr[j]<=pivot){
      i++;
      let temp = arr[i];
      arr[i]=arr[j];
      arr[j]=temp;
    }
  }
  let temp = arr[i+1];
  arr[i+1]=arr[hi];
  arr[hi] = temp;
  return (i+1);
}

var test = [3,5,2,7,5,1,12,11,10,99,33,1];
console.log(quickSort(test,0,test.length-1));

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
    console.log(quickSort(items,0,items.length-1))

  })
}

// main()
