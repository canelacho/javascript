#  .reduce()
Folder: 03-Reduce
- index.html
- /js
  - script.js


### Theory
The **reduce()** method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
[by : developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)


### Code
```javascript
// We create an Array of values
const numbers = [5, 14, 1, 10]

// Now we apply the reduce method and save the result in a variable called "total".
// The reduce method will take each value of the array "numbers".
// We add two arguments at the reduce method, called "accumulator" and "currentValue".
// For each value iterated in the "currentValue" will be passed to accumulate in the "accumulator" varibale.
const total = numbers.reduce( (accumulator, currentValue) => accumulator + currentValue)

// We show the result
console.log(`Total accumulate : ${total}` )

// Now, we can see the result in his original form in other line.
console.log(total)
```

# Explanation:

1. Firs we create a new Array with values that represent simple number: `const numbers = [5, 14, 1, 10];`
2. Creating a new variable with name `total`, it wlil recibe the result of the `reduce()` method.
3. Resolving the `reduce()` method applied to our "`numbers`" array.
4. The `reduce()` method take the "`numbers`" array and evaluate each value of it.
5. Each iteration is load in the temp var called "`currentValue`".
6. Using arrow function we pass two arguments "`currentValue`" and "`accumulator`" to accumulate each iterate value in the "`accumulator`" variable.
7. When the `reduce()` method finish to evaluate all the positions in the array, the result in the temp array is load in the "`total`" variable.
8. Using Template String we show in the console the result.
9. In the second console.log we can see the result.