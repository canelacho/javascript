// 'strict' : A good practice to not use undeclared variables.
'strict' 



// We create an Array of ages
const friends = [18, 16, 19, 15, 16, 10];

// Now we apply the filter method.  It will return a new array with the results.
const canDrink = friends.filter( age => age >= 18 );

// We show the result
console.log(`Ages that can legally drink : ${canDrink}` )

// Now, we can see the array in his original form in other line.
console.log(canDrink)


/* 
Explaining:
 Firs we create a new Array with values that represent ages of friends:
 const friends = [18, 16, 19, 15, 16, 10];

 Creating a new variable with name canDrink, it will recibe the result of the filter.

 Resolving the filter function appliyed to our "friends" array.

 the filter function take the "friends" array and evaluate each value of it.
 each iteration is load in the temp var called "age".
 Using arrow function we pass the age to evaluate if it is greatter than 18.
 if the condition result true, then a new array is generate as a temp array.
 The values that result true are added to the temp array.
 When the funtion filter finish to evaluate all the positions in the array, the temp array is load in the "canDrink" variable.
 Using Template String we show in the console the result.

 Only the values "18" and "19" are greatter or equal than 18.

 in the second console.log I wan to show you the new array generated.

*/