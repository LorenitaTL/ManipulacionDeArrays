const letters = ["a", "b", "c", "d", "e", "f"];

const newArray = [];
for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  newArray.push(element + "++");
}

console.log("Letters:", letters);
console.log("new Array:", newArray);

const newLetters = letters.map((item) => item + "++");
