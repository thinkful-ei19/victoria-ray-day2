// function max(num) {
//     return num.reduce((highest, i) => {
//         if (i > highest) {
//             return i;
//         }
//     },0);

// }

// console.log(max([5, 10, 2, 13, 15]));

function max(numbers) {
    let i = 0;
    let currentMax = numbers[0];
    while (i < numbers.length) {
        if (currentMax < numbers[i]) {
            currentMax = numbers[i];
        }
        i++;
    }
    return currentMax;
}

console.log(max([5, 10, 2, 14, 15]));