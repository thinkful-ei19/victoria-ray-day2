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

console.log(min([3, 5, 7, 9, 12]));