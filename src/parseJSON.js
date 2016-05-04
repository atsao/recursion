// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  console.log('Original json: ', json);

  // Base cases - primitive data types
  // Strings - no case needed

  // Numbers
  if (!!parseInt(json)) {
    console.log('number');
    return parseInt(json);
  }
  
  // Boolean
  if (json === "true") {
    console.log('boolean: true');
    return true;
  }

  if (json === 'false') {
    console.log('boolean: false');
    return false;
  }

  // Null
  if (json === 'null') {
    console.log('null');
    return null;
  }
  

  // Recursive cases
  // Array
  if (json[0] === '[') {
    console.log('array');
    // if the array is empty, return an empty array
    if (json.length === 2) {
      return [];
    }
    
    // remove the brackets
    var strArrNoBrackets = json.replace(/(\[|\])/g, '');
    // return a new array pushing in each item without the opening and closing quotation marks
    var splitArr;
    if (strArrNoBrackets.indexOf(', ') !== -1) {
      splitArr = strArrNoBrackets.split(', ');
    } else {
      splitArr = strArrNoBrackets.split(',');
    }
    return _.map(splitArr, function(element){
      if (element[0] === '"') {
        return element.slice(1, element.length - 1);
      } else {
        return parseJSON(element.slice(0, element.length));
      }
    });

    // Slice version attempt:

    // var result = [];
    // var arrayStart = json.indexOf('[');
    // var arrayEnd = json.indexOf(',');
    // if (arrayEnd === -1) {
    //   arrayEnd = json.length - 1;
    // }
    // while (arrayStart <= json.length - 1) {
    //   var element = json.slice(arrayStart + 1, arrayEnd);
    //   result.push(element);

    //   arrayStart = arrayEnd;
    //   arrayEnd = json.indexOf(',');
    //   if (arrayEnd === -1) {
    //     arrayEnd = json.length - 1;
    //   }
    // }
    // return result;

  }

  // Object
  if (json[0] === '{') {
    // console.log('object');
    var result = {};
    var startIndex = -1; // will be index of where comma is located
    var colonIndex = json.indexOf(':');
    var endIndex = json.indexOf(',', startIndex + 1); // will be index of next comma and eventually json.length - 2

    if (endIndex === -1) {
        endIndex = json.length - 1;
      }

    // console.log(json);
    // console.log('Start index init:', startIndex);
    // console.log('Colon index init:', colonIndex);
    // console.log('End index init:', endIndex);
    
    while(true) {
      if (colonIndex > 0) {
        var key = json.slice(startIndex + 3, colonIndex - 1);
        var value;
        if (json[colonIndex + 2] === '"') {
          value = json.slice(colonIndex + 3, endIndex - 1);
        } else {
          value = json.slice(colonIndex + 2, endIndex);
        }
        // console.log('Value:', value);
        // console.log('Recursing: ', parseJSON(value));
        result[key] = parseJSON(value);
      }
      startIndex = endIndex;
      // console.log('Start index:', startIndex);

      colonIndex = json.indexOf(':', startIndex);
      // console.log('Colon index:', colonIndex);
      if (colonIndex === -1) {
        break;
      }
      endIndex = json.indexOf(',', startIndex + 1);
      // console.log('End index:', endIndex);
      if (endIndex === -1) {
        endIndex = json.length - 1;
      }
    }
    
    // console.log('Object final result: ', result);
    return result;
  }

  // console.log('other (string hopefully?? didn\'t catch in any other if statements');
    // console.log(json);
  return json;

};
