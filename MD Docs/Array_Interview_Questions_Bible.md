
# Create the comprehensive markdown content with all array questions
md_content = '''# 🎯 Complete Array Mastery Guide

> **From Easy to Hard** - Your ultimate reference for array algorithms with examples, solutions, and LeetCode links.

---

## 📋 Table of Contents

- [🟢 Easy Level (1-50)](#-easy-level-1-50)
- [🟡 Medium Level (51-110)](#-medium-level-51-110)
- [🔴 Hard Level (111-150)](#-hard-level-111-150)

---

## 🟢 Easy Level (1-50)

*Perfect for warming up and building confidence with array manipulations.*

---

### 1. Find the length of an array without using .length

**Problem:** Calculate the number of elements in an array without using the built-in `.length` property.

**Example:**
```javascript
Input: [1, 2, 3, 4, 5]
Output: 5
```

**Solution:**
```javascript
function arrayLength(arr) {
    let count = 0;
    for (let i = 0; arr[i] !== undefined; i++) {
        count++;
    }
    return count;
}
```

**Approach:** 
- Initialize a counter and iterate through the array until you hit an undefined index.
- Increment the counter for each valid element found.

---

### 2. Access the first and last element of an array

**Problem:** Retrieve the first and last elements from an array.

**Example:**
```javascript
Input: [10, 20, 30, 40, 50]
Output: First: 10, Last: 50
```

**Solution:**
```javascript
function getFirstAndLast(arr) {
    return {
        first: arr[0],
        last: arr[arr.length - 1]
    };
}
```

**Approach:** 
- Use index `[0]` for the first element and index `[array.length - 1]` for the last.
- Handle empty array edge case by checking length first.

---

### 3. Check if an array contains a specific element

**Problem:** Determine if a value exists in the array.

**Example:**
```javascript
Input: arr = [1, 2, 3, 4, 5], target = 3
Output: true

Input: arr = [1, 2, 3, 4, 5], target = 10
Output: false
```

**Solution:**
```javascript
function containsElement(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return true;
    }
    return false;
}
```

**Approach:** 
- Iterate through each element and compare with the target value.
- Return true immediately when found, false if loop completes without finding it.

---

### 4. Find the index of a given element

**Problem:** Return the position of a specific element in the array.

**Example:**
```javascript
Input: arr = [10, 20, 30, 40], target = 30
Output: 2

Input: arr = [10, 20, 30, 40], target = 50
Output: -1
```

**Solution:**
```javascript
function findIndex(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}
```

**Approach:** 
- Loop through the array and return the index when the element matches the target.
- Return -1 if the element is not found after checking all positions.

---

### 5. Add an element to the end of the array

**Problem:** Append a new element to the end without using `.push()`.

**Example:**
```javascript
Input: arr = [1, 2, 3], element = 4
Output: [1, 2, 3, 4]
```

**Solution:**
```javascript
function addToEnd(arr, element) {
    arr[arr.length] = element;
    return arr;
}
```

**Approach:** 
- Place the new element at the index equal to the current array length.
- This naturally extends the array since indices are 0-based.

---

### 6. Add an element to the beginning of the array

**Problem:** Insert a new element at the start without using `.unshift()`.

**Example:**
```javascript
Input: arr = [2, 3, 4], element = 1
Output: [1, 2, 3, 4]
```

**Solution:**
```javascript
function addToBeginning(arr, element) {
    for (let i = arr.length; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = element;
    return arr;
}
```

**Approach:** 
- Shift all existing elements one position to the right to make room at index 0.
- Place the new element at the first position.

---

### 7. Remove the last element of an array

**Problem:** Delete the last element without using `.pop()`.

**Example:**
```javascript
Input: [1, 2, 3, 4, 5]
Output: [1, 2, 3, 4]
```

**Solution:**
```javascript
function removeLast(arr) {
    arr.length = arr.length - 1;
    return arr;
}
```

**Approach:** 
- Reduce the array length by 1, which automatically removes the last element.
- This works because JavaScript arrays are dynamic.

---

### 8. Remove the first element of an array

**Problem:** Delete the first element without using `.shift()`.

**Example:**
```javascript
Input: [1, 2, 3, 4, 5]
Output: [2, 3, 4, 5]
```

**Solution:**
```javascript
function removeFirst(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length = arr.length - 1;
    return arr;
}
```

**Approach:** 
- Shift all elements one position to the left to overwrite the first element.
- Decrease the array length by 1 to remove the duplicate last element.

---

### 9. Merge two arrays

**Problem:** Combine two arrays into a single array.

**Example:**
```javascript
Input: arr1 = [1, 2, 3], arr2 = [4, 5, 6]
Output: [1, 2, 3, 4, 5, 6]
```

**Solution:**
```javascript
function mergeArrays(arr1, arr2) {
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
        result[result.length] = arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        result[result.length] = arr2[i];
    }
    return result;
}
```

**Approach:** 
- Create a new array and add all elements from the first array, then all from the second.
- Alternatively, use the spread operator `[...arr1, ...arr2]` for a concise solution.

---

### 10. Copy an array without modifying the original

**Problem:** Create a duplicate array that doesn't reference the original.

**Example:**
```javascript
Input: [1, 2, 3]
Output: [1, 2, 3] (new independent array)
```

**Solution:**
```javascript
function copyArray(arr) {
    const copy = [];
    for (let i = 0; i < arr.length; i++) {
        copy[i] = arr[i];
    }
    return copy;
}
```

**Approach:** 
- Create a new array and manually copy each element from the source array.
- For nested arrays, use deep copy techniques like `JSON.parse(JSON.stringify(arr))`.

---

### 11. Reverse an array

**Problem:** Reverse the order of elements in the array.

**Example:**
```javascript
Input: [1, 2, 3, 4, 5]
Output: [5, 4, 3, 2, 1]
```

**Solution:**
```javascript
function reverseArray(arr) {
    const result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result[result.length] = arr[i];
    }
    return result;
}
```

**Approach:** 
- Iterate from the last index to the first and build a new array with those elements.
- Or use two-pointer technique to swap elements in-place.

---

### 12. Sort an array of numbers in ascending order

**Problem:** Arrange numbers from smallest to largest.

**Example:**
```javascript
Input: [64, 34, 25, 12, 22, 11, 90]
Output: [11, 12, 22, 25, 34, 64, 90]
```

**Solution:**
```javascript
function sortAscending(arr) {
    return arr.sort((a, b) => a - b);
}
```

**Approach:** 
- Use the built-in sort with a compare function `(a, b) => a - b` for numerical sorting.
- Without compare function, JavaScript sorts alphabetically which fails for numbers.

---

### 13. Sort an array of numbers in descending order

**Problem:** Arrange numbers from largest to smallest.

**Example:**
```javascript
Input: [64, 34, 25, 12, 22, 11, 90]
Output: [90, 64, 34, 25, 22, 12, 11]
```

**Solution:**
```javascript
function sortDescending(arr) {
    return arr.sort((a, b) => b - a);
}
```

**Approach:** 
- Use sort with compare function `(a, b) => b - a` to reverse the order.
- This puts larger numbers before smaller ones.

---

### 14. Sort an array of strings alphabetically

**Problem:** Arrange strings in A-Z order.

**Example:**
```javascript
Input: ["banana", "apple", "cherry", "date"]
Output: ["apple", "banana", "cherry", "date"]
```

**Solution:**
```javascript
function sortStringsAlphabetically(arr) {
    return arr.sort();
}
```

**Approach:** 
- Use the default `sort()` method which compares strings lexicographically.
- For case-insensitive sorting, use `(a, b) => a.toLowerCase().localeCompare(b.toLowerCase())`.

---

### 15. Sort an array of strings in reverse alphabetical order

**Problem:** Arrange strings in Z-A order.

**Example:**
```javascript
Input: ["apple", "banana", "cherry"]
Output: ["cherry", "banana", "apple"]
```

**Solution:**
```javascript
function sortStringsReverse(arr) {
    return arr.sort().reverse();
}
```

**Approach:** 
- First sort alphabetically, then reverse the array.
- Or use `sort((a, b) => b.localeCompare(a))` for a single-step solution.

---

### 16. Find the maximum number in an array

**Problem:** Identify the largest value in the array.

**Example:**
```javascript
Input: [3, 7, 2, 9, 1, 5]
Output: 9
```

**Solution:**
```javascript
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}
```

**Approach:** 
- Assume the first element is maximum, then iterate to find any larger values.
- Update the maximum whenever a bigger number is found.

---

### 17. Find the minimum number in an array

**Problem:** Identify the smallest value in the array.

**Example:**
```javascript
Input: [3, 7, 2, 9, 1, 5]
Output: 1
```

**Solution:**
```javascript
function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }
    return min;
}
```

**Approach:** 
- Assume the first element is minimum, then check each element for smaller values.
- Update the minimum whenever a smaller number is encountered.

---

### 18. Sum all elements in an array

**Problem:** Calculate the total of all array elements.

**Example:**
```javascript
Input: [1, 2, 3, 4, 5]
Output: 15
```

**Solution:**
```javascript
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
```

**Approach:** 
- Initialize a sum variable to 0 and add each element to it while iterating.
- Use `reduce((acc, curr) => acc + curr, 0)` for a functional approach.

---

### 19. Find the average of elements in an array

**Problem:** Calculate the mean value of array elements.

**Example:**
```javascript
Input: [10, 20, 30, 40, 50]
Output: 30
```

**Solution:**
```javascript
function findAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
```

**Approach:** 
- Sum all elements and divide by the total count of elements.
- Handle empty array case to avoid division by zero.

---

### 20. Check if all elements in an array are unique

**Problem:** Determine if the array contains no duplicate values.

**Example:**
```javascript
Input: [1, 2, 3, 4, 5]
Output: true

Input: [1, 2, 3, 2, 5]
Output: false
```

**Solution:**
```javascript
function areAllUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) return false;
        }
    }
    return true;
}
```

**Approach:** 
- Compare each element with every other element using nested loops.
- If any match is found, return false; otherwise return true after all checks.

---

### 21. Remove duplicates from an array

**Problem:** Create an array with only unique values.

**Example:**
```javascript
Input: [1, 2, 2, 3, 4, 4, 5]
Output: [1, 2, 3, 4, 5]
```

**Solution:**
```javascript
function removeDuplicates(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
```

**Approach:** 
- Build a new array and only add elements that haven't been added yet.
- Or use `Set` for a concise solution: `[...new Set(arr)]`.

---

### 22. Flatten a 2D array into a 1D array

**Problem:** Convert a nested array structure into a single-level array.

**Example:**
```javascript
Input: [[1, 2], [3, 4], [5, 6]]
Output: [1, 2, 3, 4, 5, 6]
```

**Solution:**
```javascript
function flattenArray(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            result.push(arr[i][j]);
        }
    }
    return result;
}
```

**Approach:** 
- Use nested loops to iterate through each sub-array and push elements to the result.
- Or use `arr.flat()` or `arr.reduce((acc, val) => acc.concat(val), [])`.

---

### 23. Chunk an array into smaller arrays of size k

**Problem:** Split an array into groups of specified size.

**Example:**
```javascript
Input: arr = [1, 2, 3, 4, 5, 6, 7, 8], k = 3
Output: [[1, 2, 3], [4, 5, 6], [7, 8]]
```

**Solution:**
```javascript
function chunkArray(arr, k) {
    const result = [];
    for (let i = 0; i < arr.length; i += k) {
        result.push(arr.slice(i, i + k));
    }
    return result;
}
```

**Approach:** 
- Iterate through the array in steps of k and slice chunks from the current position.
- The last chunk may be smaller if the array length isn't divisible by k.

---

### 24. Find the most frequent element in an array

**Problem:** Identify the element that appears most often.

**Example:**
```javascript
Input: [1, 3, 2, 1, 4, 1]
Output: 1
```

**Solution:**
```javascript
function mostFrequent(arr) {
    const frequency = {};
    let maxCount = 0;
    let maxElement = arr[0];
    
    for (let i = 0; i < arr.length; i++) {
        frequency[arr[i]] = (frequency[arr[i]] || 0) + 1;
        if (frequency[arr[i]] > maxCount) {
            maxCount = frequency[arr[i]];
            maxElement = arr[i];
        }
    }
    return maxElement;
}
```

**Approach:** 
- Count occurrences using a frequency map (object), then find the key with the highest count.
- Track the maximum count while building the frequency map for efficiency.

---

### 25. Count the occurrences of each element in an array

**Problem:** Create a frequency map of all elements.

**Example:**
```javascript
Input: ["a", "b", "a", "c", "b", "a"]
Output: { a: 3, b: 2, c: 1 }
```

**Solution:**
```javascript
function countOccurrences(arr) {
    const count = {};
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]] = (count[arr[i]] || 0) + 1;
    }
    return count;
}
```

**Approach:** 
- Use an object to store each element as a key and its count as the value.
- Increment the count each time the element is encountered.

---

### 26. Check if an array is empty

**Problem:** Determine if the array has no elements.

**Example:**
```javascript
Input: []
Output: true

Input: [1, 2, 3]
Output: false
```

**Solution:**
```javascript
function isArrayEmpty(arr) {
    return arr.length === 0;
}
```

**Approach:** 
- Simply check if the length property equals 0.
- An empty array is falsy in some contexts, but explicit length check is clearest.

---

### 27. Merge multiple arrays into one

**Problem:** Combine any number of arrays into a single array.

**Example:**
```javascript
Input: [1, 2], [3, 4], [5, 6]
Output: [1, 2, 3, 4, 5, 6]
```

**Solution:**
```javascript
function mergeMultipleArrays(...arrays) {
    const result = [];
    for (let arr of arrays) {
        for (let item of arr) {
            result.push(item);
        }
    }
    return result;
}
```

**Approach:** 
- Use rest parameters to accept any number of arrays, then concatenate them all.
- Or use `[].concat(...arrays)` or `arrays.flat()` for a concise solution.

---

### 28. Split an array into two halves

**Problem:** Divide an array into two roughly equal parts.

**Example:**
```javascript
Input: [1, 2, 3, 4, 5, 6]
Output: [[1, 2, 3], [4, 5, 6]]

Input: [1, 2, 3, 4, 5]
Output: [[1, 2, 3], [4, 5]]
```

**Solution:**
```javascript
function splitArray(arr) {
    const mid = Math.ceil(arr.length / 2);
    return [arr.slice(0, mid), arr.slice(mid)];
}
```

**Approach:** 
- Find the middle index using `Math.ceil` for odd lengths to put the extra element in the first half.
- Use slice to create two new arrays without modifying the original.

---

### 29. Remove falsy values from an array

**Problem:** Filter out false, 0, "", null, undefined, and NaN.

**Example:**
```javascript
Input: [0, 1, false, 2, "", 3, null, undefined, NaN, 4]
Output: [1, 2, 3, 4]
```

**Solution:**
```javascript
function removeFalsy(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) result.push(arr[i]);
    }
    return result;
}
```

**Approach:** 
- Use the truthiness check in an if statement to filter out all falsy values.
- In JavaScript: `0, "", false, null, undefined, NaN` are all falsy.

---

### 30. Swap two elements in an array

**Problem:** Exchange the positions of two elements by their indices.

**Example:**
```javascript
Input: arr = [1, 2, 3, 4, 5], i = 1, j = 3
Output: [1, 4, 3, 2, 5]
```

**Solution:**
```javascript
function swapElements(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}
```

**Approach:** 
- Use a temporary variable to hold one value while you swap the positions.
- Or use destructuring: `[arr[i], arr[j]] = [arr[j], arr[i]]`.

---

### 31. Rotate an array by k positions to the right

**Problem:** Shift elements to the right, with wrap-around.

**Example:**
```javascript
Input: arr = [1, 2, 3, 4, 5], k = 2
Output: [4, 5, 1, 2, 3]
```

**Solution:**
```javascript
function rotateRight(arr, k) {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
}
```

**Approach:** 
- Take the last k elements and place them at the front, append the remaining elements.
- Handle k > length by using modulo operator.

---

### 32. Rotate an array by k positions to the left

**Problem:** Shift elements to the left, with wrap-around.

**Example:**
```javascript
Input: arr = [1, 2, 3, 4, 5], k = 2
Output: [3, 4, 5, 1, 2]
```

**Solution:**
```javascript
function rotateLeft(arr, k) {
    k = k % arr.length;
    return arr.slice(k).concat(arr.slice(0, k));
}
```

**Approach:** 
- Remove the first k elements and append them to the end of the remaining array.
- Use modulo to handle cases where k exceeds array length.

---

### 33. Find the first element that satisfies a condition

**Problem:** Return the first element matching a predicate function.

**Example:**
```javascript
Input: arr = [1, 2, 3, 4, 5], condition = x => x > 3
Output: 4
```

**Solution:**
```javascript
function findFirst(arr, condition) {
    for (let i = 0; i < arr.length; i++) {
        if (condition(arr[i])) return arr[i];
    }
    return undefined;
}
```

**Approach:** 
- Iterate and apply the condition function to each element until one returns true.
- Return immediately when found, or undefined if no match.

---

### 34. Find the last element that satisfies a condition

**Problem:** Return the last element matching a predicate function.

**Example:**
```javascript
Input: arr = [1, 2, 3, 4, 5], condition = x => x > 3
Output: 5
```

**Solution:**
```javascript
function findLast(arr, condition) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (condition(arr[i])) return arr[i];
    }
    return undefined;
}
```

**Approach:** 
- Iterate backwards from the last element until the condition is satisfied.
- This finds the last occurrence without checking all elements unnecessarily.

---

### 35. Remove elements at a specific index

**Problem:** Delete an element at a given position.

**Example:**
```javascript
Input: arr = [1, 2, 3, 4, 5], index = 2
Output: [1, 2, 4, 5]
```

**Solution:**
```javascript
function removeAtIndex(arr, index) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i !== index) result.push(arr[i]);
    }
    return result;
}
```

**Approach:** 
- Build a new array excluding the element at the specified index.
- Or use `arr.splice(index, 1)` to modify in-place, or `arr.filter((_, i) => i !== index)`.

---

### 36. Replace elements at a specific index

**Problem:** Change the value at a specific position.

**Example:**
```javascript
Input: arr = [1, 2, 3, 4, 5], index = 2, value = 10
Output: [1, 2, 10, 4, 5]
```

**Solution:**
```javascript
function replaceAtIndex(arr, index, value) {
    arr[index] = value;
    return arr;
}
```

**Approach:** 
- Directly assign the new value to the specified index.
- For immutable approach, use slice and spread: `[...arr.slice(0, index), value, ...arr.slice(index + 1)]`.

---

### 37. Filter out even numbers from an array

**Problem:** Remove all even numbers, keep only odd.

**Example:**
```javascript
Input: [1, 2, 3, 4, 5, 6]
Output: [1, 3, 5]
```

**Solution:**
```javascript
function filterOutEven(arr) {
    return arr.filter(x => x % 2 !== 0);
}
```

**Approach:** 
- Use modulo operator `%` to check if remainder when divided by 2 is not 0.
- Keep only elements where `x % 2 !== 0` (odd numbers).

---

### 38. Filter out odd numbers from an array

**Problem:** Remove all odd numbers, keep only even.

**Example:**
```javascript
Input: [1, 2, 3, 4, 5, 6]
Output: [2, 4, 6]
```

**Solution:**
```javascript
function filterOutOdd(arr) {
    return arr.filter(x => x % 2 === 0);
}
```

**Approach:** 
- Use modulo operator to check if remainder when divided by 2 equals 0.
- Keep only elements where `x % 2 === 0` (even numbers).

---

### 39. Find all even numbers in an array

**Problem:** Return a new array with only even numbers.

**Example:**
```javascript
Input: [1, 2, 3, 4, 5, 6, 7, 8]
Output: [2, 4, 6, 8]
```

**Solution:**
```javascript
function findAllEven(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) result.push(arr[i]);
    }
    return result;
}
```

**Approach:** 
- Check each element with `num % 2 === 0` and collect matches in a new array.
- This is the same logic as filtering out odd numbers.

---

### 40. Find all odd numbers in an array

**Problem:** Return a new array with only odd numbers.

**Example:**
```javascript
Input: [1, 2, 3, 4, 5, 6, 7, 8]
Output: [1, 3, 5, 7]
```

**Solution:**
```javascript
function findAllOdd(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) result.push(arr[i]);
    }
    return result;
}
```

**Approach:** 
- Check each element with `num % 2 !== 0` and collect matches in a new array.
- This is the same logic as filtering out even numbers.

---

### 41. Find all positive numbers in an array

**Problem:** Return only numbers greater than zero.

**Example:**
```javascript
Input: [-2, -1, 0, 1, 2, 3]
Output: [1, 2, 3]
```

**Solution:**
```javascript
function findAllPositive(arr) {
    return arr.filter(x => x > 0);
}
```

**Approach:** 
- Use simple comparison `x > 0` to filter positive numbers.
- Note: This excludes zero as it's not positive.

---

### 42. Find all negative numbers in an array

**Problem:** Return only numbers less than zero.

**Example:**
```javascript
Input: [-3, -2, -1, 0, 1, 2]
Output: [-3, -2, -1]
```

**Solution:**
```javascript
function findAllNegative(arr) {
    return arr.filter(x => x < 0);
}
```

**Approach:** 
- Use comparison `x < 0` to filter negative numbers.
- Zero is neither positive nor negative, so it's excluded.

---

### 43. Find the sum of positive numbers only

**Problem:** Calculate total of all positive values.

**Example:**
```javascript
Input: [-1, 2, -3, 4, -5, 6]
Output: 12
```

**Solution:**
```javascript
function sumPositive(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) sum += arr[i];
    }
    return sum;
}
```

**Approach:** 
- Iterate through the array and add to sum only when the element is positive.
- Combine filtering and summing in a single pass for efficiency.

---

### 44. Find the sum of negative numbers only

**Problem:** Calculate total of all negative values.

**Example:**
```javascript
Input: [-1, 2, -3, 4, -5, 6]
Output: -9
```

**Solution:**
```javascript
function sumNegative(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) sum += arr[i];
    }
    return sum;
}
```

**Approach:** 
- Iterate and add to sum only when the element is negative.
- The result will be negative (or zero if no negatives exist).

---

### 45. Reverse each element in an array of strings

**Problem:** Reverse the characters in each string.

**Example:**
```javascript
Input: ["abc", "def", "ghi"]
Output: ["cba", "fed", "ihg"]
```

**Solution:**
```javascript
function reverseEachString(arr) {
    return arr.map(str => str.split('').reverse().join(''));
}
```

**Approach:** 
- For each string, split into characters, reverse the array, then join back together.
- Use `map` to apply this transformation to every element.

---

### 46. Convert all strings in an array to uppercase

**Problem:** Transform every string to uppercase letters.

**Example:**
```javascript
Input: ["hello", "world"]
Output: ["HELLO", "WORLD"]
```

**Solution:**
```javascript
function toUpperCaseArray(arr) {
    return arr.map(str => str.toUpperCase());
}
```

**Approach:** 
- Use the built-in `toUpperCase()` method on each string element.
- `map` creates a new array without modifying the original.

---

### 47. Convert all strings in an array to lowercase

**Problem:** Transform every string to lowercase letters.

**Example:**
```javascript
Input: ["HELLO", "WORLD"]
Output: ["hello", "world"]
```

**Solution:**
```javascript
function toLowerCaseArray(arr) {
    return arr.map(str => str.toLowerCase());
}
```

**Approach:** 
- Use the built-in `toLowerCase()` method on each string element.
- Similar to uppercase conversion but in the opposite direction.

---

### 48. Join all elements into a string with a separator

**Problem:** Combine array elements into a single string.

**Example:**
```javascript
Input: arr = ["apple", "banana", "cherry"], separator = " - "
Output: "apple - banana - cherry"
```

**Solution:**
```javascript
function joinWithSeparator(arr, separator) {
    return arr.join(separator);
}
```

**Approach:** 
- Use the `join(separator)` method which concatenates all elements with the separator between them.
- Default separator is comma if not specified.

---

### 49. Split a string into an array using a separator

**Problem:** Break a string into an array of substrings.

**Example:**
```javascript
Input: str = "apple,banana,cherry", separator = ","
Output: ["apple", "banana", "cherry"]
```

**Solution:**
```javascript
function splitString(str, separator) {
    return str.split(separator);
}
```

**Approach:** 
- Use the `split(separator)` method to divide the string at each separator occurrence.
- If separator is empty string `''`, splits into individual characters.

---

### 50. Check if an array includes a given value

**Problem:** Determine if a value exists in the array (similar to #3).

**Example:**
```javascript
Input: arr = [1, 2, 3, 4, 5], value = 3
Output: true
```

**Solution:**
```javascript
function includesValue(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return true;
    }
    return false;
}
```

**Approach:** 
- Linear search through the array looking for the target value.
- Return true immediately when found for efficiency.

---

## 🟡 Medium Level (51-110)

*Building algorithmic thinking with classic interview problems.*

---

### 51. Find the second largest number in an array

**Problem:** Identify the second highest value.

**Example:**
```javascript
Input: [10, 20, 4, 45, 99]
Output: 45
```

**Solution:**
```javascript
function secondLargest(arr) {
    let first = -Infinity, second = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] !== first) {
            second = arr[i];
        }
    }
    return second;
}
```

**Approach:** 
- just reverse the sign < and do Infinity from largest.

---

### 52. Find the second smallest number in an array

**Problem:** Identify the second lowest value.

**Example:**
```javascript
Input: [10, 20, 4, 45, 99]
Output: 10
```

**Solution:**
```javascript
const secondSmallest = (arr) => {
    let firstNo = Infinity;
    let secondNo = Infinity;

    for (let i of arr) {
        if (i < firstNo) {
            secondNo = firstNo;
            firstNo = i;
        } else if (i < secondNo && i !== firstNo) {
            secondNo = i;
        }
    }

    return secondNo === Infinity ? null : secondNo;
};

let arr = [5, 1, 9, 3, 8, 7, 6];
console.log(secondSmallest(arr));
```

**Approach:** 
- Track smallest and second smallest, similar to second largest logic but with comparisons reversed.
- Initialize with Infinity to ensure any array value will be smaller.

---

### 53. Find the kth largest number in an array

**Problem:** Find the element that would be at position k if sorted in descending order.

**Example:**
```javascript
Input: arr = [3, 2, 1, 5, 6, 4], k = 2
Output: 5
```

**Solution:**
```javascript
function kthLargest(arr, k) {
    const sorted = [...arr].sort((a, b) => b - a);
    return sorted[k - 1];
}
```

**Approach:** 
- Sort the array in descending order and pick the element at index k-1.
- For O(n) solution, use QuickSelect algorithm (similar to quicksort).

**LeetCode:** [215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)

---

### 54. Find the kth smallest number in an array

**Problem:** Find the element that would be at position k if sorted in ascending order.

**Example:**
```javascript
Input: arr = [3, 2, 1, 5, 6, 4], k = 2
Output: 2
```

**Solution:**
```javascript
function kthSmallest(arr, k) {
    const sorted = [...arr].sort((a, b) => a - b);
    return sorted[k - 1];
}
```

**Approach:** 
- Sort in ascending order and access the k-1 index.
- QuickSelect can achieve O(n) average time complexity.

---

### 55. Find the longest increasing subarray

**Problem:** Find the longest contiguous sequence where each element is greater than the previous.

**Example:**
```javascript
Input: [1, 2, 3, 1, 2, 3, 4, 5]
Output: [1, 2, 3, 4, 5] (length 5)
```

**Solution:**
```javascript
function longestIncreasingSubarray(arr) {
    let maxStart = 0, maxLen = 1;
    let currStart = 0;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) {
            currStart = i;
        }
        const currLen = i - currStart + 1;
        if (currLen > maxLen) {
            maxLen = currLen;
            maxStart = currStart;
        }
    }
    return arr.slice(maxStart, maxStart + maxLen);
}
```

**Approach:** 
- Track the start of current increasing sequence and update max length when sequence breaks.
- Use sliding window technique to find the longest valid window.

---

### 56. Find the longest decreasing subarray

**Problem:** Find the longest contiguous sequence where each element is smaller than the previous.

**Example:**
```javascript
Input: [5, 4, 3, 2, 1, 2, 1]
Output: [5, 4, 3, 2, 1] (length 5)
```

**Solution:**
```javascript
function longestDecreasingSubarray(arr) {
    let maxStart = 0, maxLen = 1;
    let currStart = 0;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= arr[i - 1]) {
            currStart = i;
        }
        const currLen = i - currStart + 1;
        if (currLen > maxLen) {
            maxLen = currLen;
            maxStart = currStart;
        }
    }
    return arr.slice(maxStart, maxStart + maxLen);
}
```

**Approach:** 
- Similar to increasing subarray but check if current element is less than previous.
- Reset window start when the decreasing trend breaks.

---

### 57. Find the longest subarray with all equal elements

**Problem:** Find the longest sequence of identical values.

**Example:**
```javascript
Input: [1, 2, 2, 2, 3, 3, 4, 4, 4, 4]
Output: [4, 4, 4, 4] (length 4)
```

**Solution:**
```javascript
function longestEqualSubarray(arr) {
    let maxStart = 0, maxLen = 1;
    let currStart = 0;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            currStart = i;
        }
        const currLen = i - currStart + 1;
        if (currLen > maxLen) {
            maxLen = currLen;
            maxStart = currStart;
        }
    }
    return arr.slice(maxStart, maxStart + maxLen);
}
```

**Approach:** 
- Track when the value changes and measure the length of each constant-value run.
- Keep track of the longest run seen so far.

---

### 58. Find the missing number in an array of 1 to n

**Problem:** Given numbers 1 to n with one missing, find the missing number.

**Example:**
```javascript
Input: [1, 2, 4, 5, 6] (n = 6)
Output: 3
```

**Solution:**
```javascript
function findMissingNumber(arr, n) {
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((a, b) => a + b, 0);
    return expectedSum - actualSum;
}
```

**Approach:** 
- Calculate expected sum of 1 to n using formula n*(n+1)/2, subtract actual sum to find missing.
- Alternative: Use XOR to find missing number without overflow concerns.

**LeetCode:** [268. Missing Number](https://leetcode.com/problems/missing-number/)

---

### 59. Find all missing numbers in an array of 1 to n

**Problem:** Given numbers 1 to n with multiple missing, find all missing numbers.

**Example:**
```javascript
Input: [4, 3, 2, 7, 8, 2, 3, 1] (n = 8)
Output: [5, 6]
```

**Solution:**
```javascript
function findAllMissing(arr, n) {
    const missing = [];
    const set = new Set(arr);
    for (let i = 1; i <= n; i++) {
        if (!set.has(i)) missing.push(i);
    }
    return missing;
}
```

**Approach:** 
- Use a Set for O(1) lookups and check which numbers from 1 to n are not present.
- Or mark indices as negative to indicate presence (O(1) space).

**LeetCode:** [448. Find All Numbers Disappeared in an Array](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/)

---

### 60. Find duplicates in an array

**Problem:** Identify all values that appear more than once.

**Example:**
```javascript
Input: [4, 3, 2, 7, 8, 2, 3, 1]
Output: [2, 3]
```

**Solution:**
```javascript
function findDuplicates(arr) {
    const seen = new Set();
    const duplicates = new Set();
    
    for (let num of arr) {
        if (seen.has(num)) {
            duplicates.add(num);
        } else {
            seen.add(num);
        }
    }
    return [...duplicates];
}
```

**Approach:** 
- Use a Set to track seen numbers, add to duplicates when encountering a number already seen.
- This maintains O(n) time complexity.

**LeetCode:** [442. Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/)

---

### 61. Find elements that appear only once

**Problem:** Identify values that appear exactly once in the array.

**Example:**
```javascript
Input: [2, 3, 2, 4, 5, 3]
Output: [4, 5]
```

**Solution:**
```javascript
function findUniqueElements(arr) {
    const frequency = {};
    for (let num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;
    }
    return arr.filter(num => frequency[num] === 1);
}
```

**Approach:** 
- Count frequencies first, then filter the array for elements with count exactly 1.
- Or use XOR for finding a single unique element in O(1) space.

---

### 62. Count the number of even and odd numbers

**Problem:** Return counts of even and odd numbers separately.

**Example:**
```javascript
Input: [1, 2, 3, 4, 5, 6]
Output: { even: 3, odd: 3 }
```

**Solution:**
```javascript
function countEvenOdd(arr) {
    let even = 0, odd = 0;
    for (let num of arr) {
        if (num % 2 === 0) even++;
        else odd++;
    }
    return { even, odd };
}
```

**Approach:** 
- Single pass through array, increment appropriate counter based on num % 2 result.
- Return as object or array with both counts.

---

### 63. Find the sum of odd numbers

**Problem:** Calculate total of all odd values in the array.

**Example:**
```javascript
Input: [1, 2, 3, 4, 5, 6]
Output: 9
```

**Solution:**
```javascript
function sumOddNumbers(arr) {
    return arr.filter(x => x % 2 !== 0).reduce((a, b) => a + b, 0);
}
```

**Approach:** 
- Filter for odd numbers and sum them, or do it in a single loop for efficiency.
- Check `num % 2 !== 0` to identify odd numbers.

---

### 64. Find the sum of even numbers

**Problem:** Calculate total of all even values in the array.

**Example:**
```javascript
Input: [1, 2, 3, 4, 5, 6]
Output: 12
```

**Solution:**
```javascript
function sumEvenNumbers(arr) {
    return arr.filter(x => x % 2 === 0).reduce((a, b) => a + b, 0);
}
```

**Approach:** 
- Filter for even numbers and sum them, or use a single loop.
- Check `num % 2 === 0` to identify even numbers.

---

### 65. Reverse an array without using built-in methods

**Problem:** Manually reverse the array without `.reverse()`.

**Example:**
```javascript
Input: [1, 2, 3, 4, 5]
Output: [5, 4, 3, 2, 1]
```

**Solution:**
```javascript
function reverseManual(arr) {
    const result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}
```

**Approach:** 
- Create new array and push elements from the end to the start.
- Or use two-pointer technique to swap in-place without extra space.

---

### 66. Find the maximum sum subarray (Kadane's algorithm)

**Problem:** Find the contiguous subarray with the largest sum.

**Example:**
```javascript
Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
Output: 6 (subarray [4, -1, 2, 1])
```

**Solution:**
```javascript
function maxSubArraySum(arr) {
    let maxSoFar = arr[0];
    let currentMax = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        currentMax = Math.max(arr[i], currentMax + arr[i]);
        maxSoFar = Math.max(maxSoFar, currentMax);
    }
    return maxSoFar;
}
```

**Approach:** 
- At each position, decide whether to start new subarray or extend existing one based on which gives higher sum.
- Track global maximum throughout the iteration.

**LeetCode:** [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)

---

### 67. Find the maximum product subarray

**Problem:** Find the contiguous subarray with the largest product.

**Example:**
```javascript
Input: [2, 3, -2, 4]
Output: 6 (subarray [2, 3])

Input: [-2, 0, -1]
Output: 0
```

**Solution:**
```javascript
function maxProductSubarray(arr) {
    let maxSoFar = arr[0];
    let currentMax = arr[0];
    let currentMin = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        const temp = currentMax;
        currentMax = Math.max(arr[i], Math.max(currentMax * arr[i], currentMin * arr[i]));
        currentMin = Math.min(arr[i], Math.min(temp * arr[i], currentMin * arr[i]));
        maxSoFar = Math.max(maxSoFar, currentMax);
    }
    return maxSoFar;
}
```

**Approach:** 
- Track both max and min ending at current position since a negative number can turn min into max.
- Update both extremes at each step and track global maximum.

**LeetCode:** [152. Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/)

---

### 68. Move all zeros to the end of an array

**Problem:** Shift all zeros to the end while maintaining relative order of non-zero elements.

**Example:**
```javascript
Input: [0, 1, 0, 3, 12]
Output: [1, 3, 12, 0, 0]
```

**Solution:**
```javascript
function moveZerosToEnd(arr) {
    let nonZeroIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[nonZeroIndex++] = arr[i];
        }
    }
    for (let i = nonZeroIndex; i < arr.length; i++) {
        arr[i] = 0;
    }
    return arr;
}
```

**Approach:** 
- Use two pointers: one to iterate, one to place non-zero elements at the front.
- Fill remaining positions with zeros after placing all non-zero elements.

**LeetCode:** [283. Move Zeroes](https://leetcode.com/problems/move-zeroes/)

---

### 69. Move all zeros to the beginning of an array

**Problem:** Shift all zeros to the start while maintaining relative order of non-zero elements.

**Example:**
```javascript
Input: [0, 1, 0, 3, 12]
Output: [0, 0, 1, 3, 12]
```

**Solution:**
```javascript
function moveZerosToBeginning(arr) {
    let result = [];
    let zeroCount = 0;
    
    for (let num of arr) {
        if (num === 0) zeroCount++;
        else result.push(num);
    }
    
    return new Array(zeroCount).fill(0).concat(result);
}
```

**Approach:** 
- Count zeros and collect non-zero elements separately, then concatenate.
- Or iterate from end and use similar two-pointer approach in reverse.

---


# Continue from question 71 onwards with proper formatting and collapsible solutions

content = """
---

### 🟡 **71. Separate Positive and Negative Numbers**
**Problem:** Rearrange array so all negative numbers come before positive ones.

**Example:**
- **Input:** `[3, -1, -4, 2, 0, -5]`
- **Output:** `[-1, -4, -5, 3, 2, 0]` (order doesn't matter)

**LeetCode:** [Sort Colors (Variation)](https://leetcode.com/problems/sort-colors/)

**💡 2-Line Approach:**
Use two-pointer technique: left pointer for negatives, right for positives, swap when left sees positive and right sees negative.

<details>
<summary><b>📝 Click to View Solution</b></summary>

```javascript
function separatePosNeg(arr) {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        while (left < right && arr[left] < 0) left++;
        while (left < right && arr[right] >= 0) right--;
        if (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++; right--;
        }
    }
    return arr;
}
```
</details>

---

# Continue from Question 71 onwards with collapsible solutions
content = '''
---

