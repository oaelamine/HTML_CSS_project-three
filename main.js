/*
1
2
3


let names = function (...names) {
  return `String ${names.join(", ")} => Done !`;
};

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));



let names = (...names) => `String [${names.join("], [")}] => Done !`;
console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

console.log("#".repeat(20));
let mtNum = [20, 50, 10, 60];

let calc = (one, tow, ...nums) => -one + -tow + +nums[0] + +nums[1];
console.log(calc(10, 20, 60, 50));
*/
