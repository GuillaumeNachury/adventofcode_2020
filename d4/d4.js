const fs = require('fs');
const inp = fs.readFileSync('./d4/in.txt', 'utf-8');


let _c = 0;

const inArr = inp.split('\r\n\r\n').forEach(p => {
    p = p.replace(/\r\n/g, ' ')  +" "
   
    let f = (p.indexOf("byr:") !== -1 && p.indexOf("iyr:") !== -1 && p.indexOf("eyr:") !== -1 &&
             p.indexOf("hgt:") !== -1 && p.indexOf("hcl:") !== -1 && p.indexOf("ecl:") !== -1 &&
             p.indexOf("pid:") !== -1)
                    
    const byr = (/byr:(\d{4})\s/gm).exec(p);
    const iyr = (/iyr:(\d{4})\s/gm).exec(p);
    const eyr = (/eyr:(\d{4})\s/gm).exec(p);
    const hgt = (/hgt:(\d*)(cm|in)\s/gm).exec(p);
    const hcl = (/hcl:#([0-9]|[a-f]){6}\s/gm).exec(p);
    const ecl = (/ecl:(amb|blu|brn|gry|grn|hzl|oth)\s/gm).exec(p);
    const pid = (/pid:(\d{9})\s/gm).exec(p);

    f = f && (byr && parseInt(byr[1]) >= 1920 &&  parseInt(byr[1]) <= 2002);
    f = f && (iyr && parseInt(iyr[1]) >= 2010 &&  parseInt(iyr[1]) <= 2020);
    f = f && (eyr && parseInt(eyr[1]) >= 2020 &&  parseInt(eyr[1]) <= 2030);
    f = f && (hgt && ((hgt[2] == 'cm' && parseInt(hgt[1]) >=150 && parseInt(hgt[1]) <= 193 ) ||  ((hgt[2] == 'in' && parseInt(hgt[1]) >=59 && parseInt(hgt[1]) <= 76 ))));
    f = f && hcl != null && ecl != null && pid != null;

if(f) _c +=1;

});

console.log(_c);

