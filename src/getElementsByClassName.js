// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  

  var results = [];

  var checkChildNodes = function (element) {
    
    console.log(element.className===className);
    console.log(element);

    if (element.className === className) {
      results.push(element);
    }

    console.log(results);

    for (var i = 0; i < element.childNodes.length; i++) {
        checkChildNodes(element.childNodes[i]);
      }
  }

  checkChildNodes(document.body);
  // console.log(results);


  return results;
};
console.log('Expected result: ', document.getElementsByClassName('targetClassName'));
console.log('Our result: ', getElementsByClassName('targetClassName'));