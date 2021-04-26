Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

  - Parameter: None
  - Return: Returns a new string where all letters have been converted to upper case (string data type)
  - Example: 
    ```js
    let str = "vinoo is a developer";
    console.log(str.toUpperCase()); // VINOO IS A DEVELOPER
    ```
  - `toUpperCase` converts all the letters in a string to upper case and returns the result as a string data type.


3. `toLowerCase`

- Parameter: None
  - Return: Returns a new string where all letters have been converted to lower case (string data type)
  - Example: 
    ```js
    let str = "VinOO IS a dEvELOPer";
    console.log(str.toLowerCase()); // vinoo is a developer
    ```
  - `toLowerCase` converts all the letters in a string to upper case and returns the result as a string data type.

4. `trim`

  - Parameter: None
  - Return: Returns a new string where all the white-spaces in the given string are removed, ONLY at the beginning and end. Whitespaces include spacec, tabs, etc (string data type). This method does not delete the whitespaces in the middle of a string.
  - Example: 
    ```js
    let str = "         vinoo is       a developer       ";
    console.log(str.trim()); // vinoo is      a developer
    ```
  - `trim` removes all the whitespaces in the beginning and end of a string and returns the result in a string format

5. `trimEnd`

  - Parameter: None
  - Return: Returns a new string where all the white-spaces at the END of the given string are removed (string data type).
  - Example: 
    ```js
    let str = "         vinoo is       a developer       ";
    console.log(str.trimEnd()); // "         vinoo is       a developer"
    ```
  - `trimEnd` removes all the whitespaces ONLY at the end of a string and returns the result in a string format

6. `trimStart`

  - Parameter: None
  - Return: Returns a new string where all the white-spaces at the BEGINNING of the given string are removed (string data type).
  - Example: 
    ```js
    let str = "         vinoo is       a developer       ";
    console.log(str.trimStart()); // "vinoo is       a developer       "
    ```
  - `trimStart` removes all the whitespaces ONLY at the beginning of a string and returns the result in a string format

7. `concat`

  - Parameter: Multiple; takes one or more to concatenate to original string; defaults to original string
  - Return: concatenates / adds all the strings given as arguments to the existing string variable (string data type).
  - Example: 
    ```js
    let str = "vinoo";
    console.log(str.concat(' ','is',' ','a',' ','developer')); // "vinoo is a developer
    ```
  - `concat` adds one or more characters/strings given as parameters to the methdod, to the original string and returns the result in a string format

8. `endsWith`

  - Parameter: search string - optional, length -optional; defaults to false
  - Return: true or false after checking if the original string ends with the entered string term (Boolean data type). Length parameter checks the until that specified length is reached.
  - Example: 
    ```js
    let str = "vinoo is a developer";

    console.log(str.endsWith('per')); // true
    console.log(str.endsWith('is', 8)); // true
    console.log(str.endsWith('o', 6)); // false
    console.log(str.endsWith('per', 162)); // true; if the string ends with the specified string and the length paramenter value is non-existent, it still returns true
    ```
  - `endsWith` checks if the string ends with a specified character or term and returns true or false based on that.

9. `includes`

  - Parameter: search string, length -optional; defaults to false
  - Return: true or false after checking if the original string ends with the entered string term (Boolean data type). Length parameter checks the until that specified length is reached
  - Example: 
    ```js
    let str = "vinoo is a developer";

    console.log(str.includes('vel')); // true
    console.log(str.includes('vel', 14)); // false
    ```
  - `includes` checks if the string contains the specified character or string term and returns true or false based on that. Length parameter specifies from where in the index value the search must begin.

10. `indexOf`

  - Parameter: search string, fromPosition -optional; defaults to 0
  - Return: the index value from where the search string is beginning, if matched (Number data type); fromPosition is to specify from which index value the search must begin.
  - Example: 
    ```js
    let str = "vinoo is a developer";

    console.log(str.indexOf('vel')); // 13
    console.log(str.indexOf('pe', 14)); // 17
    ```
  - `indexOf` searches for and displays the index value of the first occurence of the search string value in the given string. 

