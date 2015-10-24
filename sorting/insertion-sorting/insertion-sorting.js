// Run docker-compose run --rm javascript node sorting/insertion-sorting/insertion-sorting.js

var assert = require('assert');

function insertionSort (array) {
  // Start iteration from second element at position 1
  for (var i=1; i<array.length; i++) {
    var value = array[i];
    var j = i - 1;

    // Transpose element of sorted sequence if they are bigger than value
    while (j >= 0 && array[j] > value) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = value;
  }
}

var data = [10, 2, 1, 23, 12, 32, 29];
console.log('input:', data);
insertionSort(data);
console.log('output:', data);

assert.deepStrictEqual(data, [1, 2, 10, 12, 23, 29, 32]);
