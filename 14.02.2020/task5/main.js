function firstElement(arr) {
    var newArr= [];
    for (let i =1; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(firstElement(['1', '2', '3', '4', '5']));