# Why I love Javascript!!!

A long time ago, I started develop for the web with ASP and PHP but I was looking for a language to make great things. At that time, there was not way to do things in the Back-end and the Front-end with just one language, but with the time, javascript was growing and when the time came, NodeJS appeared and everything change. The only language who offers me to work in the Front-end and the Backend was Javascript.  It is everywhere, is nice, have a lot of people collaborating around the world... it was easy, don't you think? The choosed one was JS.

Today I consider myself as a Fullstack developer, JS evangelizer and lover of JS Technology, I enjoy a lot share with others my knowledge and teach how to use it!

I use MEVN Stack but maybe tomorrow I'll be using other JS stuff because I'm always learning and improving myself, and of course, I'm always open to new technologies.

This is July 2018, I will try to use the latest functions, methods and options in JS. This help me to memorize details and structures. Repeating is the best way to remember something and improve your learning. If you find this information in the future, maybe isn't new stuff but belive me, right now this features are so cool and make our lives easier!

If you want to watch the videos go to ["Canelacho's Youtube Channel"](https://www.temp.com)  - Videos are in Spanish.

### I will show you things like:
- "What is? and Why use strict mode"
- "Use Template String / Template Literal"
- "Methods with Array and Objects" ( filter(), map(), reduce(), foreach(), some(), every(), and others...)
- "Arrow functions"
- "Destructuring Array and Objects" 



What do you need to know before check this material ?
1. We need an Internet Browser like Google Chrome or Mozilla Firefox (because you will need use the developers tools like the console to watch the execution of the exercises).
2. Also a text editor like Visual Studio Code, Atom, Sublime Text, WebStorm, NotePad, Vim, etc... it's up to you but you will need one to watch the files downloaded!.
3. At least you have to know how to download projects from git, obvious, you should download this material.
4. Using this methods you can write clean and redeable code instead of using for, loop or while.
5. Some of this methods are immutable, a good practice to manipulate data. 
6. Enjoy the material!


> Each folder have the name of the topic to explain and it contain an index.html file who call the scripts.js in the /js folder that have the javascript code to run, an explanation of each part and a README.md file.


---


#  .forEach()
Folder: 00-ForEach
- index.html
- /js
  - script.js


### Theory
The **forEach()** method executes a provided function once for each array element.
> [by : developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)


### Code
```javascript
// We create an Array of animals
const animals = ['Dog','Cat','Mouse','Bird']

// Now we apply the forEach() method to the animals array.
animals.forEach( animal => console.log(animal) )
// For each value of the array is loaded in the "animal" argument.
// Each "animal" will be show in the console.
```

# Explanation:

1. Firs we create a new Array with values that represent animals: `const animals = ['Dog','Cat','Mouse','Bird']`
2. Resolving the `forEach()` method applied to our "`animals`" array.
3. The `forEach()` method take the "`animals`" array and evaluate each value.
4. Each iteration is processed one by one.
5. Using arrow function we pass "`animal`" as an argument to show in console the type of each animal on the array.
6. When the `forEach()` method finish to evaluate all the positions in the array, it finish.


---


#  .map()
Folder: 01-Map
- index.html
- /js
  - script.js


### Theory
The **map()** method creates a new array with the results of calling a provided function on every element in the calling array.
> [by : developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)


### Code
```javascript
// We create an Array with Prices
const prices = [7,12,.04,8,10]

// We apply map method to manipulate each value and generate a new array adding the $ at each price.
const priceWithSymbol = prices.map( price => '$_' + price)

// We show the result
console.log(`New array with the symbol : ${ priceWithSymbol }`)

// Now, we can see the array in his original form in other line.
console.log(priceWithSymbol)
```

# Explanation:

Firs we create a new Array with values that represent random prices:
  `const prices = [7,12,.04,8,10]`

  1. We create a new variable with name priceWithSymbol, it will recibe the result of the `map()` method.
  2. Resolving the `map()` method applied to our "`prices`" array.
  3. The `map()` method takes the "`prices`" array and evaluate each value of it.
  4. Each iteration is load in the temp var called "`price`".
  5. Using arrow function we pass the price to add the dollar sign format.
  6. There is no condition, the code apply to each value the format.
  7. When the `map()` method finish to evaluate all the positions in the array, the temp array is load in the "`priceWithSymbol`" variable.
  8. Using Template String we show in the console the result.
  9. The new array show each value with the $ sign at first.
  10. In the second console.log we can see the new array generated.


---

#  .filter()
Folder: 02-Filter
- index.html
- /js
  - script.js


### Theory
The **filter()** method creates a new array with all elements that pass the test implemented by the provided function.
> [by : developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)


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


---


#  .reduce()
Folder: 03-Reduce
- index.html
- /js
  - script.js


### Theory
The **reduce()** method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
> [by : developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)


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

1. Firs we create a new Array with values that represent simple number: `const numbers = [5, 14, 1, 10]`
2. Creating a new variable with name `total`, it wlil recibe the result of the `reduce()` method.
3. Resolving the `reduce()` method applied to our "`numbers`" array.
4. The `reduce()` method take the "`numbers`" array and evaluate each value of it.
5. Each iteration is load in the temp var called "`currentValue`".
6. Using arrow function we pass two arguments "`currentValue`" and "`accumulator`" to accumulate each iterate value in the "`accumulator`" variable.
7. When the `reduce()` method finish to evaluate all the positions in the array, the result in the temp array is load in the "`total`" variable.
8. Using Template String we show in the console the result.
9. In the second console.log we can see the result.


---


#  .some()
Folder: 04-Some
- index.html
- /js
  - script.js


### Theory
The **some()** method tests whether at least one element in the array passes the test implemented by the provided function.
> [by : developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)


### Code
```javascript
// We create an Array of titles
const roles = ['Student','Teacher','Principal','Student','Teacher']

// Now we apply the some)() method and save the result in a variable called "roles".

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

1. Firs we create a new Array with values that represent simple number: `const numbers = [5, 14, 1, 10]`
2. Creating a new variable with name `total`, it wlil recibe the result of the `reduce()` method.
3. Resolving the `reduce()` method applied to our "`numbers`" array.
4. The `reduce()` method take the "`numbers`" array and evaluate each value of it.
5. Each iteration is load in the temp var called "`currentValue`".
6. Using arrow function we pass two arguments "`currentValue`" and "`accumulator`" to accumulate each iterate value in the "`accumulator`" variable.
7. When the `reduce()` method finish to evaluate all the positions in the array, the result in the temp array is load in the "`total`" variable.
8. Using Template String we show in the console the result.
9. In the second console.log we can see the result.


