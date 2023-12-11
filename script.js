// The function to find the second-highest element
function secondHighest(arr) {
    // Check if the array is empty or has only one element
    if (arr.length <= 1) {
        return -Infinity;
    }

    // Remove duplicate elements and sort the array in descending order
    const uniqueSortedArr = [...new Set(arr)].sort((a, b) => b - a);

    // If all elements are the same, return -Infinity
    if (uniqueSortedArr.length === 1) {
        return -Infinity;
    }

    // Return the second-highest element
    return uniqueSortedArr[1];
}

// Export the function for testing
module.exports = secondHighest;
