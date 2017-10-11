'use strict'

function heapSort(arr){
  var len = arr.length,
      end = len-1;

  heapify(arr, len);
  
  while(end > 0){
   swap(arr, end--, 0);
   siftDown(arr, 0, end);
  }
  return arr;
}

function heapify(arr, len){
  // break the array into root + two sides, to create tree (heap)
  var mid = Math.floor((len-2)/2);
  while(mid >= 0){
   siftDown(arr, mid--, len-1);    
 }
}

function siftDown(arr, start, end){
  var root = start,
      child = root*2 + 1,
      toSwap = root;
  while(child <= end){
     if(arr[toSwap] < arr[child]){
       swap(arr, toSwap, child);
     }
     if(child+1 <= end && arr[toSwap] < arr[child+1]){
       swap(arr, toSwap, child+1)
     }
     if(toSwap != root){
        swap(arr, root, toSwap);
        root = toSwap;
     }
     else{
        return; 
     }
     toSwap = root;
     child = root*2+1
 }
}

function swap(arr, i, j){
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
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
    console.log(heapSort(items))

  })
}

main()
