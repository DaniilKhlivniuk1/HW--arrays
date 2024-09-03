// 1
const num = [9, 8, 7];
num[1] = 10;
console.log(num);
// 2
const subject = ["Math", "Science", "History"];
subject[3] = "English";
console.log(subject);
// 3
let all = 0;
const num2 = [15, 20, 25, 30, 5, 8, 1, 11, 22, 3];
for (let i = 0; i < num2.length; i++) {
  all += num2[i];
}
console.log(all);
// 4
const num3 = [10, 4, 9, 8, 3];
for (let i = 0; i < num3.length; i++) {
  console.log(num3[i]);
}
// 5
const color = ["pink", "blue", "green", "yellow", "black"];
for (let i = 0; i < color.length; i++) {
  if (color[i].length < 5) {
    continue;
  }
  console.log(color[i]);
}
// 6
const numb4 = [9, 11, 2, 753, 752, 533, 6, 99, 89, 41];
let maxNumber = numb4[0];
for (const number of numb4) {
  if (number > maxNumber) {
    maxNumber = number;
  }
}
console.log(`Найбільше число: ${maxNumber}`);
// 7
const numb5 = [222, 12, 15, 984, 713, 8, 22, 753, 28, 23];
for (const number of numb5) {
  if (!(number % 2 === 0)) {
    continue;
  }
  console.log(number);
}