var arr = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'];
 let sum = arr.reduce((acc, item) => {
     if(!isNaN(+item)) return acc + +item;
     return acc;
 }, 0);

 console.log(sum);
