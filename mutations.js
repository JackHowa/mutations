function mutation(mutationsArray) {
  // find each string in the array 
  // convert to lowercase so no sorting or matching probs 
  var acceptableLetters = mutationsArray[0].toLowerCase();
  var checkingLetters = mutationsArray[1].toLowerCase();

  // sort alphabetically to check order 
  var sortedAcceptable = acceptableLetters.split("").sort();
  var sortedChecking = checkingLetters.split("").sort();

  // remove duplicates 
  var uniqueAcceptableArray = sortedAcceptable.filter(function(element, position) {
    return sortedAcceptable.indexOf(element) == position;
  });
  var uniqueCheckingArray = sortedChecking.filter(function(element, position) {
    return sortedChecking.indexOf(element) == position;
  });

  // join("") after the arrays are done

  var acceptable = uniqueAcceptableArray.join("");
  var checking = uniqueCheckingArray.join("");
  
  console.log(acceptable);
  console.log(checking);

  return acceptable.includes(checking);
  // acceptable letter has to be in checking 
}

  mutation(["floor", "for"]);