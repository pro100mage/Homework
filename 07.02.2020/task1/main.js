var person= {
    name:"John",
    age:"26",
    salary:"1000$",
}

var property = prompt('Введите нужное Вам свойство');

if (property in person) { // typeof person[property] !== 'undefined'

    alert(person[property]);

} else {
    person[property] = prompt('Такого свойства еще нет. Укажите значения свойства ' + property + ' у Джона');
    alert('Свойство ' + property + ' установлено в значение ' + person[property] + ' у Джона.');
};

 // Task2

const phone = {};
phone.brand = prompt('Введите бренд');
phone.model = prompt('Введите модель');
phone.resolution = prompt('Введите расширение');
phone.color = prompt('Введите цвет');

person.phone = phone;

console.log(person);