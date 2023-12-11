const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
    let result = [];
    let currentSubarray = [];

    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];

        if (currentSum + currentElement <= n) {
            // Add the element to the current subarray
            currentSubarray.push(currentElement);
            currentSum += currentElement;
        } else {
            // Start a new subarray
            result.push([...currentSubarray]);
            currentSubarray = [currentElement];
            currentSum = currentElement;
        }
    }

    // Add the last subarray
    if (currentSubarray.length > 0) {
        result.push([...currentSubarray]);
    }

    return result;
};

const inputN = prompt("Enter n: ");
const n = parseInt(inputN);

alert(JSON.stringify(divide(arr, n)));