11. `lastIndexOf`

  - Parameter: search string, fromPosition -optional; defaults to 0
  - Return: the index value from where the search string is beginning, if matched (Number data type); fromPosition is to specify from which index value the search must begin.
  - Example: 
    ```js
    let str = "vinoo is a developer";

    console.log(str.lastIndexOf('e')); // 18
    console.log(str.lastIndexOf('i', 10)); // 6
    ```
  - `lastindexOf` searches for and displays the index value of the last occurence of the search string value in the given string. 

12. `padEnd`

  - Parameter: Length, string -optional;
  - Return: string with the specified length value, and padded string at the end of original string, if given
  - Example: 
    ```js
    let str = "vinoo is a developer";

    console.log(str.padEnd(36,'🤓')); // vinoo is a developer🤓🤓🤓🤓🤓🤓🤓🤓
    ```
  - `padEnd` pads, or adds a given string with the specified character/string values to the end of the a string until a specified string length is reached. String length parameter is optional.

13. `padStart`

  - Parameter: Length, string -optional;
  - Return: string with the specified length value, and padded string at the start of original string, if given
  - Example: 
    ```js
    let str = "vinoo is a developer";

    console.log(str.padStart(36,'😎')); // 😎😎😎😎😎😎😎😎vinoo is a developer
    ```
  - `padStart` pads, or adds a given string with the specified character/string values to the beginning of a string until a specified string length is reached. String length parameter is optional.

14. `repeat`

  - Parameter: number
  - Return: new string with the original string value concatenated for the specified number of times.
  - Example: 
    ```js
    let str = "vinoo";

    console.log(str.repeat(3)); // vinoo vinoo vinoo 
    ```
  - `repeat` adds the string value (concatenates) for the specified number of times and returns the result as a new string.

15. `replace`

  - Parameter: str - the string to be replaced, mewStr - the new string to replace the old string
  - Return: new string with the FIRST occurence of original string replaced by the new string
  - Example: 
    ```js
    let str = "Vinoo is a programmer. He was a programmer.";

    console.log(str.replace('programmer', 'developer')); // Vinoo is a developer. He was a programmer.
    ```
  - `replace` adds the string value (concatenates) for the specified number of times and returns the result as a new string.

16. `slice`

  - Parameter: beginIndex - to begin slicing from, endIndex - to stop slicing at (optional); if only one parameter is given, it is treated as EndIndex and slicing begins from 0th index.
  - Return: new string with the sliced string (string data type)
  - Example: 
    ```js
    let str = "Vinoo is a programmer. He was a programmer.";

    console.log(str.slice(10); // programmer. He was a programmer.
    ```
  - `slice` cuts (slices) the string from a specified index value and returns the result in a new string.

17. `split`

  - Parameter: separator string - to specify where the string needs to be split; limit - number of strings to be placed in new array
  - Return: an array with the new split string values 
  - Example: 
    ```js
    let str = "Vinoo is a programmer";

    console.log(str.split('oo', 5)); // ["Vin", " is a programmer"]
    console.log(str.split('', 15)); //  ["V", "i", "n", "o", "o", " ", "i", "s", " ", "a", " ", "p", "r", "o", "g"]
    ```
  - `split` breaks the string at the specified string value and places the remaining strings / characters as elements in a new array

18. `substring`

  - Parameter: indexStart - to specify where new substring must start from; indexEnd - to specify where new substring must end (optional)
  - Return: a new string with the value of the substring (string data type)
  - Example: 
    ```js
    let str = "Vinoo is a programmer";

    console.log(str.substring(5)); // is a programmer
    console.log(str.substring(5, 11)); // is a
    
    ```
  - `substring` takes out the string / characters from the given string and returns the value (substring) as a new value.
