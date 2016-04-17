// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // getElementsByClassName
  // This function should return an array of elements that have a class of className

  // Declare empty array to store elements that have the target className
  var elements = [];
  
  // This function will check elements for the target className and may be called recursively
  function getElements(element) {
    // Grab the child nodes of the given element
    var nodes = element.childNodes;
    
    // Ensure the element has child nodes
    if (nodes.length !== 0) {
      // Loop through each child node
      for (var i = 0; i <= nodes.length - 1; i++) {
        // Ensure the child node has a defined class or list of classes
        if (nodes[i].classList !== undefined && nodes[i].classList) {
          // Loop through each class list
          for (var c = 0; c <= nodes[i].classList.length - 1; c++) {
            // Check the classList for the target className
            if (nodes[i].classList[c].includes(className)) {
              // Push to the result array
              elements.push(nodes[i]);
            }
          }
        }

        // If the child node has nested child nodes, recursively call function to check through those children
        if (nodes[i].childNodes.length > 0) {
          getElements(nodes[i]);
        }
      }
    }
  }

  // Initialize grabbing elements that have the target className from the top of the DOM
  getElements(document);

  return elements;
};
