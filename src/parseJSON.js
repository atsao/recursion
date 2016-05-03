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
    console.log(json);
    var colonIndex = json.indexOf(':');
    console.log(colonIndex);
    if (colonIndex > 0) {
      var key = json.slice(2, colonIndex - 1);
      var value = json.slice(colonIndex + 3, json.length - 2);
      result[key] = value;
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
