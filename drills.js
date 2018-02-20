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



// // Return only names that begin with 'R'
// const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// const filteredNames = filter(myNames, function(name) {
//     // This is a "predicate function" - it's a function that only returns a boolean
//     return name[0] === 'R';
// });

// console.log(filteredNames) // => ['Rich', 'Ray']

// function filter(arr, fn) {
//   var newArray = [];
//   for (var i = 0; i < arr.length; i++){
//     if (fn(arr[i]) === true){
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray;
// }


// function hazardWarningCreator(typeOfWarning) {
//     let warningCounter = 0;
//     return function(location) {
//         warningCounter++;
//         console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
//         console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
//     }
// }
//
// const rocksWarning = hazardWarningCreator('Rocks on the Road');
// const iceWarning = hazardWarningCreator('Icy roads');
// const robotWarning = hazardWarningCreator('Terminators on the Road');
//
// rocksWarning('Main St and Pacific Ave');
// // => DANGER There is a Rocks on the Road hazard at Main St and Pacific Ave
// // => The Rocks on the Road hazard has triggered 1 time(s) today!
//
// rocksWarning('Centinela Ave and Olympic Blvd');
// // => DANGER There is a Rocks on the Road hazard at Centinela Ave and Olympic Blvd
// // => The Rocks on the Road hazard has triggered 2 time(s) today!
//
// // Invoke the other hazard creators you instantiated, too
//
// robotWarning('Seattle Ave and London Blvd');


// function turtleSteps(arr){
//   arr.filter(function(steps) {
//     return steps[0] >= 0 && steps[1] >= 0
//   }).map(function(val) {
//     return val[0] + val[1]
//   }).forEach(function(val) {
//     console.log(`Steps Taken: ${val}`)
//   })
//   }

// console.log(turtleSteps([[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]))


let string = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
let arr = string.split(' ');

const message = function(accumulator, currentValue) {
  if(currentValue.length === 3) {
    return accumulator + ' ';
  } else {
    return accumulator + currentValue[currentValue.length - 1].toUpperCase();
  }
}

// console.log(array1.reduce(reducer));

console.log(arr.reduce(message));