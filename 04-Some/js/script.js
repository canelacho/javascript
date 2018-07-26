// 'strict' : A good practice to not use undeclared variables.
'strict' 



// We create an Array of titles
const roles = ['Student','Teacher','Principal']

// Now we apply the some() method and save the result in a variable called "exist".
// The some() method will evaluate each element of the array "roles".
// When the iteration find the first element the method stop the execution and return the result.
const exist = roles.some( element => element === 'Teacher')

// We show the result
console.log(`Result : ${exist}`)

// Now, we can see the result in his original form in other line.
console.log(exist)


/*

Explanation:

1. We create a new variable with name `roles`
2. Then we assign it a new Array with titles values: `['Student','Teacher','Principal']`.
3. Resolving the `some()` method applied to our "`roles`" array.
4. The `some()` method take the "`roles`" array and evaluate each element of it.
5. Using arrow function we evaluate each element iterated.
6. When the iteration find the first element that match with the condition, the method stop the execution and return the result.
7. Using Template String we show in the console the result.
8. In the second console.log we can see the result.

*/