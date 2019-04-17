// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    // Create a variable to hold the chunked array
    const chunkedArray = [];

    // Iterate through the initial array
    for (let element of array) {
        // Get the last element inside of the chunked array
        const lastElement = chunkedArray[chunkedArray.length - 1];

        if (!lastElement || chunkedArray.length === size) {
            chunkedArray.push([element]);
        } else {
            lastElement.push(element);
        }
    }
    return chunkedArray;
}

module.exports = chunk;
