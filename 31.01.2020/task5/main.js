var bus = prompt('Какой номер маршрутки приехал?'), result;

switch (bus){
    case '7' : result = "Едем домой"; break;
    case '225' : result = "Едем домой"; break;
    case '255' : result = "Едем домой"; break;
    default : result = "Ожидаем следующую маршрутку";
}
alert(result);