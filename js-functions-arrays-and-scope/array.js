let words = ['apple', 'dog', 'computer', 'cup']

function displayWordLengths (words) {
  for (let word of words) {
    console.log(`${word} has ${word.length} characters.`)
  }
}

displayWordLengths(words);


let numbers = [3,4,5,6, 'gh',7];

function sum (numbers) {
  let total = 0;
  for (let num of numbers) {
    if (typeof num === 'number') {
      total += num;
    }
  }
  return total;
}
console.log(numbers)
console.log(sum(numbers))



/* */
