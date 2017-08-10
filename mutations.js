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
  
  for (i = 0; i < uniqueCheckingArray.length; i++) {
    // index of returns -1 when checking[i], or one letter,
    // not found in whole string of checking 
    if (uniqueAcceptableArray.indexOf(uniqueCheckingArray[i]) === -1) {
      return false; 
    }
  }

  // if no non-matches found, then return true at the end 
  return true; 
}

  mutation(["floor", "for"]);