# Why I love Javascript!!!

A long time ago, I started develop for the web with ASP and PHP but I was looking for a lenguage to make great things and the only one who offers me to work in the Front-end and the Backend was Javascript.  It is everywhere, is nice, have a lot of peolple collaborating around the world... it was easy, don't you think? The choosed one was JS.

Today I consider myself as a Fullstack developer, JS evangelizer and lover of JS Technology, I enjoy a lot share with others my knowledge and teach how to use it!

I use MEVN Stack but maybe tomorrow I'll be using other JS stuff, maybe I will use other tools because I'm always learning and improving myself, and of course, I'm always open to new technologies.

This is July 2018, I will try to use the latest functions, methods and options in JS. This help me to memorize details and structures. Repeating is the best way to remember something and improve your learning. If you find this information in the future, maybe isn't new stuff but belive me, right now this features are so cool!



### I will show you things like:
- "Template String / Template Literal"
- "strict mode"
- "Methods with Array and Objects"
- "Arrow functions"
- "Destructuring Array and Objects" 



What do you need to know before check this material ?
1. An Internet Browser like Google Chrome or Mozilla Firefox (because you will need use the developers tools like the console to watch the execution of the exercises).
2. A text editor like Visual Studio Code, Atom, Sublime Text, WebStorm, NotePad, Vim, etc... ii's up to you but you will need one to watch the files downloaded!.
3. At least you have to know how to download projects from git, obvious, you should download this material.
4. Enjoy the class!




The structure of the all examples is:
> Each folder have the name of the topic to explain and it contain an index.html file who call the scripts.js in the /js folder that have the javascript code to run.


---

#  .filter()
Folder: 01-filter
- index.html
- /js
  - script.js

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
