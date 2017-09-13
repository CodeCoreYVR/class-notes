const dany = {
  firstName: 'Daenerys', // In JavaScript, we use camelCase as a convention to
  // name everything including property names
  'last name': 'Targaryen', // Property can't have special characters or spaces
  // unless they're declared as a string
  titles: [
      'Queen of Meereen',
      'Khalesi of the Great Grass Sea',
      'Queen of the Seven Kingdoms'
  ] // Any type of value can be associated to a property in an object
  // including other objects, arrays, etc.
};

// All properties in objects are strings. No exception, except for 1.
let mySentence = 'This is my this sentence and I wrote it';
function wordLengths (sentence) {
  let words = {};
  for (let word of sentence.split(' ')) {
    // Property names are case sensitive. To avoid duplicates in this case,
    // we normalize making them all lowercased
    words[word.toLowerCase()] = word.length;
  }
  return words;
}

console.log(wordLengths(mySentence));

function countChars (sentence) {
  let charCounts = {};

  for (let char of Array.from(sentence)) {
    const lowerChar = char.toLowerCase();
    if (charCounts[lowerChar]) {
      charCounts[lowerChar] += 1
    } else {
      charCounts[lowerChar] = 1
    }
  }

  return charCounts;
}

console.log(countChars(mySentence));

let obj = {a: 1, b: 2, c: 3, d: 4};

// To iterate of objects, use the for .. in loop. This loop will
// receive on every iteration a property. Get its assigned value
// by using [] notation. (i.e. obj[property])
for (let property in obj) {
  console.log('property:', property, 'value:', obj[property])
}

// Iterating over objects is not as powerful as iterating over arrays.
// Object do have as many utilities. It's often a good idea convert your
// object to an array to manipulate it. This is only useful when reading
// and not mutating the original object.
for (let [property, value] of Object.entries(obj)) {
  cosole.log('property:', property, 'value:', value)
}




/* */
