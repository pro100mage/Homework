let str = 'Как однажды Жак звонарь сломал фонарь головой';
 let arr = str.split(' ');
 let helper = arr.pop();

 arr.splice(4, 0, helper);
 str = arr.join(' ');

 console.log(str);