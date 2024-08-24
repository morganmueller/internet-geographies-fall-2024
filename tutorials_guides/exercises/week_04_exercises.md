 Like last week's set of questions, the goal of this problem set is to get you comfortable with the basic elements of programming in Javascript. Try not to google for answer to the problem but instead, if you need assistance, try searching for details on how different components work and see if that can assist you. I would recommend using the Mozilla developer documentation for assistance. Linked [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

 ## Arrays

You should consult the [Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) for reference on any method with which you are not familiar.


### Array for practice set numbers 1-7.
```js
let message = ['Optimism', 'is', 'a', 'strategy', 'for', 'making', 'a', 'better', 'future.', 'Because', 'unless', 'you', 'believe', 'that', 'the', 'future', 'can', 'be', 'better,', 'you', 'are', 'unlikely', 'to', 'step', 'up', 'and', 'take', 'responsibility', 'for', 'making', 'it', 'so.'];
```
1. Use an array method to remove the last string of the array `message`.

2.  You can check your work by logging the `.length` of the array.

At this point, the length should be 1 less than the original length.

3. Use an array method to add the words `by`, `Noam` and `Chompsky` as separate strings to the end of the `message` array.

4. Change the word `making` to the word `creating` by accessing the index and replacing it.


5. Use an array method to add the string `Pseudo-Quote:` to the beginning of the array.

6. Use an array method to remove the strings `'can'`, `'be'`, `'better,'`, and replace them with the  string `'will'`, `'be'` `'prosperous',`.

8. On one line, use `console.log()` and `.join()` to print the secret message as a sentence.

> 'Vision in this technological feast becomes unregulated gluttony; all seems not just mythically about the god trick of seeing everything from nowhere, but to have put the myth into ordinary practice. And like the god trick, this eye fucks the world to make techno-monsters.'

9. Create an array of the words in the above string (make sure to split the string up by each word). Name the array `parArray`. 

10. How many words are in the array?

11. What is the 10th word in the array?


12. Loop through the following array and print out each value in it. Try using a regular `for` loop and a `for of` loop

```js
const dogBreeds = ['Malamute', 'Akita', 'Terrier', 'Irish Wolfhound', 'Vizsla', 'Kelpie', 'Saint Bernard', 'Shiba Inu', 'Shih Tzu'];
```
13. Add the 'Daschund' dog breed to the end of the array.

14. __BONUS__: Loop through the `dogBreeds` array and create a new array with the dogs listed in alphabetical order. Note this will require an array method that we didn't cover! Check out the mozilla docs for help: [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)



## Objects

1. Lookup and print the value for `movie` in the `movieDir` object literal.

```js

movieDir = {
    director: 'Harun Farocki',
    movie: 'Still Life',
    date: '1997'
};
```

2. Add a `duration` variable to the `movieDir` object with a value of `58`.


3. Call the method in the code below:

```js
let myObj = {
  sayHello() {
    return 'Hello there!';
  }
}
```


4. Create an expression which will evaluate to `apples`.

```js
const refrigerator = {
  dairy: ['cheese', 'milk', 'sour cream'],
  temperature: 35,
  'produce drawer': {
    vegetables: ['lettuce', 'broccoli', 'peas'],
    fruit: ['apples', 'berries', 'grapes'] 
  }
}
```