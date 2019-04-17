// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// SOLUTION - 1: Using "for of loop"

// function chunk(array, size) {
//     // Create a variable to hold the chunked array
//     const chunkedArray = [];

//     // Iterate through the initial array
//     for (let element of array) {
//         // Get the last element inside of the chunked array
//         const lastElement = chunkedArray[chunkedArray.length - 1];

//         if (!lastElement || chunkedArray.length === size) {
//             chunkedArray.push([element]);
//         } else {
//             lastElement.push(element);
//         }
//     }
//     return chunkedArray;
// }
// cconsole.log(chunk([1, 2, 3, 4, 5, 6, 7], 2));



//SOLUTION - 2: Using "slice"
function chunk(array, size) {
    // Create a variable to hold the chunked array
    const chunkedArray = [];
    let index = 0;

    while(index < array.length) {
        chunkedArray.push(array.slice(index, index + size));
        index += size;
    }
    return chunkedArray;   
}
console.log(chunk([1, 2, 3, 4, 5, 6, 7], 2));