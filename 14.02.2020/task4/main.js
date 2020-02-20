var users = [
    {firstname: "userName1", lastname: 'userLastname1', middleName: 'userMiddleName1', age: '10'},
    {firstname: "userName2", lastname: 'userLastname2', middleName: 'userMiddleName1', age: '15'},
    {firstname: "userName3", lastname: 'userLastname3', age: '12'},
    {firstname: "userName4", lastname: 'userLastname4', middleName: 'userMiddleName1', age: '18'},
    {firstname: "userName5", lastname: 'userLastname5', middleName: 'userMiddleName1', age: '25'},
    {firstname: "userName6", lastname: 'userLastname6', age: '30'},
    {firstname: "userName7", lastname: 'userLastname7', middleName: 'userMiddleName1', age: '38'},
    {firstname: "userName8", lastname: 'userLastname8', middleName: 'userMiddleName1', age: '40'},
    {firstname: "userName9", lastname: 'userLastname9', age: '42'},
    {firstname: "userName10", lastname: 'userLastname10', age: '71'},
];

var youngUsers = users.filter(user => +user.age < 18);
 //console.log('Пользователи младше 18 лет', youngUsers);

var modifiedUsers = users.map(user => {
    user.fullName = [user.firstname, user.lastname, user.middleName].join(" ");
    return user;
});
 console.log('Добавленно поле fullName', modifiedUsers);

var fullnameUsers = [];
modifiedUsers.forEach(item => fullnameUsers.push(item.fullName));