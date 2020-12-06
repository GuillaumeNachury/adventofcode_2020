const { group } = require('console');
const fs = require('fs');
const inp = fs.readFileSync('./d6/in.txt', 'utf-8');


let _c = 0;

const inArr = inp.split('\r\n\r\n').forEach(p => {
    /* PART 1
    let _cc = 0;
    p = p.replace(/\r\n/g, '')
    const s =  new Set(p.split(''))
    for(let i = 97; i<= (97+26); i++){
        _cc += s.has(String.fromCharCode(i)) ? 1 : 0;
    }
    _c +=_cc; */

    //part 2
    const groupLength = p.split('\r\n').length;
    const qs = new Array(26).fill(0)
    const answers = p.replace(/\r\n/g, '').split('');
    for(ans of answers){
        qs[ans.charCodeAt(0)-97] += 1;
    }
    _c += qs.filter(count => count === groupLength ).length

})

console.log(_c)