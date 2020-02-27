function cube(x, pow = 3) {
    if(pow != 1) {
        return x * cube(x, pow-1);
    }

    return x;
}

function cubeWithFor(x) {
    let total = x;

    for (let i = 1; i < 3; i++) {
        total *= x;
    }

    return total;
}

 console.log( cube(2) );
 console.log( cubeWithFor(2) );