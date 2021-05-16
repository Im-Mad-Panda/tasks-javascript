// 2.4 task 1
{
  let admin, name;
  name = "Джон";
  admin = name;
  console.log(admin);
}
// 2.4 task 2
{
  let planetName = "Земля";
  console.log(planetName);
  let userName = "user1";
  console.log(userName);
}
// 2.4 task 3
{
  const BIRTHDAY = "18.04.1982";
  console.log(BIRTHDAY);
  // const AGE = someCode(BIRTHDAY);
  // console.log(AGE);
}
// 2.5 task 1
{
  let name = "Ilya";
  console.log(`hello ${1}`);
  console.log(`hello ${"name"}`);
  console.log(`hello ${name}`);
}
// 2.8 task 1
{
  let a = 1,
    b = 1;
  console.log(a);
  console.log(b);
  console.log((c = ++a));
  console.log((d = b++));
}
// 2.8 task 2
{
  let a = 2;
  let x = 1 + (a *= 2);
  console.log(x);
}
// 2.8 task 3
{
  console.log("" + 1 + 0);
  console.log("" - 1 + 0);
  console.log(true + false);
  console.log(6 / "3");
  console.log("2" * "3");
  console.log(4 + 5 + "px");
  console.log("$" + 4 + 5);
  console.log("4" - 2);
  console.log("4px" - 2);
  console.log(7 / 0);
  console.log("  -9  " + 5);
  console.log("  -9  " - 5);
  console.log(null + 1);
  console.log(undefined + 1);
  console.log(" \t \n" - 2);
}
// 2.8 task 4
{
  let a = prompt("Первое число?", 1);
  let b = prompt("Второе число?", 2);
  console.log(Number(a) + Number(b));
}
// home task 1
let answer = prompt("Павлик дома?", "Да");
if (answer === "Да") {
  alert("Решать задачи");
} else {
  alert("Звонить Марине");
  let answer = prompt("Марина дома?", "Да");
  if (answer === "Да?") {
    alert("Готовить реферат");
  } else {
    alert("Писать сочинение");
  }
}
