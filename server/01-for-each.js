const letters = ["a", "b", "c", "d", "e", "f"];

for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  console.log("For", element);
}

letters.forEach((item) => console.log("Foreach", item));
