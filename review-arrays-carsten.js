// # Review - Arrays and Objects

// NOTE! Pay close attention to creating code with good and consistent code style.

// 1. Create an array that contains three strings.
const arrayOne = ["One", "Two", "Three"];

// 2. Create an array that contains one string, one number and one boolean.
const arrayTwo = ["One", 2, true];

// 3. Create an array hat contains three empty arrays.
const arrayThree = [[""], [""], [""]];

// 4. Create an empty object.
const objectOne = {};

// 5. Create an object with three properties: id, email, password.
const user = {
  id: 1,
  email: "user@example.com",
  password: "12345",
};

// 6. Create an array that contains three objects. All objects should have a width and a height property.
const arrayFour = [
  { width: 10, height: 10 },
  { width: 20, height: 20 },
  { width: 30, height: 30 },
];

// 7. Create an object that contains three properties: a string, an array and an object. Invent your own property names and values.
const mixedObject = {
  string: "String",
  array: ["This", "is", "an", "array"],
  object: {
    name: "Scooby Doo",
    role: "Ghostbuster",
  },
};

// 8. Print the `type` of a variable that has an array value.
console.log(Array.isArray(mixedObject.array));

// 9. Print the `type` of a variable that has an object value.
console.log(typeof mixedObject.object);

// 10. Create an array with five random values.
const arrayFive = [5, 3, 4, 2, 1];

// 10.1. Add one value to the end of the array.
arrayFive.push(0);

// 10.2. Add one thing to the beginning of the array.
arrayFive.unshift(-1);

// 10.3. Take out one thing from the end of the array.
arrayFive.pop();
console.log(arrayFive);

// 10.4. Print the length of the array.
console.log(arrayFive.length);

// 10.5. Take out one thing from the end of the array.
arrayFive.pop();

// 10.6. Take out one the 2nd thing from the array.
arrayFive.shift([1]);
console.log(arrayFive);
