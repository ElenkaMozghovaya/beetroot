"use strict";
let number = prompt(`Выберите любое трехзначное число.`);
    number = number + '';
    if (isNaN(number) || number > 999) {
        alert(`Укажите трехзначное число!`);
      } else {
    if (number[0] === number[1] || number[0] === number[2] || number[1] === number[2])
    {
        alert('В этом числе есть одинаковые цифры');
    }
    
    else
        alert('В этом числе нет одинаковых цифер');
    }