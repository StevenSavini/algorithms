function reverseString(str) {
  var firstStep = str.split('');
  var secondStep = firstStep.reverse();
  var finalStep = secondStep.join('');
  return finalStep;
}

reverseString("hello");
