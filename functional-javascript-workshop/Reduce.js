/**
 * Created by mmaia on 3/13/16.
 */
'use strict';


var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];


//THIS IS THE PROVIDED ANSWER ------------------------------------------
//function countWords(arr) {
//  return arr.reduce(function(countMap, word) {
//    countMap[word] = ++countMap[word] || 1; // increment or initialize to 1
//    return countMap;
//  }, {}); // second argument to reduce initialises countMap to {}
//}
//------------------------------------------------------------------------

function countWords(inputWords) {
  var result = {};
  inputWords.reduce(function(previousValue, currentValue, currentIndex, array){
    result[currentValue] = ++result[currentValue] || 1;
    console.log('previousValue ' + previousValue + ' currentValue ==> ' + currentValue);
    console.log('current index: ' + currentIndex);
    console.log('array: ' + array);
    return currentValue;
  }, 0);
  console.log('---------------------------');
  console.log(result);
  return result;
}

countWords(inputWords);

module.exports = countWords;