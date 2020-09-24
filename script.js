// First task

const firstRow = "мама мыла раму";
const secondRow = "собака друг человека";

let a = (firstRow.match(/а/g) || []).length;
let b = (secondRow.match(/а/g) || []).length;

if (a > b) {
  console.log("мама мыла раму");
} else {
  console.log("собака друг человека");
}
