// let elements = document.querySelectorAll("*");
// //console.log(elements);

// let parent = node.parentNode;
// console.log(parent);

// function shorterReverseLonger(a, b) {
//   if (a.length < b.length) {
//     return a + b.split("").reverse().join("") + a;
//   } else if (b.length < a.length) {
//     return b + a.split("").reverse().join("") + b;
//   } else {
//     return b + a.split("").reverse().join("") + b;
//   }
// }

// console.log(shorterReverseLonger("abc", "defgh"));

// function remove(integer_list, values_list) {
//   const arr = [];
//   integer_list.map((el, i) => {
//     if (!values_list.includes(el)) {
//       arr.push(el);
//     }
//   });
//   return { ...arr };
// }

// console.log(remove([1, 1, 2, 3, 1, 2, 3, 4], [1, 3]));

// // adds a listener for clicks, to run the `myEventListeningFunction` function
// document.addEventListener("click", function myEventListeningFunction() {
//   console.log("howdy");
// });

// // immediately removes the click listener that should run the `myEventListeningFunction` function
// document.removeEventListener("click", function myEventListeningFunction() {
//   console.log("howdy remover");
// });

let num = document.querySelector(".num");

let value = parseInt(num.textContent);

document.querySelector(".btn").addEventListener("click", function () {
  value = 0;
  num.textContent = value;
});

document.querySelector(".btn-1").addEventListener("click", function () {
  value += 5;
  num.textContent = value;
});

document.querySelector(".btn-2").addEventListener("click", function () {
  value += 10;
  num.textContent = value;
});

document.querySelector(".btn-3").addEventListener("click", function () {
  value += 15;
  num.textContent = value;
});
