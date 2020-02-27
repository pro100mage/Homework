
let user = {
    firstName: "Василий",
    lastName: "Петров"
};

let user2 ={
    firstName: "Петр",
    lastName: "Иванов"
};

function hello(firstName, lastName) {
    alert(`Добро пожаловать` + " " + this[firstName] + " " + this[lastName] );
}

hello.call(user, 'firstName', 'lastName')
hello.call(user2, 'firstName', 'lastName')