// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // Base cases - primitive data types
  // Strings - no case needed
  // Numbers
  console.log('Original json: ', json);

  if (json[0] === '[') {
    console.log(json);
    return [];
  }

  if (json[0] === '{') {
    var result = {};
    var startIndex = 0; // will be index of where comma is located
    var colonIndex = json.indexOf(':');
    var endIndex = json.indexOf(',', startIndex); // will be index of next comma and eventually json.length - 2

    if (endIndex === -1) {
        endIndex = json.length - 1;
      }

    console.log(json);
    console.log('Start index init:', startIndex);
    console.log('Colon index init:', colonIndex);
    console.log('End index init:', endIndex);
    
    while(true) {
      if (colonIndex > 0) {
        var key = json.slice(startIndex + 2, colonIndex - 1);
        var value = json.slice(colonIndex + 3, endIndex - 1);
        result[key] = value;
      }
      startIndex = endIndex;
      console.log('Start index:', startIndex);

      colonIndex = json.indexOf(':', startIndex);
      console.log('Colon index:', colonIndex);
      if (colonIndex === -1) {
        break;
      }
      endIndex = json.indexOf(',', startIndex + 1);
      console.log('End index:', endIndex);
      if (endIndex === -1) {
        endIndex = json.length - 1;
      }
    }
    
    console.log(result);
    return result;
  }



  // if (parseInt(json)) {
  //   console.log(parseInt(json));
  //   // return parseInt(json);
  // }
  
  // Boolean
  // if (json === "true") {
    //|| json === "false") {
    // console.log(json);
    // return json ? true : false;
    // console.log(json ? true : false);
    // result = true;
    // result = json ? true : false;
  // }

  // Null

  // Recursive cases
  // Array
  // Object
};
