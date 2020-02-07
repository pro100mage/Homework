var day = 'Понедельник', result;

switch (day) {
    case 'Понедельник' : result = 'Надо идти на работу'; break;
    case 'Вторник' : result = 'Надо идти на работу'; break;
    case 'Среда' : result = 'Надо идти на работу'; break;
    case 'Четверг' : result = 'Надо идти на работу'; break;
    case 'Пятница' : result = 'Надо идти на работу'; break;
    case 'Суббота' : result = 'Выходной'; break;
    case 'Воскресение' : result = 'Выходной'; break;
    default: result = 'Были праздники, день недели не определен';
}
alert(result);