### 🟡 **71. Rotate a Matrix 90 Degrees Clockwise** 
**LeetCode:** [48. Rotate Image](https://leetcode.com/problems/rotate-image/)  
**Approach:** Transpose the matrix first, then reverse each row. This effectively rotates the matrix 90° clockwise.

**Example:**
```
Input:  [[1,2,3],
         [4,5,6],
         [7,8,9]]
Output: [[7,4,1],
         [8,5,2],
         [9,6,3]]
```

<details>
<summary>💡 Click to View Solution</summary>

**JavaScript:**
```javascript
function rotate(matrix) {
    const n = matrix.length;
    // Transpose
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    // Reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
    return matrix;
}
```
</details>

---


# Continue from Question 71 onwards with collapsible solutions
content = '''
---

### 🟡 **71. Rotate a Matrix 90 Degrees Clockwise** 
**LeetCode:** [48. Rotate Image](https://leetcode.com/problems/rotate-image/)  
**Approach:** Transpose the matrix first, then reverse each row. This effectively rotates the matrix 90° clockwise.

**Example:**
```
Input:  [[1,2,3],
         [4,5,6],
         [7,8,9]]
Output: [[7,4,1],
         [8,5,2],
         [9,6,3]]
```

<details>
<summary>💡 Click to View Solution</summary>

**JavaScript:**
```javascript
function rotate(matrix) {
    const n = matrix.length;
    // Transpose
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    // Reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
    return matrix;
}
```
</details>

---

### 🟡 **72. Rotate a Matrix 90 Degrees Counter-Clockwise**
**Approach:** Transpose the matrix first, then reverse each column (or reverse each row first, then transpose).

**Example:**
```
Input:  [[1,2,3],
         [4,5,6],
         [7,8,9]]
Output: [[3,6,9],
         [2,5,8],
         [1,4,7]]
```

<details>
<summary>💡 Click to View Solution</summary>

**JavaScript:**
```javascript
function rotateCounterClockwise(matrix) {
    const n = matrix.length;
    // Transpose
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    // Reverse each column (by reversing the order of rows)
    for (let j = 0; j < n; j++) {
        for (let i = 0; i < n / 2; i++) {
            [matrix[i][j], matrix[n - 1 - i][j]] = [matrix[n - 1 - i][j], matrix[i][j]];
        }
    }
    return matrix;
}
```
</details>

---

### 🟡 **73. Transpose a Matrix**
**LeetCode:** [867. Transpose Matrix](https://leetcode.com/problems/transpose-matrix/)  
**Approach:** Create a new matrix where rows become columns and columns become rows. For element at (i,j) in original, place it at (j,i) in result.

**Example:**
```
Input:  [[1,2,3],
         [4,5,6]]
Output: [[1,4],
         [2,5],
         [3,6]]
```

<details>
<summary>💡 Click to View Solution</summary>

**JavaScript:**
```javascript
function transpose(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const result = [];
    
    for (let j = 0; j < cols; j++) {
        result[j] = [];
        for (let i = 0; i < rows; i++) {
            result[j][i] = matrix[i][j];
        }
    }
    return result;
}
```
</details>

---

### 🟡 **74. Find the Row with Maximum Sum in 2D Array**
**Approach:** Iterate through each row, calculate sum, track the maximum sum and its row index.

**Example:**
```
Input:  [[1,2,3],
         [4,5,6],
         [1,1,1]]
Output: Row 1 (sum = 15)
```

<details>
<summary>💡 Click to View Solution</summary>

**JavaScript:**
```javascript
function maxSumRow(matrix) {
    let maxSum = -Infinity;
    let maxRow = 0;
    
    for (let i = 0; i < matrix.length; i++) {
        const sum = matrix[i].reduce((a, b) => a + b, 0);
        if (sum > maxSum) {
            maxSum = sum;
            maxRow = i;
        }
    }
    return { row: maxRow, sum: maxSum };
}
```
</details>

---

### 🟡 **75. Find the Column with Maximum Sum in 2D Array**
**Approach:** For each column index, iterate through all rows to calculate column sum, track maximum.

**Example:**
```
Input:  [[1,2,3],
         [4,5,6],
         [7,8,9]]
Output: Column 2 (sum = 18)
```

<details>
<summary>💡 Click to View Solution</summary>

**JavaScript:**
```javascript
function maxSumColumn(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let maxSum = -Infinity;
    let maxCol = 0;
    
    for (let j = 0; j < cols; j++) {
        let sum = 0;
        for (let i = 0; i < rows; i++) {
            sum += matrix[i][j];
        }
        if (sum > maxSum) {
            maxSum = sum;
            maxCol = j;
        }
    }
    return { col: maxCol, sum: maxSum };
}
```
</details>

---

### 🟡 **76. Find All Pairs with a Given Sum**
**LeetCode:** [1. Two Sum](https://leetcode.com/problems/two-sum/) | [167. Two Sum II](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)  
**Approach:** Use a hash map to store complements (target - current). If current exists in map, we found a pair.

**Example:**
```
Input:  [1, 5, 7, -1, 5], target = 6
Output: [[1, 5], [7, -1], [1, 5]] (pairs at indices)
```

<details>
<summary>💡 Click to View Solution</summary>

**JavaScript:**
```javascript
function findPairs(arr, target) {
    const pairs = [];
    const map = new Map();
    
    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        if (map.has(complement)) {
            pairs.push([complement, arr[i]]);
        }
        map.set(arr[i], i);
    }
    return pairs;
}
```
</details>

---

### 🟡 **77. Count All Pairs with a Given Sum**
**Approach:** Same as above, but just count instead of storing pairs. Use hash map for O(n) efficiency.

**Example:**
```
Input:  [1, 5, 7, -1, 5], target = 6
Output: 3
```

<details>
<summary>💡 Click to View Solution</summary>

**JavaScript:**
```javascript
function countPairs(arr, target) {
    let count = 0;
    const map = new Map();
    
    for (let num of arr) {
        const complement = target - num;
        if (map.has(complement)) {
            count += map.get(complement);
        }
        map.set(num, (map.get(num) || 0) + 1);
    }
    return count;
}
```
</details>

---

### 🟡 **78. Find a Subarray with a Given Sum**
**Approach:** Use sliding window with two pointers. Expand window by moving right, shrink by moving left when sum exceeds target.

**Example:**
```
Input:  [1, 4, 20, 3, 10, 5], target = 33
Output: [20, 3, 10] (indices 2 to 4)
```

<details>
<summary>💡 Click to View Solution</summary>

**JavaScript:**
```javascript
function subarrayWithSum(arr, target) {
    let start = 0;
    let currentSum = 0;
    
    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];
        
        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }
        
        if (currentSum === target) {
            return arr.slice(start, end + 1);
        }
    }
    return null;
}
```
</details>

---

### 🟡 **79. Count Subarrays with Sum Equal to K**
**LeetCode:** [560. Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)  
**Approach:** Use prefix sum with hash map. Count how many times (prefixSum - k) has occurred before current index.

**Example:**
```
Input:  [1, 1, 1], k = 2
Output: 2  // [1,1] at indices 0-1 and 1-2
```

<details>
<summary>💡 Click to View Solution</summary>

**JavaScript:**
```javascript
function subarraySum(arr, k) {
    let count = 0;
    let prefixSum = 0;
    const map = new Map();
    map.set(0, 1); // Empty subarray
    
    for (let num of arr) {
        prefixSum += num;
        if (map.has(prefixSum - k)) {
            count += map.get(prefixSum - k);
        }
        map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    }
    return count;
}
```
</details>

---

### 🟡 **80. Find the Union of Two Arrays**
**Approach:** Use a Set to store unique elements from both arrays, then convert back to array.

**Example:**
```
Input:  [1, 2, 3, 4], [3, 4, 5, 6]
Output: [1, 2, 3, 4, 5, 6]
```

<details>
<summary>💡 Click to View Solution</summary>

**JavaScript:**
```javascript
function union(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}
```
</details>

---

### 🟡 **81. Find the Intersection of Two Arrays**
**LeetCode:** [349. Intersection of Two Arrays](https://leetcode.com/problems/intersection-of-two-arrays/)  
**Approach:** Use a Set for one array, filter second array checking if element exists in Set.

**Example:**
```
Input:  [1, 2, 2, 3], [2, 2, 4]
Output: [2]
```

<details>
<summary>💡 Click to View Solution</summary>

**JavaScript:**
```javascript
function intersection(arr1, arr2) {
    const set = new Set(arr1);
    return [...new Set(arr2.filter(x => set.has(x)))];
}
```
</details>

---

### 🟡 **82. Find the Difference Between Two Arrays**
**Approach:** Elements in arr1 not in arr2. Use Set for O(1) lookup.

**Example:**
```
Input:  [1, 2, 3, 4], [2, 4]
Output: [1, 3]
```

<details>
<summary>💡 Click to View Solution</summary>

**JavaScript:**
```javascript
function difference(arr1, arr2) {
    const set2 = new Set(arr2);
    return arr1.filter(x => !set2.has(x));
}
```
</details>

---

### 🟡 **83. Find Common Elements Among Three Arrays**
**Approach:** Use Set intersection logic iteratively - find intersection of first two, then intersect result with third.

**Example:**
```
Input:  [1, 5, 10], [2, 5, 10], [3, 5, 10]
Output: [5, 10]
```

<details>
<summary>💡 Click to View Solution</summary>

**JavaScript:**
```javascript
function commonInThree(arr1, arr2, arr3) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    return arr3.filter(x => set1.has(x) && set2.has(x));
}
```
</details>

---

### 🟡 **84. Sort an Array of 0s, 1s, and 2s (Dutch National Flag)**
**LeetCode:** [75. Sort Colors](https://leetcode.com/problems/sort-colors/)  
**Approach:** Three-pointer technique. Low tracks 0s, mid explores, high tracks 2s. Swap elements to correct positions.

**Example:**
```
Input:  [2, 0, 2, 1, 1, 0]
Output: [0, 0, 1, 1, 2, 2]
```

<details>
<summary>💡 Click to View Solution</summary>

**JavaScript:**
```javascript
function sortColors(arr) {
    let low = 0, mid = 0, high = arr.length - 1;
    
    while (mid <= high) {
        if (arr[mid] === 0) {
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        } else if (arr[mid] === 1) {
            mid++;
        } else {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }
    return arr;
}
```
</details>

---

### 🟡 **85. Check if Array is Sorted in Ascending Order**
**Approach:** Linear scan comparing each element with next. If any element > next, return false.

**Example:**
```
Input:  [1, 2, 3, 4, 5]
Output: true

Input:  [1, 3, 2, 4]
Output: false
```

<details>
<summary>💡 Click to View Solution</summary>

**JavaScript:**
```javascript
function isSortedAscending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) return false;
    }
    return true;
}
```
</details>

---

### 🟡 **86. Check if Array is Sorted in Descending Order**
**Approach:** Linear scan comparing each element with next. If any element < next, return false.

**Example:**
```
Input:  [5, 4, 3, 2, 1]
Output: true
```

<details>
<summary>💡 Click to View Solution</summary>

**JavaScript:**
```javascript
function isSortedDescending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) return false;
    }
    return true;
}
```
</details>

---

### 🟡 **87. Find Maximum Difference Between Two Elements (Larger Comes After Smaller)**
**LeetCode:** [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)  
**Approach:** Track minimum element so far. At each step, calculate difference with current element, update max difference.

**Example:**
```
Input:  [7, 1, 5, 3, 6, 4]
Output: 5  // Buy at 1, sell at 6
```

<details>
<summary>💡 Click to View Solution</summary>

**JavaScript:**
```javascript
function maxDifference(arr) {
    let minSoFar = arr[0];
    let maxDiff = 0;
    
    for (let i = 1; i < arr.length; i++) {
        maxDiff = Math.max(maxDiff, arr[i] - minSoFar);
        minSoFar = Math.min(minSoFar, arr[i]);
    }
    return maxDiff;
}
```
</details>

---

### 🟡 **88. Find Leaders in an Array**
**Approach:** Traverse from right to left. Track maximum seen so far. If current > max, it's a leader.

**Example:**
```
Input:  [16, 17, 4, 3, 5, 2]
Output: [17, 5, 2]  // Elements greater than all to their right
```

<details>
<summary>💡 Click to View Solution</summary>

**JavaScript:**
```javascript
function findLeaders(arr) {
    const leaders = [];
    let maxFromRight = -Infinity;
    
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > maxFromRight) {
            leaders.unshift(arr[i]);
            maxFromRight = arr[i];
        }
    }
    return leaders;
}
```
</details>

---

### 🟡 **89. Find Peak Element**
**LeetCode:** [162. Find Peak Element](https://leetcode.com/problems/find-peak-element/)  
**Approach:** Binary search. If mid is peak (greater than neighbors), return it. Otherwise, move to the half with greater neighbor.

**Example:**
```
Input:  [1, 2, 3, 1]
Output: 2  // Index of peak element 3
```

<details>
<summary>💡 Click to View Solution</summary>

**JavaScript:**
```javascript
function findPeakElement(arr) {
    let left = 0, right = arr.length - 1;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] > arr[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}
```
</details>

---

### 🟡 **90. Find Valley Element**
**Approach:** Similar to peak finding. Binary search - move towards the direction where neighbor is smaller.

**Example:**
```
Input:  [5, 4, 3, 2, 3, 4]
Output: 3  // Index of valley element 2
```

<details>
<summary>💡 Click to View Solution</summary>

**JavaScript:**
```javascript
function findValleyElement(arr) {
    let left = 0, right = arr.length - 1;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] < arr[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}
```
</details>

---

### 🟡 **91. Count Inversion Pairs**
**Approach:** Modified Merge Sort. Count inversions during merge step - when left element > right element, all remaining left elements form inversions.

**Example:**
```
Input:  [2, 4, 1, 3, 5]
Output: 3  // (2,1), (4,1), (4,3)
```

<details>
<summary>💡 Click to View Solution</summary>

**JavaScript:**
```javascript
function countInversions(arr) {
    let count = 0;
    
    function mergeSort(arr) {
        if (arr.length <= 1) return arr;
        const mid = Math.floor(arr.length / 2);
        const left = mergeSort(arr.slice(0, mid));
        const right = mergeSort(arr.slice(mid));
        return merge(left, right);
    }
    
    function merge(left, right) {
        const result = [];
        let i = 0, j = 0;
        
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                result.push(left[i++]);
            } else {
                result.push(right[j++]);
                count += left.length - i; // All remaining left elements form inversions
            }
        }
        return result.concat(left.slice(i)).concat(right.slice(j));
    }
    
    mergeSort(arr);
    return count;
}
```
</details>

---

### 🟡 **92. Find Equilibrium Index**
**Approach:** Calculate total sum first. Traverse while maintaining left sum. At each index, check if left sum equals (total - left - current).

**Example:**
```
Input:  [-7, 1, 5, 2, -4, 3, 0]
Output: 3  // Index where left sum (1+5) equals right sum (-4+3+0)
```

<details>
<summary>💡 Click to View Solution</summary>

**JavaScript:**
```javascript
function equilibriumIndex(arr) {
    const totalSum = arr.reduce((a, b) => a + b, 0);
    let leftSum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (leftSum === totalSum - leftSum - arr[i]) {
            return i;
        }
        leftSum += arr[i];
    }
    return -1;
}
```
</details>

---

### 🟡 **93. Rotate 1D Array Using Reversal Algorithm**
**Approach:** Reverse entire array, then reverse first k elements, then reverse remaining elements.

**Example:**
```
Input:  [1, 2, 3, 4, 5, 6], k = 2
Output: [5, 6, 1, 2, 3, 4]
```

<details>
<summary>💡 Click to View Solution</summary>

**JavaScript:**
```javascript
function rotateByReversal(arr, k) {
    k = k % arr.length;
    
    function reverse(start, end) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }
    
    reverse(0, arr.length - 1);
    reverse(0, k - 1);
    reverse(k, arr.length - 1);
    return arr;
}
```
</details>

---

### 🟡 **94. Count Subarrays with All Distinct Elements**
**Approach:** Sliding window with hash set. Expand right, if duplicate found, shrink left until window is valid again.

**Example:**
```
Input:  [1, 2, 1, 3]
Output: 9  // All subarrays with unique elements
```

<details>
<summary>💡 Click to View Solution</summary>

**JavaScript:**
```javascript
function countDistinctSubarrays(arr) {
    let count = 0;
    const set = new Set();
    let left = 0;
    
    for (let right = 0; right < arr.length; right++) {
        while (set.has(arr[right])) {
            set.delete(arr[left]);
            left++;
        }
        set.add(arr[right]);
        count += right - left + 1; // All subarrays ending at right
    }
    return count;
}
```
</details>

---

### 🟡 **95. Find All Subarrays of Size K with Maximum Sum**
**Approach:** Sliding window of fixed size k. Calculate first window sum, then slide and track max.

**Example:**
```
Input:  [1, 4, 2, 10, 23, 3, 1, 0, 20], k = 4
Output: 39  // Sum of [4, 2, 10, 23]
```

<details>
<summary>💡 Click to View Solution</summary>

**JavaScript:**
```javascript
function maxSumSubarrayK(arr, k) {
    let maxSum = 0;
    let windowSum = 0;
    
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;
    
    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}
```
</details>

---

### 🟡 **96. Find Subarray with Minimum Average**
**Approach:** Sliding window of size k. Track minimum average. For exact subarray, return the one with min avg.

**Example:**
```
Input:  [3, 7, 90, 20, 10, 50, 40], k = 3
Output: [3, 7, 90]  // Average = 33.33 (minimum)
```

<details>
<summary>💡 Click to View Solution</summary>

**JavaScript:**
```javascript
function minAvgSubarray(arr, k) {
    let minAvg = Infinity;
    let minIndex = 0;
    let windowSum = 0;
    
    for (let i = 0; i < k; i++) windowSum += arr[i];
    minAvg = windowSum / k;
    
    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k];
        const avg = windowSum / k;
        if (avg < minAvg) {
            minAvg = avg;
            minIndex = i - k + 1;
        }
    }
    return arr.slice(minIndex, minIndex + k);
}
```
</details>

---

### 🟡 **97. Count Subarrays with Sum Divisible by K**
**LeetCode:** [974. Subarray Sums Divisible by K](https://leetcode.com/problems/subarray-sums-divisible-by-k/)  
**Approach:** Prefix sum modulo k. Use hash map to count occurrences of each remainder. If same remainder appears twice, subarray between them is divisible by k.

**Example:**
```
Input:  [4, 5, 0, -2, -3, 1], k = 5
Output: 7
```

<details>
<summary>💡 Click to View Solution</summary>

**JavaScript:**
```javascript
function subarraysDivByK(arr, k) {
    const map = new Map();
    map.set(0, 1);
    let prefixSum = 0;
    let count = 0;
    
    for (let num of arr) {
        prefixSum += num;
        const mod = ((prefixSum % k) + k) % k; // Handle negative
        if (map.has(mod)) {
            count += map.get(mod);
        }
        map.set(mod, (map.get(mod) || 0) + 1);
    }
    return count;
}
```
</details>

---

### 🟡 **98. Replace Each Element with Product of Others**
**LeetCode:** [238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/)  
**Approach:** Two passes - left to right for left products, right to left for right products. Multiply them for result.

**Example:**
```
Input:  [1, 2, 3, 4]
Output: [24, 12, 8, 6]
```

<details>
<summary>💡 Click to View Solution</summary>

**JavaScript:**
```javascript
function productExceptSelf(arr) {
    const n = arr.length;
    const result = new Array(n).fill(1);
    
    // Left products
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        result[i] = leftProduct;
        leftProduct *= arr[i];
    }
    
    // Right products
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= arr[i];
    }
    return result;
}
```
</details>

---

### 🟡 **99. Find Maximum Circular Subarray Sum**
**LeetCode:** [918. Maximum Sum Circular Subarray](https://leetcode.com/problems/maximum-sum-circular-subarray/)  
**Approach:** Max of (Kadane's max subarray) and (total sum - Kadane's min subarray). Handle all negative case.

**Example:**
```
Input:  [5, -3, 5]
Output: 10  // [5, -3, 5] wraps around
```

<details>
<summary>💡 Click to View Solution</summary>

**JavaScript:**
```javascript
function maxCircularSubarraySum(arr) {
    const kadane = (arr) => {
        let maxSoFar = arr[0], maxEndingHere = arr[0];
        for (let i = 1; i < arr.length; i++) {
            maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
            maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }
        return maxSoFar;
    };
    
    const maxKadane = kadane(arr);
    let totalSum = 0;
    let minSoFar = arr[0], minEndingHere = arr[0];
    
    for (let i = 0; i < arr.length; i++) {
        totalSum += arr[i];
        if (i > 0) {
            minEndingHere = Math.min(arr[i], minEndingHere + arr[i]);
            minSoFar = Math.min(minSoFar, minEndingHere);
        }
    }
    
    if (maxKadane < 0) return maxKadane; // All negative
    return Math.max(maxKadane, totalSum - minSoFar);
}
```
</details>

---

### 🟡 **100. Check if Array Can Be Partitioned into Two Equal Sum Subarrays**
**LeetCode:** [416. Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/)  
**Approach:** Subset sum problem. Check if any subset sums to total/2 using dynamic programming.

**Example:**
```
Input:  [1, 5, 11, 5]
Output: true  // [1, 5, 5] and [11]
```

<details>
<summary>💡 Click to View Solution</summary>

**JavaScript:**
```javascript
function canPartition(arr) {
    const total = arr.reduce((a, b) => a + b, 0);
    if (total % 2 !== 0) return false;
    
    const target = total / 2;
    const dp = new Array(target + 1).fill(false);
    dp[0] = true;
    
    for (let num of arr) {
        for (let j = target; j >= num; j--) {
            dp[j] = dp[j] || dp[j - num];
        }
    }
    return dp[target];
}
```
</details>

---

### 🟡 **101. Find Next Greater Element for Each Element**
**LeetCode:** [496. Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/) | [739. Daily Temperatures](https://leetcode.com/problems/daily-temperatures/)  
**Approach:** Monotonic decreasing stack. For each element, pop smaller elements from stack and assign current as their next greater.

**Example:**
```
Input:  [4, 5, 2, 25]
Output: [5, 25, 25, -1]
```

<details>
<summary>💡 Click to View Solution</summary>

**JavaScript:**
```javascript
function nextGreaterElement(arr) {
    const n = arr.length;
    const result = new Array(n).fill(-1);
    const stack = [];
    
    for (let i = 0; i < n; i++) {
        while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
            result[stack.pop()] = arr[i];
        }
        stack.push(i);
    }
    return result;
}
```
</details>

---

### 🟡 **102. Find Next Smaller Element for Each Element**
**Approach:** Monotonic increasing stack. Similar to next greater, but pop when current is smaller.

**Example:**
```
Input:  [4, 8, 5, 2, 25]
Output: [2, 5, 2, -1, -1]
```

<details>
<summary>💡 Click to View Solution</summary>

**JavaScript:**
```javascript
function nextSmallerElement(arr) {
    const n = arr.length;
    const result = new Array(n).fill(-1);
    const stack = [];
    
    for (let i = 0; i < n; i++) {
        while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
            result[stack.pop()] = arr[i];
        }
        stack.push(i);
    }
    return result;
}
```
</details>

---

### 🟡 **103. Sliding Window Maximum**
**LeetCode:** [239. Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)  
**Approach:** Monotonic decreasing deque. Store indices, remove elements outside window and smaller than current from back.

**Example:**
```
Input:  [1, 3, -1, -3, 5, 3, 6, 7], k = 3
Output: [3, 3, 5, 5, 6, 7]
```

<details>
<summary>💡 Click to View Solution</summary>

**JavaScript:**
```javascript
function slidingWindowMax(arr, k) {
    const result = [];
    const deque = []; // Store indices
    
    for (let i = 0; i < arr.length; i++) {
        // Remove indices out of window
        if (deque.length && deque[0] <= i - k) {
            deque.shift();
        }
        
        // Remove smaller elements from back
        while (deque.length && arr[deque[deque.length - 1]] < arr[i]) {
            deque.pop();
        }
        
        deque.push(i);
        
        // Add to result when window is full
        if (i >= k - 1) {
            result.push(arr[deque[0]]);
        }
    }
    return result;
}
```
</details>

---

### 🟡 **104. Maximum Sum of K Consecutive Elements**
**Approach:** Fixed-size sliding window. Calculate first window sum, then slide and track maximum.

**Example:**
```
Input:  [1, 4, 2, 10, 23, 3, 1, 0, 20], k = 4
Output: 39
```

<details>
<summary>💡 Click to View Solution</summary>

**JavaScript:**
```javascript
function maxSumKConsecutive(arr, k) {
    let maxSum = 0;
    let windowSum = 0;
    
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;
    
    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}
```
</details>

---

### 🟡 **105. Count Elements Greater Than Average**
**Approach:** Calculate average first, then linear scan to count elements greater than average.

**Example:**
```
Input:  [1, 2, 3, 4, 5]
Output: 2  // 4 and 5 are greater than avg 3
```

<details>
<summary>💡 Click to View Solution</summary>

**JavaScript:**
```javascript
function countGreaterThanAvg(arr) {
    const avg = arr.reduce((a, b) => a + b, 0) / arr.length;
    return arr.filter(x => x > avg).length;
}
```
</details>

---

### 🟡 **106. Find Duplicates in O(n) Time Without Extra Space**
**LeetCode:** [442. Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/)  
**Approach:** Mark visited elements by negating value at index (value-1). If already negative, it's a duplicate.

**Example:**
```
Input:  [4, 3, 2, 7, 8, 2, 3, 1]
Output: [2, 3]
```

<details>
<summary>💡 Click to View Solution</summary>

**JavaScript:**
```javascript
function findDuplicates(arr) {
    const duplicates = [];
    
    for (let i = 0; i < arr.length; i++) {
        const index = Math.abs(arr[i]) - 1;
        if (arr[index] < 0) {
            duplicates.push(Math.abs(arr[i]));
        } else {
            arr[index] = -arr[index];
        }
    }
    return duplicates;
}
```
</details>

---

### 🟡 **107. Find Missing Element in Arithmetic Progression**
**Approach:** Calculate common difference, use binary search to find where difference between consecutive elements is not equal to common diff.

**Example:**
```
Input:  [2, 4, 8, 10, 12]
Output: 6
```

<details>
<summary>💡 Click to View Solution</summary>

**JavaScript:**
```javascript
function findMissingAP(arr) {
    const n = arr.length;
    const diff = (arr[n - 1] - arr[0]) / n;
    
    let left = 0, right = n - 1;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === arr[0] + mid * diff) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return arr[0] + left * diff;
}
```
</details>

---

### 🟡 **108. Merge Two Sorted Arrays Without Extra Space**
**LeetCode:** [88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)  
**Approach:** Start from end of both arrays. Compare and place larger element at end of first array (which has space).

**Example:**
```
Input:  nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
```

<details>
<summary>💡 Click to View Solution</summary>

**JavaScript:**
```javascript
function merge(nums1, m, nums2, n) {
    let i = m - 1, j = n - 1, k = m + n - 1;
    
    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }
    return nums1;
}
```
</details>

---

### 🟡 **109. Find Median of Two Sorted Arrays**
**LeetCode:** [4. Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/)  
**Approach:** Binary search on partitions. Find partition where left half elements <= right half elements.

**Example:**
```
Input:  nums1 = [1, 3], nums2 = [2]
Output: 2.0
```

<details>
<summary>💡 Click to View Solution</summary>

**JavaScript:**
```javascript
function findMedianSortedArrays(nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    
    const m = nums1.length, n = nums2.length;
    let left = 0, right = m;
    
    while (left <= right) {
        const partitionX = Math.floor((left + right) / 2);
        const partitionY = Math.floor((m + n + 1) / 2) - partitionX;
        
        const maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
        const minRightX = partitionX === m ? Infinity : nums1[partitionX];
        const maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
        const minRightY = partitionY === n ? Infinity : nums2[partitionY];
        
        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            if ((m + n) % 2 === 0) {
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
            } else {
                return Math.max(maxLeftX, maxLeftY);
            }
        } else if (maxLeftX > minRightY) {
            right = partitionX - 1;
        } else {
            left = partitionX + 1;
        }
    }
}
```
</details>

---
