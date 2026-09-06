function makeArray(firstArray, secondArray, maxLength) {
    const newArr = [];
    for (let i = 0; i < maxLength; i++) {
        if (firstArray.length < maxLength && firstArray.length === i) {
            for (let j = 0; j < maxLength - i; j++) {
                if (j < secondArray.length) {
                    newArr.push(secondArray[j]);
                }
            }
            break;
        } else {
            newArr.push(firstArray[i]);
        }
    }
    return newArr;
}

// function makeArray(firstArray, secondArray, maxLength) {
//     const resultArr = [];
//     const combinedArr = firstArray.concat(secondArray);
//     for (let i = 0; i < maxLength; i++) {
//         resultArr.push(combinedArr[i])
//     }
//     return resultArr;
// }

console.log("=========================Task2=========================");
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []