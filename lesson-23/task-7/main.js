"use strict";
let amount = prompt(`Введите суму покупку`);
let sum;
if (isNaN(amount)) {
    alert(`Вы указали не число!`);
  }  else  {
    if (amount >=200 && amount < 300) {
    sum = amount - amount*0.03; 
    alert(`Ваша скидка 3% итого к оплате ${sum}`);
  } else if (amount >=300 && amount < 500) {
    sum = amount - amount*0.05;
    alert(`Ваша скидка 5% итого к оплате ${sum}`);
  } else if (amount >=500) {
    sum = amount - amount*0.07;
    alert(`Ваша скидка 7% итого к оплате ${sum}`);
  }
}

