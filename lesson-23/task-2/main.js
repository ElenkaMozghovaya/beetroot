"use strict";
let num = prompt(`HI! Выбери число от 0 до 9`);
switch (Number(num)) {
    case 0:
    alert(`Вы получите символ = )`);
    break;
    case 1:
    alert(`Вы получите символ = !`);
    break;
    case 2:
    alert(`Вы получите символ = @ или "`);
    break;
    case 3:
    alert(`Вы получите символ = # или №`);
    break;
    case 4:
    alert(`Вы получите символ = $ или ;`);
    break;
    case 5:
    alert(`Вы получите символ = %`);
    break;
    case 6:
    alert(`Вы получите символ = ^ или :`);
    break;
    case 7:
    alert(`Вы получите символ = & или ?`);
    break;
    case 8:
    alert(`Вы получите символ = *`);
    break;
    case 9:
    alert(`Вы получите символ = ( `);
    break;
    default:
    alert(`Пожалуйста, укажите число от 0 до 9`);
    break;
}
