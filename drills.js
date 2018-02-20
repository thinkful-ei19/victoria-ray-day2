// function max(numbers) {
//     let i = 0;
//     let currentMax = numbers[0];
//     while (i < numbers.length) {
//         if (currentMax < numbers[i]) {
//             currentMax = numbers[i];
//         }
//         i++;
//     }
//     return currentMax;
// }

// console.log(max([5, 10, 2, 14, 15]));

/*
function min(numbers) {
    let i = 0;
    let currentMin = numbers[0];
    while (i < numbers.length) {
        if (currentMin > numbers[i]) {
            currentMin = numbers[i];
        }
        i++;
    }
    return currentMin;
}

console.log(min([3, 5, 7, 9, 12])); */

// function average(numbers) {
//   var sum = 0;
//   numbers.forEach(function(i){
//     sum = sum + i;
//   })
//   return sum / numbers.length
// }
// console.log(average([3, 5, 7, 9, 12]));



// function repeat(fn, n) {
//    for (let i = 0; i < n; i++) {
//        fn();
//    }
// }
//
// function hello() {
//     console.log('Hello world');
// }
//
// function goodbye() {
//     console.log('Goodbye world');
// }
//
// repeat(hello, 5);
// repeat(goodbye, 5);



// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function(name) {
    // This is a "predicate function" - it's a function that only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']

function filter(arr, fn) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++){
    if (fn(arr[i]) === true){
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
