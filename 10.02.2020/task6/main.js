var multiplicationTable = [];

 for (let i = 1; i <= 10; i++) {
     multiplicationTable[i-1] = [];

     for (let j = 1; j <= 10; j++) {
         multiplicationTable[i-1].push(`${i} x ${j} = ${i * j}`);
     }
 }

 console.log(multiplicationTable);