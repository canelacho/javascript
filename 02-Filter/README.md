#  .filter()
Folder: 02-Filter
- index.html
- /js
  - script.js


### Theory
The **filter()** method creates a new array with all elements that pass the test implemented by the provided function.
[by : developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)


### Code
```javascript
// We create an Array of ages
const friends = [18, 16, 19, 15, 16, 10]

// Now we apply the filter method.  It will return a new array with the results.
const canDrink = friends.filter( age => age >= 18 )

// We show the result
console.log(`Ages that can legally drink : ${canDrink}` )

// Now, we can see the array in his original form in other line.
console.log(canDrink)
```

# Explanation:

1. Firs we create a new Array with values that represent ages of friends: `const friends = [18, 16, 19, 15, 16, 10]`
2. Creating a new variable with name `canDrink`, it wlil recibe the result of the `filter()` method.
3. Resolving the `filter()` method applied to our "`friends`" array.
4. The `filter()` method take the "`friends`" array and evaluate each value of it.
5. Each iteration is load in the temp var called "`age`".
6. Using arrow function we pass the age to evaluate if it is greatter than "18".
7. If the condition result true, then a new array is generate as a temp array.
8. The values that result true are added to the temp array.
9. When the funtion filter finish to evaluate all the positions in the array, the temp array is load in the "`canDrink`" variable.
10. Using Template String we show in the console the result.
11. Only the values "18" and "19" are greatter or equal than 18.
12. In the second console.log we can see the new array generated.