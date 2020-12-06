const fs = require('fs');

const inp = fs.readFileSync('./d2/in.txt', 'utf-8');
const inArr = inp.split('\r\n');
let v=0;
for(r of inArr){
    let m = 0;
    let M = 0;
    let l ='';
    let pwd ='';

    r.split(" ").forEach((e, idx) => {
       switch(idx){
           case 0: 
            const mM = e.split("-");
            m = mM[0];
            M = mM[1];
           break;
           case 1: 
            l = e.split(":")[0];
           break;
           case 2: 
            pwd = e;
           break;
       }
    });

    let count = 0;
    //part 1
//    for(let i=0;i<pwd.length;i++){
//     if(pwd[i] === l) count++;
//    }
//    if(count>= m && count <= M){
//        v+=1;
//    }

    //part 2
   
    if(pwd[m-1] === l || pwd[M-1] === l){
        if(pwd[m-1]!== pwd[M-1]){
            v+=1;
        }
    }
}
console.log({v});
/*
1-6 m: mmmmmmm
d2/d2.js:7
6-7 v: ckvbtcv
*/