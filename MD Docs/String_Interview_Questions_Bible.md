# 📚 JavaScript String Interview Questions Bible

![String Interview Banner](https://kimi-web-img.moonshot.cn/img/images.ctfassets.net/e74a3a309e548e22a2c4bf00af9f1cb3de7c9a64.png)

> 🎯 **Your Ultimate Guide to Mastering String Problems for Technical Interviews**

---

## 🗂️ Table of Contents

- [🟢 Easy Level Questions](#-easy-level-questions)
- [🟡 Medium Level Questions](#-medium-level-questions)
- [🔴 Hard Level Questions](#-hard-level-questions)
- [⚫ Expert Level Questions](#-expert-level-questions)

---

## 🟢 Easy Level Questions

### 1. String Length and Indexing
**Problem:** Write a function to return the length of a string and its first and last character.

**Example:**
```javascript
Input: "Hello World"
Output: { length: 11, first: "H", last: "d" }
```

**Approach:** 
- Use `.length` property to get string length.
- Access first character using index `[0]` and last using `[length-1]` or `.at(-1)`.

---

### 2. String Concatenation (Without + Operator)
**Problem:** Merge two strings without using the `+` operator.

**Example:**
```javascript
Input: "Hello", "World"
Output: "HelloWorld"
```

**Approach:** 
- Use `.concat()` method or template literals (backticks).
- Alternatively, use array `.join()` method.

---

### 3. Check for Substring ⭐ [Most Asked]
**Problem:** Check if a string contains another substring. Return true or false.

**Example:**
```javascript
Input: s = "Hello World", substring = "World"
Output: true
```

**Approach:** 
- Use `.includes()` for simple check or `.indexOf()` to get position.
- Returns boolean directly with `.includes()`.

---

### 4. String Case Conversion
**Problem:** Convert a string to uppercase, lowercase, and title case.

**Example:**
```javascript
Input: "hello world"
Output: { 
  uppercase: "HELLO WORLD", 
  lowercase: "hello world", 
  titleCase: "Hello World" 
}
```

**Approach:** 
- Use `.toUpperCase()` and `.toLowerCase()` for basic conversion.
- For title case: split by space, capitalize first letter of each word, then join.

---

### 5. Trim and Repeat
**Problem:** Remove leading/trailing spaces and repeat the string n times.

**Example:**
```javascript
Input: "  hello  ", n = 3
Output: "hellohellohello"
```
<details>
  <summary>💡 Click to View Solution</summary>

  ```javascript
const str = " name  ";
const times = 3
const repeatStr = (str, times)=>{
    let trimStr = str.trim();
    let result = "";
    for(let i = 0; i < 3; i++){
        result = result + trimStr;
    }
    console.log(result);
}
repeatStr(str,times)
```
</details>

**Approach:** 
- Use `.trim()` to remove whitespace from both ends.
- Use `.repeat(n)` to repeat string n times.

---

### 6. Get Character at Index
**Problem:** Return the character at index i in a string. Handle out-of-bounds.

**Example:**
```javascript
Input: "Hello", index = 1
Output: "e"
Input: "Hello", index = 10
Output: undefined (or custom message)
```

**Approach:** 
- Use `.charAt()` which returns empty string for out-of-bounds, or bracket notation `[]` with optional chaining `?.`.

---

### 7. Check StartsWith / EndsWith ⭐ [Most Asked]
**Problem:** Check if a string starts with "abc" and ends with "xyz".

**Example:**
```javascript
Input: "abcHelloxyz"
Output: { startsWith: true, endsWith: true }
```

**Approach:** 
- Use `.startsWith()` and `.endsWith()` methods for efficient checking.

---

### 8. Count Occurrences of a Character
**Problem:** Count how many times 'a' appears in a string.

**Example:**
```javascript
Input: "banana"
Output: 3
```

**Approach:** 
- Use loop with counter or regex with `match()` and count matches.
- Alternative: split by character and check length minus 1.

<details>
<summary>💡 Click to View Solution</summary>

  ```javascript
const str = "bananan";
const target = "n";

const countOcc = (str, target)=>{
   let count = 0;
   for(i of str){
       if(i === target){
           count ++;
       }
   }
   console.log(count);
}

countOcc(str,target)
  ```
</details>

### 9. Replace All Occurrences
**Problem:** Replace all "cat" with "dog" in a string.

**Example:**
```javascript
Input: "I have a cat and another cat"
Output: "I have a dog and another dog"
```

**Approach:** 
- Use `.replace()` with global regex flag `/g` or `.replaceAll()` method.

<details>
<summary>💡 Click to View Solution</summary>

  ```javascript
  // 1st method...
  let str = "I have a cat and another cat";
  let result = str.replaceAll("cat", "dog");
  console.log(result);

  // 2nd method...
  

  ```

</details>

---

### 10. Split and Join
**Problem:** Split a string by spaces and join it back with hyphens.

**Example:**
```javascript
Input: "Hello World Example"
Output: "Hello-World-Example"
```

**Approach:** 
- Use `.split(' ')` to create array, then `.join('-')` to combine with hyphens.

---

### 11. Check If String Is Empty or Blank
**Problem:** Return true if a string is empty or only contains spaces.

**Example:**
```javascript
Input: "   "
Output: true
```

**Approach:** 
- Use `.trim()` and check if result is empty string `=== ""`.

---

### 12. Get Last N Characters
**Problem:** Get the last N characters of a string.

**Example:**
```javascript
Input: "abcdef", N = 3
Output: "def"
```

**Approach:** 
- Use `.slice(-N)` or `.substring(length - N)` to extract from end.

---

### 13. Check if String Contains Only Letters
**Problem:** Check if a string contains only alphabets.

**Example:**
```javascript
Input: "abc"
Output: true
Input: "abc123"
Output: false
```

**Approach:** 
- Use regex `/^[A-Za-z]+$/` to test if all characters are alphabetic.
<details>
<summary>💡 Click to View Solution</summary>

  ```javascript
const pureStr = (str) => {
  for (let i of str) {
    if (
      (i >= 'a' && i <= 'z') ||
      (i >= 'A' && i <= 'Z')
    ) {
      continue; // valid character
    } else {
      return false; // invalid character
    }
  }
  return true;
}
```

</details>

console.log(pureStr("abc"));   // true
console.log(pureStr("ab1"));   // false

### 14. Check if String Contains Only Digits
**Problem:** Check if a string contains only numbers.

**Example:**
```javascript
Input: "12345"
Output: true
Input: "12a34"
Output: false
```

**Approach:** 
- Use regex `/^\d+$/` or iterate and check `!isNaN(char)` for each character.

---

### 15. Remove Leading Zeros
**Problem:** Remove leading zeros from numeric string.

**Example:**
```javascript
Input: "000123"
Output: "123"
```

**Approach:** 
- Use `parseInt()` to convert to number then back to string, or regex to replace leading zeros.

---

### 16. Swap Two Strings Without Temporary Variable
**Problem:** Swap values of two strings without using extra variable.

**Example:**
```javascript
Input: a = "hello", b = "world"
After swap: a = "world", b = "hello"
```

**Approach:** 
- Use array destructuring assignment `[a, b] = [b, a]` for elegant swap.

---

### 17. Repeat String With Separator
**Problem:** Repeat a string N times with a separator between each.

**Example:**
```javascript
Input: "abc", N = 3, separator = "-"
Output: "abc-abc-abc"
```

**Approach:** 
- Use `.repeat()` then remove trailing separator, or use array fill and join.

---

## 🟡 Medium Level Questions

### 18. Reverse a String ⭐ [Most Asked]
**Problem:** Reverse a given string without using `reverse()` on arrays.

**Example:**
```javascript
Input: "hello"
Output: "olleh"
```

**LeetCode:** [344. Reverse String](https://leetcode.com/problems/reverse-string/)

**Approach:** 
- Use two pointers from both ends and swap characters until they meet in middle.
- Alternatively, iterate backwards and build new string.

<details>
<summary>💡 Click to View Solution</summary>

  ```javascript
// String and arry reverse 

const arr = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

const str = "hello world";

const reverseArr = (arr)=>{
    let result = "";
    
    for(let i = arr.length-1; i>=0; i--){
        // rev.push(arr[i])
        result += arr[i]
    }
    console.log(result);
}

reverseArr(arr);

  ```
</details>

---

### 19. Count Vowels and Consonants
**Problem:** Given a string, count the number of vowels and consonants.

**Example:**
```javascript
Input: "Hello World"
Output: { vowels: 3, consonants: 7 }
```

**Approach:** 
- Define vowels set, iterate through string, check if char is vowel using regex or set lookup.

<details>
<summary>💡 Click to View Solution</summary>

  ```javascript


const str = "Anurag Mourya";

const strFunction = (s) => {
    let vowels = 0;
    let consonants = 0;

    for (let i of s) {

        // convert uppercase to lowercase manually
        // if (i >= 'A' && i <= 'Z') {
        //     i = String.fromCharCode(i.charCodeAt(0) + 32);
        // }

        // check only letters
        if (i >= 'a' && i <= 'z') {
            if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
                vowels++;
            } else {
                consonants++;
            }
        }
    }

    return { vowels: vowels, consonants: consonants };
}

console.log(strFunction(str));

  ```
</details>

---

### 20. Check Palindrome ⭐ [Most Asked]
**Problem:** Determine if a string is a palindrome. Consider ignoring spaces and cases.

**Example:**
```javascript
Input: "A man a plan a canal Panama"
Output: true
```

**LeetCode:** [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)

**Approach:** 
- Use two pointers from both ends, skip non-alphanumeric, compare lowercase versions.

<details>
<summary>💡 Click to View Solution</summary>

  ```javascript

const str = "level";
const strFunction  = (s)=>{
    const string = s.toLowerCase();
    let revString = ""
   for(let i= 0; i<=string.length-1; i++){
      revString = string[i] + revString
   }
   
   return revString === string;
}
console.log(strFunction(str))

  ```
</details>

---

### 21. Find First Non-Repeating Character
**Problem:** Return the first character in a string that does not repeat.

**Example:**
```javascript
Input: "swiss"
Output: "w"
```

**Approach:** 
- Build frequency map with object/Map, then find first char with count 1.

---

### 22. Anagram Check ⭐ [Most Asked]
**Problem:** Check if two strings are anagrams of each other.

**Example:**
```javascript
Input: s = "anagram", t = "nagaram"
Output: true
```

**LeetCode:** [242. Valid Anagram](https://leetcode.com/problems/valid-anagram/)

**Approach:** 
- Compare character frequency counts using hash map, or sort both strings and compare.

---

### 23. Substring Count
**Problem:** Count how many times a substring appears in a string.

**Example:**
```javascript
Input: s = "ababab", pattern = "ab"
Output: 3
```

**Approach:** 
- Use indexOf in loop with updated start index, or regex with global match.

---

### 24. String to Number & Number to String Conversion
**Problem:** Convert numeric string to number and format number with commas.

**Example:**
```javascript
Input: "1234"
Output: Number: 1234, Formatted: "1,234"
```

**Approach:** 
- Use `parseInt()`, `Number()`, or unary `+` for conversion.
- Use `.toLocaleString()` for comma formatting.

---

### 25. Reverse Words in a Sentence ⭐ [Most Asked]
**Problem:** Reverse words in a sentence. "Hello world" → "world Hello"

**Example:**
```javascript
Input: "Hello World Example"
Output: "Example World Hello"
```

**Approach:** 
- Split by spaces, reverse array, join back with spaces.

---

### 26. Capitalize Each Word
**Problem:** Convert "hello world" → "Hello World"

**Example:**
```javascript
Input: "hello world"
Output: "Hello World"
```

**Approach:** 
- Split by spaces, map to capitalize first char + rest lowercase, join.

---

### 27. Remove Vowels
**Problem:** Remove all vowels from a string.

**Example:**
```javascript
Input: "Hello World"
Output: "Hll Wrld"
```

**Approach:** 
- Use regex `/[aeiou]/gi` with replace to remove all vowels case-insensitively.

---

### 28. Check Subsequence
**Problem:** Check if "abc" is a subsequence of "ahbgdc".

**Example:**
```javascript
Input: s = "ahbgdc", t = "abc"
Output: true
```

**Approach:** 
- Use two pointers, iterate through main string, match characters in order.

---

### 29. Count Words in a Sentence
**Problem:** Count number of words in a sentence.

**Example:**
```javascript
Input: "The quick brown fox"
Output: 4
```

**Approach:** 
- Split by spaces and filter out empty strings, or use regex to match word patterns.

---

### 30. Find Most Frequent Character
**Problem:** Return the character that appears most in a string.

**Example:**
```javascript
Input: "abracadabra"
Output: "a"
```

**Approach:** 
- Build frequency map, track max count and corresponding character.

---

### 31. Check Rotation
**Problem:** Check if one string is a rotation of another.

**Example:**
```javascript
Input: "abcde", "deabc"
Output: true
```

**Approach:** 
- Concatenate first string with itself, check if second string is substring of result.

---

### 32. Remove Duplicates from String
**Problem:** Remove duplicate characters while preserving order.

**Example:**
```javascript
Input: "aabbcc"
Output: "abc"
```

**Approach:** 
- Use Set to track seen characters, filter string to keep only first occurrence.

---

### 33. Check if Two Strings Are Rotational Anagrams
**Problem:** Check if one string is rotation AND anagram of another.

**Example:**
```javascript
Input: "abcde", "deabc"
Output: true
```

**Approach:** 
- Check if lengths match, then use concatenation trick or sort and compare.

---

### 34. Reverse Only Letters
**Problem:** Reverse only letters, keep special characters in place.

**Example:**
```javascript
Input: "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"
```

**Approach:** 
- Use two pointers, only swap when both point to letters, skip non-letters.

---

### 35. Alternate Uppercase and Lowercase
**Problem:** Convert "hello" → "HeLlO"

**Example:**
```javascript
Input: "hello"
Output: "HeLlO"
```

**Approach:** 
- Iterate through string, toggle case based on index (even/odd).

---

### 36. Remove All Non-Alphanumeric Characters
**Problem:** Keep only letters and numbers.

**Example:**
```javascript
Input: "He@l!l#o123"
Output: "Hello123"
```

**Approach:** 
- Use regex `/[^a-z0-9]/gi` to replace non-alphanumeric with empty string.

---

### 37. Capitalize First and Last Character of Each Word
**Problem:** "hello world" → "HellO WorlD"

**Example:**
```javascript
Input: "hello world"
Output: "HellO WorlD"
```

**Approach:** 
- Split words, map each word to capitalize first and last char, join.

---

### 38. Check Palindrome by Removing At Most One Character
**Problem:** Check if string can be palindrome after removing at most 1 char.

**Example:**
```javascript
Input: "abca"
Output: true (remove 'c' or 'b')
```

**LeetCode:** [680. Valid Palindrome II](https://leetcode.com/problems/valid-palindrome-ii/)

**Approach:** 
- Use two pointers, when mismatch found, check both possibilities (skip left or right).

---

### 39. Count Occurrences of All Substrings of Length K
**Problem:** Count all substrings of length K and their frequencies.

**Example:**
```javascript
Input: "ababc", k = 2
Output: { "ab": 2, "ba": 1, "bc": 1 }
```

**Approach:** 
- Use sliding window of size K, move one char at a time, use hash map to count.

---

### 40. Replace Spaces with '%20' (URLify)
**Problem:** "Mr John Smith" → "Mr%20John%20Smith"

**Example:**
```javascript
Input: "Mr John Smith"
Output: "Mr%20John%20Smith"
```

**Approach:** 
- Use `.split(' ').join('%20')` or `.replace(/ /g, '%20')` or `encodeURIComponent()`.

---

### 41. Capitalize Every Second Word
**Problem:** "the quick brown fox" → "the QUICK brown FOX"

**Example:**
```javascript
Input: "the quick brown fox"
Output: "the QUICK brown FOX"
```

**Approach:** 
- Split by spaces, map with index check (odd indices uppercase), join.

---

### 42. Check if String Has All Unique Characters ⭐ [Most Asked]
**Problem:** Check if all characters in string are unique.

**Example:**
```javascript
Input: "abcd"
Output: true
Input: "aabc"
Output: false
```

**Approach:** 
- Use Set to track characters, compare Set size with string length.

---

### 43. Find All Palindromic Substrings
**Problem:** Find all palindromic substrings in a string.

**Example:**
```javascript
Input: "abba"
Output: ["a", "b", "b", "bb", "abba"]
```

**Approach:** 
- Expand around center for each character (odd and even length), add to result.

---

### 44. Check if String is Rotation of Another Using Only One Call
**Problem:** Check rotation using single method call.

**Example:**
```javascript
Input: "waterbottle", "erbottlewat"
Output: true
```

**Approach:** 
- Concatenate first string with itself, use `.includes()` to check second string.

---

### 45. Remove Consecutive Duplicates
**Problem:** "aaabbcc" → "abc"

**Example:**
```javascript
Input: "aaabbcc"
Output: "abc"
```

**Approach:** 
- Iterate and only add char if different from previous, or use regex `/(.)

---

### 46. Count Substrings that Start and End with Same Character
**Problem:** Count all substrings with same start and end char.

**Example:**
```javascript
Input: "abcab"
Output: 7
```

**Approach:** 
- Use frequency map: for each char, count is n*(n+1)/2 where n is frequency.

---

### 47. Convert Snake Case to Camel Case
**Problem:** "hello_world" → "helloWorld"

**Example:**
```javascript
Input: "hello_world_example"
Output: "helloWorldExample"
```

**Approach:** 
- Split by underscore, map to capitalize first letter of each word except first, join.

---

### 48. Convert Camel Case to Snake Case
**Problem:** "helloWorld" → "hello_world"

**Example:**
```javascript
Input: "helloWorldExample"
Output: "hello_world_example"
```

**Approach:** 
- Insert underscore before uppercase letters, convert to lowercase.

---

### 49. Reverse Words Individually
**Problem:** "Hello World" → "olleH dlroW"

**Example:**
```javascript
Input: "Hello World"
Output: "olleH dlroW"
```

**Approach:** 
- Split by spaces, map each word to reversed, join with spaces.

---

### 50. Count Number of Words with Specific Length
**Problem:** Count words with exactly N characters.

**Example:**
```javascript
Input: "The quick brown fox", length = 5
Output: 2 (quick, brown)
```

**Approach:** 
- Split by spaces, filter by word length, count results.

---

### 51. Check if Two Strings Are Permutations
**Problem:** Check if strings are permutations of each other.

**Example:**
```javascript
Input: "abc", "cab"
Output: true
```

**Approach:** 
- Sort both strings and compare, or use frequency map comparison.

---

### 52. Check if String Can Form Palindrome
**Problem:** Check if string can be rearranged to form palindrome.

**Example:**
```javascript
Input: "civic"
Output: true
Input: "ivicc"
Output: true
```

**Approach:** 
- Count character frequencies, check if at most one character has odd count.

---

## 🔴 Hard Level Questions

### 53. Longest Substring Without Repeating Characters ⭐ [Most Asked]
**Problem:** Find the length of the longest substring with all unique characters.

**Example:**
```javascript
Input: "abcabcbb"
Output: 3 ("abc")
```

**LeetCode:** [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

**Approach:** 
- Use sliding window with hash set/map, expand right pointer, shrink left when duplicate found.

---

### 54. Longest Palindromic Substring ⭐ [Most Asked]
**Problem:** Find the longest palindrome inside a string.

**Example:**
```javascript
Input: "babad"
Output: "bab" (or "aba")
```

**LeetCode:** [5. Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)

**Approach:** 
- Expand around center for each character (check both odd and even lengths), track max.

---

### 55. String Compression
**Problem:** Compress string using counts of repeated characters. "aaabbc" → "a3b2c1"

**Example:**
```javascript
Input: "aaabbc"
Output: "a3b2c1"
```

**Approach:** 
- Iterate through string, count consecutive same characters, append char and count.

---

### 56. KMP Pattern Matching
**Problem:** Implement KMP algorithm to search for a pattern in a string.

**Example:**
```javascript
Input: text = "ABABDABACDABABCABAB", pattern = "ABABCABAB"
Output: Pattern found at index 10
```

**Approach:** 
- Build prefix table (LPS array) for pattern, use it to skip unnecessary comparisons.

---

### 57. URL and Base64 Encoding/Decoding
**Problem:** Encode/decode for URL and Base64.

**Example:**
```javascript
Input: "Hello World!"
Output: URL: "Hello%20World!", Base64: "SGVsbG8gV29ybGQh"
```

**Approach:** 
- Use `encodeURIComponent()`/`decodeURIComponent()` for URL, `btoa()`/`atob()` for Base64.

---

### 58. Generate All Subsequences of a String
**Problem:** Generate all possible subsequences of a string.

**Example:**
```javascript
Input: "abc"
Output: ["", "a", "b", "c", "ab", "ac", "bc", "abc"]
```

**Approach:** 
- Use recursion/backtracking: for each char, choose to include or exclude.

---

### 59. Pattern Matching with Regular Expressions
**Problem:** Validate email, phone number, or date format.

**Example:**
```javascript
Input: "test@example.com"
Output: true (valid email)
```

**Approach:** 
- Use appropriate regex patterns for validation with `.test()` method.

---

### 60. Minimum Window Substring ⭐ [Most Asked]
**Problem:** Find smallest substring in s containing all characters of string t.

**Example:**
```javascript
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
```

**LeetCode:** [76. Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)

**Approach:** 
- Use sliding window with frequency map, expand right until valid, contract left to minimize.

---

### 61. Longest Repeating Character Replacement
**Problem:** Replace at most k characters to get longest substring with same character.

**Example:**
```javascript
Input: "AABABBA", k = 1
Output: 4 ("BABB" or "ABBA")
```

**LeetCode:** [424. Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/)

**Approach:** 
- Sliding window: track max frequency char, window size - max freq <= k must hold.

---

### 62. Find All Anagrams of a Pattern in a String
**Problem:** Find all starting indices of anagrams of pattern in string.

**Example:**
```javascript
Input: s = "cbaebabacd", pattern = "abc"
Output: [0, 6]
```

**LeetCode:** [438. Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/)

**Approach:** 
- Sliding window with frequency comparison, use array of size 26 for O(1) comparison.

---

### 63. Longest Substring with At Most K Distinct Characters
**Problem:** Find longest substring with at most K unique characters.

**Example:**
```javascript
Input: "eceba", k = 2
Output: "ece"
```

**LeetCode:** [340. Longest Substring with At Most K Distinct Characters](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/)

**Approach:** 
- Sliding window with hash map tracking char frequencies, shrink when distinct chars > K.

---

### 64. Permutation in String
**Problem:** Check if string s2 contains a permutation of s1.

**Example:**
```javascript
Input: s1 = "ab", s2 = "eidbaooo"
Output: true (contains "ba")
```

**LeetCode:** [567. Permutation in String](https://leetcode.com/problems/permutation-in-string/)

**Approach:** 
- Fixed-size sliding window, compare frequency arrays of size 26.

---

### 65. Minimum Window Subsequence
**Problem:** Find minimum window in s that contains t as subsequence (not substring).

**Example:**
```javascript
Input: s = "abcdebdde", t = "bde"
Output: "bcde"
```

**LeetCode:** [727. Minimum Window Subsequence](https://leetcode.com/problems/minimum-window-subsequence/)

**Approach:** 
- Use dynamic programming or two-pointer with backtracking to find subsequence match.

---

### 66. Repeated Substring Pattern Check
**Problem:** Check if string can be constructed by repeating a substring.

**Example:**
```javascript
Input: "abab"
Output: true ("ab" repeated)
```

**LeetCode:** [459. Repeated Substring Pattern](https://leetcode.com/problems/repeated-substring-pattern/)

**Approach:** 
- Concatenate string with itself, remove first and last char, check if original exists inside.

---

### 67. Longest Common Subsequence
**Problem:** Find length of longest common subsequence between two strings.

**Example:**
```javascript
Input: "abcde", "ace"
Output: 3 ("ace")
```

**LeetCode:** [1143. Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/)

**Approach:** 
- Dynamic programming: build 2D table, dp[i][j] represents LCS of first i and j chars.

---

### 68. Serialize and Deserialize String
**Problem:** Handle special characters, newlines, commas in serialization.

**Example:**
```javascript
Input: "Hello, World\nTest"
Output: Serialized safe format
```

**Approach:** 
- Use escaping for special chars, or use JSON stringify/parse, or length-prefix encoding.

---

### 69. Wildcard Matching
**Problem:** Pattern matching where ? = single char, * = any sequence.

**Example:**
```javascript
Input: s = "aa", p = "*"
Output: true
```

**LeetCode:** [44. Wildcard Matching](https://leetcode.com/problems/wildcard-matching/)

**Approach:** 
- Dynamic programming with 2D table, or greedy algorithm tracking last star position.

---

### 70. Edit Distance (Levenshtein Distance)
**Problem:** Minimum edits (insert/delete/replace) to convert string A to B.

**Example:**
```javascript
Input: "kitten", "sitting"
Output: 3
```

**LeetCode:** [72. Edit Distance](https://leetcode.com/problems/edit-distance/)

**Approach:** 
- Dynamic programming: dp[i][j] represents edit distance between first i and j characters.

---

### 71. Count All Palindromic Substrings
**Problem:** Count all palindromic substrings in a string.

**Example:**
```javascript
Input: "aaa"
Output: 6 ("a", "a", "a", "aa", "aa", "aaa")
```

**LeetCode:** [647. Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/)

**Approach:** 
- Expand around center for each character, count both odd and even length palindromes.

---

### 72. Minimum Insertions to Make String Palindrome
**Problem:** Find minimum insertions needed to make string palindrome.

**Example:**
```javascript
Input: "abcda"
Output: 2
```

**LeetCode:** [1312. Minimum Insertion Steps to Make a String Palindrome](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/)

**Approach:** 
- Find longest palindromic subsequence, answer = length - LPS length.

---

### 73. Longest Repeating Subsequence
**Problem:** Find longest subsequence that repeats without overlapping.

**Example:**
```javascript
Input: "aab"
Output: 1 ("a")
```

**LeetCode:** [Longest Repeating Subsequence](https://leetcode.com/problems/longest-repeating-subsequence/)

**Approach:** 
- Dynamic programming similar to LCS, but compare string with itself and ensure i != j.

---

### 74. Minimum Add to Make Parentheses Valid
**Problem:** Find minimum add to make parentheses string valid.

**Example:**
```javascript
Input: "())"
Output: 1
```

**LeetCode:** [921. Minimum Add to Make Parentheses Valid](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/)

**Approach:** 
- Track balance of parentheses, count unmatched opens and closes.

---

### 75. Remove Adjacent Duplicates Repeatedly
**Problem:** Remove adjacent duplicates until no more duplicates exist.

**Example:**
```javascript
Input: "abbaca"
Output: "ca"
```

**LeetCode:** [1047. Remove All Adjacent Duplicates In String](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/)

**Approach:** 
- Use stack: push if different from top, pop if same as top.

---

### 76. Check if String Can Form Valid Shuffle of Two Strings
**Problem:** Check if string is valid interleaving of two strings.

**Example:**
```javascript
Input: s1 = "abc", s2 = "def", s3 = "adbcef"
Output: true
```

**LeetCode:** [97. Interleaving String](https://leetcode.com/problems/interleaving-string/)

**Approach:** 
- Dynamic programming: dp[i][j] represents if first i+j chars can be formed from s1[0..i] and s2[0..j].

---

### 77. Decode Ways (String as Digits to Letters)
**Problem:** Count ways to decode digit string to letters (A=1, B=2, ..., Z=26).

**Example:**
```javascript
Input: "12"
Output: 2 ("AB" or "L")
```

**LeetCode:** [91. Decode Ways](https://leetcode.com/problems/decode-ways/)

**Approach:** 
- Dynamic programming: dp[i] = dp[i-1] (if current valid) + dp[i-2] (if two-digit valid).

---

### 78. Longest Valid Parentheses
**Problem:** Find longest substring with valid parentheses.

**Example:**
```javascript
Input: "(()())"
Output: 6
```

**LeetCode:** [32. Longest Valid Parentheses](https://leetcode.com/problems/longest-valid-parentheses/)

**Approach:** 
- Use stack to track indices, or dynamic programming with two passes (left-to-right, right-to-left).

---

### 79. Distinct Subsequences
**Problem:** Count distinct subsequences of string s that equal string t.

**Example:**
```javascript
Input: s = "rabbbit", t = "rabbit"
Output: 3
```

**LeetCode:** [115. Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/)

**Approach:** 
- Dynamic programming: dp[i][j] = count of first i chars of s forming first j chars of t.

---

### 80. Regular Expression Matching
**Problem:** Pattern matching with . (any char) and * (zero or more).

**Example:**
```javascript
Input: s = "aa", p = "a*"
Output: true
```

**LeetCode:** [10. Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/)

**Approach:** 
- Dynamic programming: build 2D table considering char match and * handling.

---

## ⚫ Expert Level Questions

### 81. Generate All Unique Permutations
**Problem:** Generate all unique permutations of a string with possible duplicates.

**Example:**
```javascript
Input: "aabc"
Output: ["aabc", "aacb", "abac", "abca", "acab", "acba", ...]
```

**LeetCode:** [47. Permutations II](https://leetcode.com/problems/permutations-ii/)

**Approach:** 
- Backtracking with sorting, skip duplicates by checking previous same char usage.

---

### 82. Palindrome Partitioning
**Problem:** Partition string into all possible palindrome substrings.

**Example:**
```javascript
Input: "aab"
Output: [["aa","b"], ["a","a","b"]]
```

**LeetCode:** [131. Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/)

**Approach:** 
- Backtracking: try all partitions, check if substring is palindrome before recursing.

---

### 83. Count Distinct Subsequences
**Problem:** Count number of distinct subsequences in a string.

**Example:**
```javascript
Input: "abc"
Output: 7 (all except empty: "a", "b", "c", "ab", "ac", "bc", "abc")
```

**Approach:** 
- Dynamic programming with tracking last occurrence to avoid duplicates.

---

### 84. String Transformation by Swaps
**Problem:** Check if one string can be converted to another by swaps.

**Example:**
```javascript
Input: "abcd", "cdab"
Output: true
```

**Approach:** 
- Check if strings are rotations of each other and have same character frequencies.

---

### 85. String Compression & Decompression (Advanced)
**Problem:** Compress with multi-digit counts and decompress back.

**Example:**
```javascript
Input: "aaabccddd"
Output: "a3b1c2d3" → decompress → "aaabccddd"
```

**Approach:** 
- For compression: count consecutive chars, handle multi-digit counts.
- For decompression: parse digits, repeat preceding char accordingly.

---

### 86. Find Smallest Window Containing All Unique Characters
**Problem:** Find smallest substring containing all unique characters of string.

**Example:**
```javascript
Input: "aabcbcdbca"
Output: "dbca"
```

**Approach:** 
- Sliding window with set of all unique chars, track when all are covered.

---

### 87. Longest Substring Without Repeating Vowels
**Problem:** Find longest substring with no repeating vowels.

**Example:**
```javascript
Input: "abeiboo"
Output: "abe" or "ibo"
```

**Approach:** 
- Modified sliding window tracking only vowel frequencies, consonants allowed to repeat.

---

### 88. Longest Substring with Equal 0s and 1s
**Problem:** For binary string, find longest substring with equal 0s and 1s.

**Example:**
```javascript
Input: "001101"
Output: "0011" or "1100"
```

**LeetCode:** [525. Contiguous Array](https://leetcode.com/problems/contiguous-array/)

**Approach:** 
- Convert to count array (treat 0 as -1), use hash map to store first occurrence of each count.

---

### 89. Pattern Matching with Gaps
**Problem:** Match pattern with fixed wildcards (gaps of specific lengths).

**Example:**
```javascript
Input: pattern "a**c" (where * = any single char), text = "abbc"
Output: true
```

**Approach:** 
- Dynamic programming with gap handling, or recursive matching with position tracking.

---

### 90. Lexicographically Smallest Subsequence of Length K
**Problem:** Find lexicographically smallest subsequence of length K.

**Example:**
```javascript
Input: "cbacdcbc", k = 3
Output: "acb"
```

**LeetCode:** [1081. Smallest Subsequence of Distinct Characters](https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/)

**Approach:** 
- Use monotonic stack with remaining character count tracking.

---

### 91. Check if String is K-Palindrome
**Problem:** Check if string can become palindrome after ≤ k deletions.

**Example:**
```javascript
Input: "abcba", k = 0 → true
Input: "abccba", k = 1 → true
```

**LeetCode:** [1216. Valid Palindrome III](https://leetcode.com/problems/valid-palindrome-iii/)

**Approach:** 
- Find longest palindromic subsequence, check if length - LPS ≤ k.

---

### 92. Count Number of Ways to Decode String
**Problem:** Count decode ways with * (can be 1-9).

**Example:**
```javascript
Input: "1*"
Output: 18 (1-9 for *, plus combinations)
```

**LeetCode:** [639. Decode Ways II](https://leetcode.com/problems/decode-ways-ii/)

**Approach:** 
- Dynamic programming with modulo arithmetic, handle * cases separately.

---

### 93. Minimum Removals to Make String Valid
**Problem:** Remove minimum parentheses to make string valid.

**Example:**
```javascript
Input: "a)b(c)d"
Output: "ab(c)d" or "a(bc)d"
```

**LeetCode:** [1249. Minimum Remove to Make Valid Parentheses](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/)

**Approach:** 
- Use stack to track indices of unmatched parentheses, remove them at end.

---

### 94. Longest Repeated Substring
**Problem:** Find longest substring that appears at least twice.

**Example:**
```javascript
Input: "banana"
Output: "ana"
```

**Approach:** 
- Use suffix array with binary search, or rolling hash (Rabin-Karp) with binary search.

---

### 95. Longest Substring Without Repeating Words
**Problem:** Find longest substring where no word repeats.

**Example:**
```javascript
Input: "the quick brown fox the"
Output: "quick brown fox the" (assuming word-level uniqueness)
```

**Approach:** 
- Sliding window at word level using hash set to track seen words.

---

### 96. Maximum Length Substring with Exactly K Vowels
**Problem:** Find longest substring with exactly K vowels.

**Example:**
```javascript
Input: "aeiouaei", k = 3
Output: "aei" or "iou"
```

**Approach:** 
- Sliding window expanding right, contract left when vowel count exceeds K.

---

### 97. Find All Substrings that Are Anagrams of Each Other
**Problem:** Group all anagram substrings by their starting indices.

**Example:**
```javascript
Input: "cbaebabacd"
Output: Groups of anagram indices
```

**Approach:** 
- Use rolling hash or sorted character signature as key in hash map.

---

### 98. Z-Algorithm / Rabin-Karp String Matching
**Problem:** Implement efficient pattern matching algorithms.

**Example:**
```javascript
Input: text = "GEEKS FOR GEEKS", pattern = "GEEK"
Output: [0, 10] (starting indices)
```

**Approach:** 
- Z-algorithm: build Z-array for pattern+text concatenation.
- Rabin-Karp: use rolling hash for O(1) substring hash comparison.

---

### 99. Manacher's Algorithm
**Problem:** Find all palindromic substrings in linear time.

**Example:**
```javascript
Input: "abacaba"
Output: All palindromic substrings with their centers
```

**Approach:** 
- Transform string with separators, use array to store palindrome radii, expand around center efficiently.

---

### 100. Suffix Array Construction
**Problem:** Build suffix array for string and answer LCP queries.

**Example:**
```javascript
Input: "banana"
Output: Suffix array: [5, 3, 1, 0, 4, 2] (indices of sorted suffixes)
```

**Approach:** 
- Sort all suffixes using efficient algorithm (O(n log n) or O(n)), build LCP array.

---

## 📊 Summary Statistics

| Difficulty | Count | Most Asked Problems |
|------------|-------|---------------------|
| 🟢 Easy | 17 | Check Substring, StartsWith/EndsWith |
| 🟡 Medium | 35 | Reverse String, Palindrome, Anagram, First Non-Repeating |
| 🔴 Hard | 28 | Longest Substring Without Repeating, Longest Palindromic, Minimum Window |
| ⚫ Expert | 20 | All Permutations, Palindrome Partitioning, Advanced Algorithms |
| **Total** | **100** | |

---

## 🎯 Key Concepts Map

```
┌─────────────────────────────────────────────────────────────┐
│                    STRING PROBLEM TECHNIQUES                 │
├─────────────────────────────────────────────────────────────┤
│  🔹 Two Pointers         → Palindrome, Reverse, Valid Parentheses  │
│  🔹 Sliding Window     → Substring problems, Anagrams, Window     │
│  🔹 Hash Map/Set         → Frequency, Uniqueness, Anagrams          │
│  🔹 Dynamic Programming  → LCS, Edit Distance, Palindrome           │
│  🔹 Backtracking         → Permutations, Partitions, Subsequences   │
│  🔹 Stack                → Parentheses, Adjacent Duplicates          │
│  🔹 Recursion            → Subsequences, Tree-based problems          │
└─────────────────────────────────────────────────────────────┘
```

---

## 💡 Interview Tips

1. **Always clarify constraints:** Ask about character set (ASCII/Unicode), case sensitivity, and space requirements.

2. **Start with brute force:** Mention naive approach first, then optimize.

3. **Choose right data structure:** Hash map for O(1) lookup, Set for uniqueness, Stack for LIFO patterns.

4. **Handle edge cases:** Empty strings, single characters, all same characters, special characters.

5. **Optimize step by step:** Show your thinking process from O(n²) → O(n log n) → O(n).

---

> 📌 **Note:** This collection covers 100+ string problems ranging from basic operations to advanced algorithms. Practice problems marked with ⭐ [Most Asked] first as they appear most frequently in interviews at top tech companies.

---

*Happy Coding! 🚀*
