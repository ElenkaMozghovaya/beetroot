"use strict";
let age = prompt(`Доброго времени суток. Будьте добры, укажите свой возраст.`);
switch (true) {
    case Number(age) > 0 && Number(age) <= 12:
    alert(`Вы ребенок!`);
    break;
    case Number(age) >= 12 && Number(age) <= 18:
    alert(`LOL!Вы подросток!`);
    break;
    case Number(age) >= 18 && Number(age) <= 60:
    alert(`Вы взрослый.`);
    break;
    case Number(age) > 60:
    alert(`Мои поздрвления!Вы пенсионер!`);
    break;
    default:
    alert(`Пожалуйста, укажите число`);
    break;
}
