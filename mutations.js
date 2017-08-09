
function mutation(arr) {
  var acceptableLetters = arr[0].toLowerCase();
  var checkingLetters = arr[1].toLowerCase(); 

  return checkingLetters.includes(acceptableLetters);

}

console.log(mutation(["hello", "hey"]));
