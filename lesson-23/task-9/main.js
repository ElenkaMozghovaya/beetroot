"use strict";
let MyDreamDog = prompt(`Собака моей мечты? 1 - Доберман 2 - Померанский Шпиц 3 - Акита-Ину`);
let MyCat = prompt(`Как зовут моего кота? 1 - Антуан 2 - Кекс 3 - Пушок`);
let ChoosePants = prompt(`Какие штаны выбрать? 1 - W133 2 - H33 3 - W125`);
let MyBirthdayDay = prompt (`В какой день недели я родилась? 1 - Понедельник  2 - Среда 3 - Пятница`);
let MyTatoo = prompt (`Какая татуировка у меня набита? 1 - Цветение сакуры 2 - Ловец снов 3 - Кицунэ`);

let result = 0;
    if (MyDreamDog == 3) 
        result +=2; 
    if (MyCat == 1 ) 
        result +=2; 
    if (ChoosePants == 3) 
        result +=2; 
    if (MyBirthdayDay == 2) 
        result +=2;
    if (MyTatoo == 3) 
        result +=2;
    alert(`Поздровляю Вы набрали ${result} балoв ^_^`); 