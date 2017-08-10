function mutation(mutationsArray) {
  // find each string in the array 
  // convert to lowercase so no sorting or matching probs 
  var acceptableLetters = mutationsArray[0].toLowerCase().split("");
  var checkingLetters = mutationsArray[1].toLowerCase().split("");

  // remove duplicates 
  var uniqueAcceptableArray = acceptableLetters.filter(function(element, position) {
    return acceptableLetters.indexOf(element) == position;
  });
  var uniqueCheckingArray = checkingLetters.filter(function(element, position) {
    return checkingLetters.indexOf(element) == position;
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