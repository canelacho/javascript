// 'strict' : A good practice to not use undeclared variables.
'strict' 



// We create an Array of animals
const animals = ['Dog','Cat','Mouse','Bird']

// Now we apply the forEach() method to the animals array.
animals.forEach( animal => console.log(animal) )
// For each value of the array is loaded in the "animal" argument.
// Each "animal" will be show in the console.

/* 

Explanation:

1. Firs we create a new Array with values that represent animals: `const animals = ['Dog','Cat','Mouse','Bird']`
2. Resolving the `forEach()` method applied to our "`animals`" array.
3. The `forEach()` method take the "`animals`" array and evaluate each value.
4. Each iteration is processed one by one.
5. Using arrow function we pass "`animal`" as an argument to show in console the type of each animal on the array.
6. When the `forEach()` method finish to evaluate all the positions in the array, it finish.

*/