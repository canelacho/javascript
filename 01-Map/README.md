#  .map()
Folder: 01-Map
- index.html
- /js
  - script.js


### Theory
The **map()** method creates a new array with the results of calling a provided function on every element in the calling array.
[by : developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)


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
