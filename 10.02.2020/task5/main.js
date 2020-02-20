const arr = [];

 for (;;) {
     let userNumber = prompt('Введите число');

     if (!isNaN(+userNumber) && userNumber) arr.push(+userNumber);
     else if (userNumber) alert('Вы ввели не число!');
     else break;
 }

 let total = arr.reduce((acc, item) => acc += item, 0);
 alert('Обащая сумма чисел - ' + total);