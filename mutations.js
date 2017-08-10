
function mutation(mutationsArray) {
  // find each string in the array 
  // convert to lowercase so no sorting or matching probs 
  var acceptableLetters = mutationsArray[0].toLowerCase();
  var checkingLetters = mutationsArray[1].toLowerCase();

  // sort alphabetically to check order 
  var sortedAcceptable = acceptableLetters.split("").sort();
  var sortedChecking = checkingLetters.split("").sort();

  // remove duplicates 


  // n


  return acceptableLetters.includes(checkingLetters);
  // acceptable letter has to be in checking 
}

console.log(mutation(["hello", "hey"]));
