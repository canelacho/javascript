// 'strict' : A good practice to not use undeclared variables.
'strict' 



// We create an Array of notes
const math = ['20','16','9','11','6','18']

// Now we apply the every() method and save the result evaluated in a variable called "approved".
const approved = math.every( note => note >=  10)
// The every() method will take each element in the array "math".
// For every element iterated in the temporary variable called "note" we apply an evaluation.
// If all elements evaluated satisfy the requirements it will return true, in case not, will return false.

// We show the result
console.log(`Are they approved ?  : ${approved}` )

// Now, we can see the result in his original form in other line.
console.log(approved)


/* 

Explanation:

1. Firs we create a new Array with values that represent notes: `const math = ['20','16','9','11','6','18']`
2. Then create a new variable with name `approved`, it wlil recibe the result of the `every()` method.
3. Resolving the `every()` method applied to our "`math`" array.
4. The `every()` method take the "`math`" array and evaluate each element of it.
5. Each iteration is load in the temporary var called "`note`".
6. Using arrow function we evaluate if each value iterated satisfy the requirements.
7. When the `every()` method finish to evaluate all the elements in the array, the result is load in the "`approved`" variable.
8. Using Template String we show in the console the result.
9. In the second console.log we can see the result.

*/