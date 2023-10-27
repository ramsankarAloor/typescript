"use strict";
const numInput1 = document.getElementById("num1");
const numInput2 = document.getElementById("num2");
const buttonElement = document.querySelector("button");
const numResults = []; // can be also written as const numResults : Array<number> = [], where Array is the outer type and number is the inner type
const textResults = [];
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + " " + num2;
    }
    return +num1 + +num2;
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
buttonElement.addEventListener("click", () => {
    const num1 = numInput1.value;
    const num2 = numInput2.value;
    const result = add(+num1, +num2);
    numResults.push(result);
    const stringResult = add(num1, num2);
    textResults.push(stringResult);
    console.log(numResults, textResults);
    printResult({ val: result, timestamp: new Date() });
});
const myPromise = new Promise((resolve, reject) => {
    //we are giving that this promise resolves to a string, as it is 'it worked' inside resolve
    setTimeout(() => {
        resolve("it worked!!");
    }, 1000);
});
myPromise.then((result) => {
    console.log(result.split("w"));
});
