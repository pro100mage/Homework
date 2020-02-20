const arr = ['AngularJS', 'jQuery'];
 arr.unshift('Backbone.js');
 arr.push('ReactJS', 'Vue.js');
 arr.splice(1, 0, 'CommonJS');

    for (let i = 0; i < arr.length; i++) {
     if (arr[i] === 'jQuery') {
        alert(arr[i] + ' - Это здесь лишнее');
        delete arr[i];
    }
}

 console.log(arr);