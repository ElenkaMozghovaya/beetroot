"use strict";
const EURO = 0.84;
const UAH = 28.36;
const AZN = 1.70;
let amount = prompt('Введите количество $:');
    let currency = prompt('EUR = 1, UAH = 2, AZN = 3');
    switch(currency) {
        case '1':
            alert (amount*EURO.toFixed(2) + 'EUR');
            break;
        case '2':
            alert (amount*UAH.toFixed(2) + 'UAH');
            break;
        case '3':
            alert (amount*AZN.toFixed(2) + 'AZN');
            break;
        default:
            alert('Грустный трамбон');
            break;   
    }



