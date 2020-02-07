const month = new Date().getMonth();
switch (month) {
// January, February
    case 0:
    case 1:

        alert("Зима");
        break;
//March, April, May
    case 2:
    case 3:
    case 4:
        alert("Весна");
        break;
//June July, August
    case 5:
    case 6:
    case 7:
        alert("Лето");
        break;
//September, October, November
    case 8:
    case 9:
    case 10:
        alert("Осень");
        break;
//December
    case 11:
        alert('Зима');
    default:
        alert("Нет такого времени года");
}