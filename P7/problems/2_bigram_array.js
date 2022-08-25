/*******************************************************************************
Write a function bigramArray(sentence) that takes in a sentence string and returns
the an array of containing all bigrams in the sentence. A bigram is a pair of
consecutive words of a sentence.

Examples:

bigramArray('today is a great day') => [ 'today is', 'is a', 'a great', 'great day' ]
bigramArray('bigrams are very useful') => [ 'bigrams are', 'are very', 'very useful' ]
*******************************************************************************/

function bigramArray(sentence) {
  let words = sentence.split(' ')
  let newArr = []
  for (let i = 0; i < words.length - 1; i++) {
    newArr.push(words[i] + ' ' + words[i + 1])
  }
  return newArr
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = bigramArray;
