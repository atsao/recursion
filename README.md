# Recursion

Recursion is a technique for solving problems wherein a function makes calls to itself. By doing so, it can complete a small amount of the processing, and delegate the rest of the problem to the recursive calls.

Consider the following function:

```
var eat = function(meal){
  console.log('meal before bite:', meal);
  console.log('now eating', meal.pop());
  if(meal.length){
    eat(meal);
  } else {
    console.log('done with the meal!');
  }
}
```

Which produces this output:

```
eat(['soup', 'potatoes', 'fish']);
// => meal before bite: ["soup", "potatoes", "fish"]
// => now eating fish
// => meal before bite: ["soup", "potatoes"]
// => now eating potatoes
// => meal before bite: ["soup"]
// => now eating soup
// => done with the meal!
```

You can use recursion on problems where smaller parts of the problem look the same as the larger problem as a whole.


In this sprint, you'll be reimplementing parts of the browser that involve recursion.  In so doing, don't use the things you're reimplementing, or any other built-in shortcuts that make these problems trivial. (You'll probably know if you're cheating, but feel free to ask us if you're not sure.)

* Note: The tests in this repo are written using [Jasmine](http://pivotal.github.io/jasmine/), a JavaScript testing framework.

(Curious fact: many browsers don't have any of these functions in them, and people do need to reimplement them.  When we reimplement new browser functionality in older browsers, it's called a "polyfill".)

## Basic Requirements

- [ ] Replace `stringifyJSON` with your own function in `src/stringifyJSON.js`, and make the specs pass.
- [ ] Implement `getElementsByClassName` with your own function in `src/getElementsByClassName.js`, and make the specs pass.
  - [ ] You should use `document.body`, `element.childNodes`, and `element.classList`

## Extra Credit:

- [ ] Replace `parseJSON` with your own function in `src/parseJSON.js`, and make the specs pass.
  - [ ] Use a recursive descent parser.
  * Resources:
    * http://progzoo.net/wiki/Recursive_Descent_Parser_Tutorial
    * Cmd + F "A JSON Parser" on http://oreilly.com/javascript/excerpts/javascript-good-parts/json.html
  * Note: This is a lot of work.
