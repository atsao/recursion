// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var results = [];

  var checkChildNodes = function (element) {

    for (var i = 0; element.classList && i < element.classList.length; i++) {
      if (element.classList[i] === className) {
        results.push(element);
      }
    }

    for (var i = 0; i < element.childNodes.length; i++) {
      checkChildNodes(element.childNodes[i]);
    }
  };

  checkChildNodes(document.body);

  return results;
};