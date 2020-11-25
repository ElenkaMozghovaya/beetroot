"use strict";
let number = prompt(`Введите число от 10000 до 99999`);
if (isNaN(number)) {
    alert(`Вы указали не число.`);
  } 
  else  if (number === number.split('').reverse().join(''))
    alert(`Это число является палиндромом`);
else
    alert(`Это число НЕ является палиндромом`);

  
