const fs = require('fs');
const inp = fs.readFileSync('./d5/in.txt', 'utf-8');
const inArr = inp.split('\r\n')

let hSeatID = -1;
let ids = [];
const search = (dirs, space) => {
    if(dirs.length === 0) return Math.min(space[0], space[1]);
    let newSpace;
    switch(dirs.shift()){
        case 'F' : 
        case 'L' :
        newSpace = [space[0], space[1] - ((space[1]-space[0]) >> 1)-1]
        break;
        case 'B' :
        case 'R' :
            newSpace = [ 1+space[1] - ((space[1]-space[0]) >> 1)-1,space[1]]
        break;
    }

    return search(dirs, newSpace)
}

inArr.forEach(i => {
    let space = [0,127];
    const dirs = i.split('');
    const row = search(dirs.slice(0,7),space)
    const col = search(dirs.slice(7),[0,7])
    const id = row*8 + col;
    hSeatID = Math.max(hSeatID, id)
    ids.push(id)
})

ids.sort();
let prev = 1;
ids.forEach((s,i) => {
    if(i == 0 ) prev = s;
    else{
        if(s != prev+1 && s == prev+2){
            console.log("missing seat at ", i, prev)
        }
        else {
            prev = s;
        }
    }
})


console.log(ids.sort().length);


