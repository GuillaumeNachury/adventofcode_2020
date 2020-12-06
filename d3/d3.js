const fs = require('fs');

const inp = fs.readFileSync('./d3/in.txt', 'utf-8');
let rows = [];
inp.split('\r\n').reduce((a,v) => {
    a.push(v.split(''));
    return  a;
}, rows);

const solve = (r,d) => {
    let _c = 0;
    let _w = rows[0].length;
    let p  = {x:0, y:0};
    
    while(p.y < rows.length){
        if(p.x >= _w){
            p.x = (p.x - _w);
        }
    
        if(rows[p.y][p.x] === "#"){
            _c +=1;
        };
    
        p.x += r;
        p.y += d;
    }
    return _c;
}


console.log(solve(3,1)*solve(1,1)*solve(5,1)*solve(7,1)*solve(1,2));