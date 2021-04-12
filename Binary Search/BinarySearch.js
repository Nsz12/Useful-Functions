


var arr = [1,2,3,4,5,6,7,8,9,10]
var ar = [10,20,30,40,50,60,70,80,90]

binarySearch(arr,10)
binarySearch(ar,70)


/**
   * bineraySearch is a function that takes:
   * @param {*} sortedArray the array to search through its element
   * @param {*} key the wanted number
   */
function binarySearch(sortedArray, key){
    //The array has to be sorted ascendingly for the algorithm to work
    sortedArray.sort(function(a, b){return a-b})
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === key) {
            // found the key
            console.log("The index is: "+middle);
            return middle;
        } else if (sortedArray[middle] < key) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
	// key wasn't found
    return -1;
}

