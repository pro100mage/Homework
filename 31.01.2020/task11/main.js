let lang = prompt('Enter your language', 'en');
let weekDay = 1;

let days = {
    en: { 0: 'Sunday', 1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday'

    },
    ru: {
        0: 'Воскресение', 1: 'Понедельник', 2: 'Вторник',3: 'Среда',4: 'Четверг',5: 'Пятница',6: 'Суббота'
    }
};
alert( days[lang][weekDay] );