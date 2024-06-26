// Obyektlar aloqador masalala.
//1-masala
// const person = {
//   name: "Asadbek",
//   age: 17,
//   job: "Developer",
// };
// console.log(person);
//2-masala
// const person = {
//   name: "Asadbek",
//   age: 17,
//   job: "Developer",
// };
// person.name = "Vali";
// console.log(person);
//3-masala
// const person = {
//   name: "Asadbek",
//   age: 17,
//   job: "Developer",
// };
// person.place = "Farg`ona";
// console.log(person);
//4-masala
// const person = {
//   name: "Asadbek",
//   age: 17,
//   job: "Developer",
// };
// delete person.job;
// person.place = "Farg`ona";
// console.log(person);
//5-masala
// const person = {
//   name: "Asadbek",
//   age: 17,
//   job: "Developer",
// };
// person.phone = ["+998991546441", 24];
// console.log(person);
// //6-masala
// const person = {
//   name: "Asadbek",
//   age: 17,
//   job: "Developer",
// };
// for (let name in person) console.log(name + ":" + person[name]);
//7-masala
// const person = {
//   name: "Asadbek",
//   age: 17,
//   job: "Developer",
// };
// console.log(person.age);
//8-masala
// function makeObyekt(name, age, job) {
//   return {
//     name: name,
//     age: age,
//     job: job,
//   };
// }
// const person = makeObyekt("Asadbek", 17, "Developer");
// console.log(person);
//Umumlashtiruvchi masalalar.
//1-masala
// const arr = "52433143";
// function findElement(arr) {
//   let sum = 0;
//   for (let iterator of arr) {
//     if (iterator === "3") {
//       sum++;
//     }
//   }
//   return sum;
// }
// console.log(findElement(arr));
//2-masala
// let arr = 1;
// function createElement(arr, n) {
//   let a = [];
//   for (let i = arr; i < n; i++) {
//     if (i % 2 == 1) {
//       a.push(i);
//     }
//   }
//   return a;
// }
// console.log(createElement(arr, 10));
//3-masala
// const str = "hel*l*o";
// function removeItem(str) {
//   let res = str.replace(/\*/g, "");
//   return res;
// }
// console.log(removeItem(str));
//4-masala
// const str = "salom dunyo";
// function removeSecondElement(str) {
//   if (str.length < 2) {
//     return str;
//   }
//   return str;
// }
// console.log(removeSecondElement(str));
//5-masala
// const arr = [1, 5, 7, 9, a, B];
// function largeElement(arr) {
//   arr.forEach(function () {
//     arr.sort();
//   });
//   return arr;
// }
// console.log(largeElement(arr));

//6-masala
// const str = "hello";
// function massivElement(str) {
//   let res = str.split("");
//   return res;
// }
// console.log(massivElement(str));

//7-masala
// const arr = [1, 2, 5, 6, 8];
// function stringElement(arr) {
//   let res = arr.join("");
//   return res;
// }
// console.log(stringElement(arr));

//8-masala

//12-masala
// const arr = ["h", "e", "l", "l", "o"];
// function stringElement(arr) {
//   let res = arr.reverse().join("");
//   return res;
// }
// console.log(stringElement(arr));

//13-masala
// const str = "salom dunyo";
// function massivElement(str) {
//   let res = str.split(" ");
//   return res;
// }
// console.log(massivElement(str));

//14-masala
// const str = "salom dunyo";
// function newString(str) {
//   let res = str.map(function (value) {
//     return value.reverse();
//   });
//   return res;
// }
// console.log(newString(str));

//15-masala
// const str = ["salom", "dunyo"];
// function newMassiv(str) {
//   let res = str.join(" ").length;
//   return res;
// }
// console.log(newMassiv(str));

//18-masala
// function toCapitalize(str) {
//   let res = str.split(" ");
//   res = res.map(function (value) {
//     return value[0].toUpperCase() + value.slice(1);
//   });
//   return res.join(" ");
// }
// console.log(toCapitalize("hello world"));
