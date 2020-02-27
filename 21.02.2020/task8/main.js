let user = {
    name: 'John'
};

function format(start, end) {
    console.log(start + this.name + end);
}


// let userFormat = (start, end) => format.call(user, start, end); // function

let userFormat = format.bind(user); // bind
 userFormat('<<<', '>>>'); // <<<John>>>