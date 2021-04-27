Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`

  - Parameter: a separator(comma, hyphen, etc) -- optional; defaults to comma separator
  - Return: a string with the elements of the array joined as specified; returns empty string if array is empty. (String Data Type)
  - Example:
    ```js
    let str = ['AtlCampus', 'is', 'beautiful'];
    str.join('-'); // "AtlCampus-is-beautiful"
    let str = ['White','Black', 'Brown'];
    str.join(); // "White,Black,Brown"
    let str = ['The Earth is a tiny blue speck' , 'in the vast space'];
    str.join(','); // "The Earth is a tiny blue speck,in the vast space"
    ```
  - `join` accepts a parameter that is a separator and returns a string with all the values joined and separted according to parameter value.
  - Does not mutate the original array

3. `flat`

  - Parameter: a numerical value to define the depth to which the array structure must be flattened; default flattening is only for one/first layer of nesting.
  - Return: a new array with the flattened structure
  - Example:
    ```js
    let arr = [0,1,3,[4,5],[6,7,[8,9,10]]];
    arr.flat(); // [0, 1, 3, 4, 5, 6, 7, Array(3)]
    let arr = [0,1,3,[4,5],[6,7,[8,9,10]]];
    arr.flat(2); // [0, 1, 3, 4, 5, 6, 7, 8, 9, 10]
    let arr = [0,1,3,[4,5],[6,7,[8,9,10]]];
    arr.flat(Infinity); // [0, 1, 3, 4, 5, 6, 7, 8, 9, 10]
    ```
  - `flat` accepts an optional parameter that specifies the depth to which the nested array must be flattened. `Infinity` parameter is used to flatten the array no matter the depth of nesting.
  - Does not mutate the original array

4. `push`

  - Parameter: multiple parameters that are values to be pushed to the array.
  - Return: the new length value of array after pushing elements (Number data type)
  - Example:
    ```js
    let arr = [0,1,3];
    arr.push(5,6,7); // 6
    let arr = ['cats','dogs'];
    arr.push('horses','donkeys','chickens'); // 5
    let arr = ['cats','dogs'];
    let animals = ['ducks', 'fish'];
    arr.push(animals); // 3; ["cats", "dogs", Array(2)]
    ```
  - `push` accepts multiple values as parameters that are then pushed (added) to the end of the array. 
  - Mutates the original array

5. `indexOf`

  - Parameter: searchElement - to find the index; fromIndex - to begin searching from this index (optional)
  - Return: the index value of the first occurence of the element (Number data type)
  - Example:
    ```js
    let arr = [0,1,3,10];
    arr.indexOf(10); // 3
    let arr = ['cats','dogs','horses','donkeys','chickens'];
    arr.indexOf('fish'); // -1
    let arr = ['cats','dogs','horses','donkeys','chickens'];
    arr.indexOf('chickens', 3); // 4
    ```
  - `indexOf` accepts one or two parameters, the first one being the value to search for; the second one being the optional index value to begin searching from. Returns -1 if no element is found. 
  - Does not mutate the original array

6. `lastIndexOf`

  - Parameter: searchElement - to find the index; fromIndex - to begin searching from this index (optional)
  - Return: the index value of the last occurence of the element (Number data type)
  - Example:
    ```js
    let arr = [0,1,3,10,3];
    arr.lastIndexOf(3); // 4
    let arr = ['cats','dogs','horses','donkeys','chickens'];
    arr.lastIndexOf('fish'); // -1
    let arr = ['cats','dogs','horses','donkeys', 'dogs','chickens'];
    arr.lastIndexOf('dogs', 3); // 4
    ```
  - `lastIndexOf` accepts one or two parameters, the first one being the value to search for; the second one being the optional index value to begin searching from. Returns -1 if no element is found. Returns the last occurence of the element in array.
  - Does not mutate the original array

7. `includes`

  - Parameter: searchElement - to check in the array; fromIndex - to begin searching from this index (optional)
  - Return: true or false based on whether value is found or not (Boolean data type)
  - Example:
    ```js
    let arr = [0,1,3,10];
    arr.includes(3); // true
    let arr = ['cats','dogs','horses','donkeys','chickens'];
    arr.includes('fish'); // false
    let arr = ['cats','dogs','horses','donkeys', 'dogs','chickens'];
    arr.includes('dogs', 3); // true
    ```
  - `includes` accepts one or two parameters, the first one being the value to search for; the second one being the optional index value to begin searching from. Returns true if element is found, false, if element not found.
  - Does not mutate the original array

8. `reverse`

  - Parameter: no parameter
  - Return: a new array with the original array's elements reversed
  - Example:
    ```js
    let arr = [0,1,3,10];
    arr.reverse(); // [10, 3, 1, 0]
    let arr = ['cats','dogs','horses','donkeys','chickens'];
    arr.reverse(); // ["chickens", "donkeys", "horses", "dogs", "cats"]
    ```
  - `reverse` method reverses the elements of an array by reversing their positions. 
  - Mutates the original array

9. `every`

  - Parameter: callback function and its parameters (optional --  element, index, array)
  - Return: true only if every element in the array satisfies the condition in the callback function; else returns false (Boolean type)
  - Example:
    ```js
    let arr = [5,1,3,10];
    let res = arr.every(function(number){
      return number > 0;
    }); // true

    let arr = [5,1,3,10];
    let res = arr.every(function(number){
      return number > 4;
    }); // false
    ``` 
  - `every` method accepts a callback function that returns tru only if every element in the array satisfies the condition in the callback function.
  - Does not mutate the original array

10. `shift`

  - Parameter: No parameter
  - Return: returns the removed element from array
  - Example:
    ```js
    let arr = [5,1,3,10];
    arr.shift(); // 5
    let arr = ['cats','dogs','horses','donkeys','chickens'];
    arr.shift(); // "cats"    
    ``` 
  - `shift` method removes an element from the beginning of the array and returns the removed element
  - Mutates the original array

11. `splice`

  - Parameter: count - index position to start slicing from; noOfElements - to specify the number of elements to be removed from array (optional)
  - Return: returns an array of removed elements
  - Example:
    ```js
    let arr = [5,1,3,10];
    arr.splice(1); // [1,3,10]; arr = [5];
    let arr = ['cats','dogs','horses','donkeys','chickens'];
    arr.splice(1,2); // ["dogs", "horses"]; arr = ["cats", "donkeys", "chickens"]   
    ``` 
  - `splice` method removes elements of array from specified position and returns the remvoved items as an array
  - Mutates the original array

12. `find` 

  - Parameter: callback function
  - Return: the first value that satisfies the callback function's condition (Number data type); returns undefined if not satisfied
  - Example:
    ```js
    let arr = [5,1,3,10,44,23,43];
    
    function isGreaterThan6 (num) {
      return num > 6;
    }

    let res = arr.find(isGreaterThan6); // 10 
    
    function isGreaterThan50 (num) {
      return num > 50;
    }

    let res = arr.find(isGreaterThan50); // undefined
  
    ``` 
  - `find` method looks for a value and returns it if condition is satisfied
  - Does not mutate the original array

13. `unshift`

  - Parameter: element(s) to be added; 
  - Return: returns the length of new array
  - Example:
    ```js
    let arr = [5,1,3,10];
    arr.unshift(44); // 5; arr = [44,5,1,3,10]
    let arr = ['cats','dogs','horses','donkeys','chickens'];
    arr.unshift('ants'); // 6    
    ``` 
  - `unshift` method adds an element to the beginning of the array and returns the length of the new array
  - Mutates the original array


14. `findIndex`

  - Parameter: callback function
  - Return: the index value of the first value that satisfies the callback function's condition (Number data type); returns -1 if not found
  - Example:
    ```js
    let arr = [5,1,3,10,44,23,43];
    
    function isGreaterThan6 (num) {
      return num > 6;
    }

    let res = arr.findIndex(isGreaterThan6); // 3 
    
    function isGreaterThan50 (num) {
      return num > 50; // -1
    ``` 
  - `findIndex` method looks for a value and returns its index value if condition is satisfied
  - Does not mutate the original array  

15. `filter`

  - Parameter: callback function
  - Return: new array with filtered values
  - Example:
    ```js
    let arr = [5,1,3,10,44,23,43];

    let res = arr.filter(function (num) {
      return num % 2 === 0;
    }); // [10, 44]

    let res = arr.filter(num => {
      return num % 5 === 0;
    }); // [5, 10]
    ``` 
  - `filter` method stores the computed values (filtered elements) in a new array
  - Does not mutate the original array  

16. `flat`

  - Parameter: a numerical value to define the depth to which the array structure must be flattened; default flattening is only for one/first layer of nesting.
  - Return: a new array with the flattened structure
  - Example:
    ```js
    let arr = [0,1,3,[4,5],[6,7,[8,9,10]]];
    arr.flat(); // [0, 1, 3, 4, 5, 6, 7, Array(3)]
    let arr = [0,1,3,[4,5],[6,7,[8,9,10]]];
    arr.flat(2); // [0, 1, 3, 4, 5, 6, 7, 8, 9, 10]
    let arr = [0,1,3,[4,5],[6,7,[8,9,10]]];
    arr.flat(Infinity); // [0, 1, 3, 4, 5, 6, 7, 8, 9, 10]
    ```
  - `flat` accepts an optional parameter that specifies the depth to which the nested array must be flattened. `Infinity` parameter is used to flatten the array no matter the depth of nesting.
  - Does not mutate the original array

17. `forEach`

  - Parameter: callback function; currentValue (current element being computed on); index, array (optional)
  - Return: no return value (undefined)
  - Example:
    ```js
    let arr = [5,1,3,10,44,23,43];

    let res = arr.forEach(function(number) {
      console.log(number);
    });

    let res = arr.forEach(function(number) {
      console.log(number + 2);
    });
    ``` 
  - `forEach` method accepts a callback function and this callback function gets called for each element of the array.
  - Does not mutate the original array 

18. `map`

  - Parameter: callback function; currentValue (current element being computed on); index, array (optional)
  - Return: new array wit h each element being computed upon
  - Example:
    ```js
    let arr = [5,1,3,10,44,23,43];

    let res = arr.map(function(number) {
      return number * 2;
    }); // [10, 2, 6, 20, 88, 46, 86]

    let res = arr.map(number => {
      return number + 2;
    }); // [7, 3, 5, 12, 46, 25, 45]
    ``` 
  - `map` method accepts a callback function and returns a new array with the computed elements
  - Does not mutate the original array  

19. `pop`

  - Parameter: no parameter
  - Return: removed element; undefined if empty
  - Example:
    ```js
    let arr = [0,1,3];
    arr.pop(); // 3
    let arr = ['cats','dogs'];
    arr.pop(); // "dogs"
    ```
  - `pop` methods removes the last element from the array and returns the removed element 
  - Does not mutate the original array

20. `reduce`

  - Parameter: 4 parameters; accumulator - to assign each iteration's returned value; currentValue - assigned a value that does not change for any iteration; currentIndex and array -- both optional
  - Return: single value after computing the array elements
  - Example:
    ```js
    let arr = [0,1,3,23,20,59,43];
    
    let sum = arr.reduce((acc, num) => {
      return acc + num;
    }, 0); // 149

    let res = arr.reduce((acc, num) => {
      return acc + (num * 2);
    }, 0); // 298

    ```
  - `reduce` method reduces / computes a collection of values into a single value and returns it
  - Does not mutate the original array

21. `slice`

  - Parameter: startIndex -- to begin slicing from; endIndex (optional) -- to stop slicing at; does not include endIndex element; negative index can be used to begin slicing from the end of the array
  - Return: returns an array with leftover elements after slicing
  - Example:
    ```js
    let arr = [5,1,3,10];
    arr.slice(1); // [1,3,10]
    let arr = ['cats','dogs','horses','donkeys','chickens'];
    arr.slice(1,3); // ["dogs", "horses"]
    ``` 
  - `slice` method removes elements of array from specified position and returns the leftover items as a new array
  - Does not mutate the original array

22. `some`

  - Parameter: callback function; currentValue (current element being computed on); index, array (optional)
  - Return: true if at least one value is satisfied; else false (Boolean type)
  - Example:
    ```js
    let arr = [5,1,3,10,44,23,43];

    let res = arr.some(function(number) {
      return number > 20;
    }); // true

    let res = arr.some(function(number) {
      return number > 100;
    }); // false
    ``` 
  - `some` method accepts a callback function and returns a Boolean value of true or false if at least one element of the array passes the condition
  - Does not mutate the original array
