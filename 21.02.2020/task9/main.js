function concat(str1, str2, pr = ' ') {
    return console.log(str1 + pr + str2);
}

let hello = concat.bind(null, 'Hello');

 // hello('World'); // Hello World
 hello('John'); // Hello John