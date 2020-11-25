"use strict";
let year = prompt(`Укажите год и мы проверим его на высокосноcть.`);
if (isNaN(year)) {
    alert(`Вы указали не число!`);
  } 
  else if (year%4 === 0 || (year%400 === 0 && year%100 != 0))
    {
        alert(`Высокосный год`);
    }
    else
        alert(`Не высокосный год`);

