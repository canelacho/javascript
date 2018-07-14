# Why I love Javascript!!!

Métodos útiles con Array y Object en Javascript

A lot of new things make easier ourt life when we have to code.

I try to use the latest functions and options, so I can create an current behavior, repeating is the best way to remember something and improve your learning.

I will show you things like:
"Template String / Template Literal"
"Arrow functions"
"strict mode"
"Methods with Array and Objects"
"Destructuring Array and Objects" 


What do you need to know before check this material ?
1 - An Internet Browser like Google Chrome or Mozila Firefox (not other because you will need to use the console to watch the exercises).
2 - An text editor like Visual Studio Code, Atom, Sublime Text, WebStorm, NotePad, Vim, etc... ii's up to you but you need one!.
3 - Enjoy the material!



The structure of the all the examples is:
Each folder have a name and contain an index.html file who call the scripts.js in the /js folder that have the javascript code to run.

---

#  .filter()
Folder: 01-filter
\- index.html
\- /js
  \- script.js

### Code
```javascript
// We create an Array of ages
const friends = [18, 16, 19, 15, 16, 10];

// Now we apply the filter method.  It will return a new array with the results.
const canDrink = friends.filter( age => age >= 18 );

// We show the result
console.log(`Ages that can legally drink : ${canDrink}` )

// Now, we can see the array in his original form in other line.
console.log(canDrink)
```

# Explaining:

1. Firs we create a new Array with values that represent ages of friends: `const friends = [18, 16, 19, 15, 16, 10]`
2. Creating a new variable with name `canDrink`, it wlil recibe the result of the fliter.
3. Resolving the filter function appliyed to our "`friends`" array.
4. The filter function take the "`friends`" array and evaluate each value of it.
5. Each iteration is load in the temp var called "`age`".
6. Using arrow function we pass the age to evaluate if it is greatter than "18".
7. If the condition result true, then a new array is generate as a temp array.
8. The values that result true are added to the temp array.
9. When the funtion filter finish to evaluate all the positions in the array, the temp array is load in the "canDrink" variable.
10. Using Template String we show in the console the result.
11. Only the values "18" and "19" are greatter or equal than 18.
12. In the second console.log I wan to show you the new array generated.
