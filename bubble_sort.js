'use strict'

function bubbleSort(items) {
	for(var i=0;i<items.length-1;i++){
		for(var j=items.length-1;j>i;j--){
			if(items[i] > items[j]){
				var sementara = items[i];
				items[i] = items[j];
				items[j] = sementara;
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
