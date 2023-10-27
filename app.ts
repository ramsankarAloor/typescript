const numInput1 = document.getElementById("num1") as HTMLInputElement;
const numInput2 = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector("button")!;

const numResults: number[] = []; // can be also written as const numResults : Array<number> = [], where Array is the outer type and number is the inner type
const textResults: string[] = [];

//type is a typescript feature, but typeof is there is javascript
//the below thing is called a type alias
type numOrString = number | string;
type resultObjType = { val: number; timestamp: Date };

function add(num1: numOrString, num2: numOrString) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else if (typeof num1 === "string" && typeof num2 === "string") {
    return num1 + " " + num2;
  }
  return +num1 + +num2;
}

function printResult(resultObj: resultObjType) {
  console.log(resultObj.val);
}
buttonElement.addEventListener("click", () => {
  const num1 = numInput1.value;
  const num2 = numInput2.value;
  const result = add(+num1, +num2);
  numResults.push(result as number);
  const stringResult = add(num1, num2);
  textResults.push(stringResult as string);

  console.log(numResults, textResults);

  printResult({ val: result as number, timestamp: new Date() });
});

const myPromise = new Promise<string>((resolve, reject) => {
  //we are giving that this promise resolves to a string, as it is 'it worked' inside resolve
  setTimeout(() => {
    resolve("it worked!!");
  }, 1000);
});

myPromise.then((result) => {
  console.log(result.split("w"));
});
