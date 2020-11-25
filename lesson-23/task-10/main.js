"use strict";
let Day = prompt("Укажите день");
let Month = prompt("Укажите месяц");
let Year = prompt("Укажите год");
let date = new Date(
  Number(Year),
  Number(Month - 1),
  Number(Day) + 1
);
alert(
  date.toLocaleString("ru", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
);