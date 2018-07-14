// 'strict' : A good practice to not use undeclared variables.
'strict' 



// We create an Array with Prices
const prices = [7,12,.04,8,10]

// We apply map method to manipulate each value and generate a new array adding the $ at each price.
const priceWithSymbol = prices.map( price => '$_' + price)

// We show the result
console.log(`New array with the symbol : ${ priceWithSymbol }`)

// Now, we can see the array in his original form in other line.
console.log(priceWithSymbol)


/* 

Explanation:

  Firs we create a new Array with values that represent random prices:
  const prices = [7,12,.04,8,10]

  We create a new variable with name priceWithSymbol, it will recibe the result of the map() method.

  Resolving the map() method appliyed to our "prices" array.

  The map() method takes the "prices" array and evaluate each value of it.
  Each iteration is load in the temp var called "price".
  Using arrow function we pass the price to add the dollar sign format.
  There is no condition, the code apply to each value the format.
  When the map() method finish to evaluate all the positions in the array, the temp array is load in the "priceWithSymbol" variable.
  Using Template String we show in the console the result.

  The new array show each value with the $ sign at first.

  In the second console.log We can see the new array generated.

*/
