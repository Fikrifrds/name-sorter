const sorter = (originalArray) => {
	if (originalArray.length <= 1) { // exit condition to stop the recursion
		return originalArray;
    }
    
    const leftItems = [],
        rightItems = [],
        pivot = originalArray.pop();
        // choose pivot element (the last element of the array), and remove that element from the original Array

    for (const item of originalArray) { // iterate the array
        if (item <= pivot) { // compare value between each item in array and pivot
            leftItems.push(item); // put item in leftItems array if meet the condition
        } else {
            rightItems.push(item); // put item in rightItems array if doesn't meet the condition
        }
    }

    const result = [...sorter(leftItems), pivot, ...sorter(rightItems)];
    // run the sorter function again to sort the leftItems and the rightItems partition (recursion)

    return result;
}

module.exports = sorter;