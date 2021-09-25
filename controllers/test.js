const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(a[i]), 1000);
}

for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(a[i]), 1000);
}

let obj = { id: "1", name: "Test User", age: "25", profession: "Developer" };

//Method 1: Convert the keys to Array using - Object.keys()

console.log(Object.keys(obj));
// ["id", "name", "age", "profession"]

// Method 2 Converts the Values to Array using - Object.values()
console.log(Object.values(obj));
// ["1", "Test User", "25", "Developer"]

// Method 3 Converts both keys and values using - Object.entries()
console.log(Object.entries(obj));
//[["id", "1"],["name", "Test User"],["age", "25"],["profession", "Developer"]]