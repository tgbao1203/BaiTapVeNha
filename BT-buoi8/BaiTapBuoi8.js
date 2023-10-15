// Bai 1
let valueVar = 10;

let referenceVar = [1, 2, 3];

function updateValue(value) {
  value = 20;
}

updateValue(valueVar);

console.log("valueVar", valueVar);

function updateArray(arr) {
  arr[0] = 10;
}

updateArray(referenceVar);

console.log("referenceVar", referenceVar);

//Bai 2

const integerArray = [1, 2, 3, 4, 5];

integerArray.forEach((item) => {
  console.log("item", item);
});

const lonHon3 = integerArray.find((item) => {
  return item > 3;
});

console.log("lonHon3", lonHon3);

const haveElementMoreThan5 = integerArray.some((item) => item > 5);

console.log("haveElementMoreThan5", haveElementMoreThan5);

const isAllElementNumber = integerArray.every(
  (item) => typeof item === "number" && !isNaN(item)
);

console.log("isAllElementNumber", isAllElementNumber);

const newArray = integerArray.map((item) => {
  return item ** item;
});

console.log("newArray", newArray);

const newArray1 = integerArray.filter((item) => {
  return item % 2 === 0;
});

console.log("newArray1", newArray1);