function elementEnd(arr) {
    var newArr = [];
    
    for (let i = 1; i < arguments.length; i++) {
        newArr.push(arguments[i]);
    }
    return [...arr, ...newArr];
}

console.log(elementEnd(['1', '2', '3', '5',], '10', '20', '30'));