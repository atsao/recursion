// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = '';

  // Base case #1: if obj is null, return the literal string 'null'
  if (obj === null) {
    return 'null';
  }

  // Base case #2: if obj is a function or undefined, return undefined
  // JSON.stringify does not work on these types
  if (typeof obj === "function"  || obj === undefined) {
    return undefined;
  }

  // Base case #3: if obj is a string, return it in quotes
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  // If obj is an Array object, enter recursion is applicable
  if (typeof obj === 'object' && Array.isArray(obj)) {
    if (obj.length === 0) {
      // If obj is empty, return a string of an empty array
      return '[]';
    } else if (obj.length === 1) {
      // If obj contains only one element, recursively call function on that element
      // Return it as an array string
      return '[' + stringifyJSON(obj[0]) + ']';
    } else {
      // If obj contains multiple elements, recursively call function on each element
      // Concatenate result of recursion with a comma to the result variable
      for (var i = 0; i <= obj.length - 1; i++) {
        result += stringifyJSON(obj[i]) + ',';
      }

      // Remove the last comma in the result variable
      result = result.replace(/,(\s+)?$/, '');

      // Return result as an array string
      return '[' + result + ']';
    }
  }


  // If obj is an object but not an Array
  if (typeof obj === 'object' && !Array.isArray(obj)) {
    // If obj is empty, return a string of an empty object
    if (Object.keys(obj).length === 0) {
      return '{}';
    } else {
      // Loop through each property of obj
      for (var k in obj) {
        // If the value at key k is a function, return a string of an empty object
        if (typeof obj[k] === 'function') {
          return '{}';
        } else {
          // If obj contains multiple key-value pairs, recursively call function on each
          // Build string with key, colon, value, and comma
          // Concatenate result of recusion to result variable
          result += stringifyJSON(k) + ':' + stringifyJSON(obj[k]) + ',';
        }
      }

      // Remove the last comma in the result variable
      result = result.replace(/,(\s+)?$/, '');

      // Return result as an object string
      return '{' + result + '}';
    }
  }
  
  // If none of the above qualify, return the obj as a string
  return obj.toString();
  
};
