const fs = require('fs');

const inp = fs.readFileSync('./in.txt', 'utf-8');
const inArr = inp.split('\r\n').map(e=>parseInt(e));
for(let i =0; i<inArr.length; i++){

    for(let j = i+1; j<inArr.length; j++){
        for(let k = i+1; k<inArr.length; k++){
            if(inArr[i] + inArr[j]+ inArr[k] === 2020){
                console.log(inArr[i] , inArr[j], inArr[k])
            }
        }
    }
}


912 977 131