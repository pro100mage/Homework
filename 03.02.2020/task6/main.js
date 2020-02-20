var a=12, b=5, str='';
while(b--) str += (b%2?'#.':'.#').repeat(a/2)+((a%2)?b%2?'#':'.':'')+'\n';
console.log(str);