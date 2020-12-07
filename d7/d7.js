const fs = require("fs");
const inp = fs.readFileSync("./d7/in.txt", "utf-8");

let _c = 0;

const map = {
};

//build map
const inArr = inp.split("\r\n").forEach((r) => {
  const _rX = /([\d\s]*\w+\s+\w+) bag/gm;
  let f = true;
  let bag;
  while (null != (rules = _rX.exec(r))) {
    let g= rules[0].replace(" bag","");
    if (!f && g !== " no other") {
      g = g.replace(" ","")
      const spaceIdx = g.indexOf(" ");
      map[bag][g.substr(spaceIdx+1)] = parseInt(g.substr(0,spaceIdx));
    }
    else if(f && g !== " no other"){
      bag = g;
      map[g] = {}
    }
    f = false;
  }
});

const searchCointainersFor = (aBag) => Object.keys(map).reduce((acc,val) => {
  if(map[val][aBag]) acc.push(val)
  return acc;
}, []);
const directContainers = searchCointainersFor("shiny gold");

/*
PART 1


const directContainers = searchCointainersFor("shiny gold");
const indirectContainers = [];

const walk = (aBag) => {
  const cs = searchCointainersFor(aBag);
  
  if(cs.length>0){
    cs.forEach(container =>{
      indirectContainers.push(container)
      walk(container);
    })
  }
}


directContainers.forEach(container => {
  walk(container);
})
const s = new Set([...directContainers, ...indirectContainers])


console.log(Array.from(s).length);*/





// PART 2
const count = (container) => {
  if(map[container]){
  const cs = Object.keys(map[container]);
  let sum = 0;
  if(cs.length > 0){
    cs.forEach(bag => {
      sum += map[container][bag]
      sum += map[container][bag]*count(bag)
    })
    return sum;
  }
  return 0;

  }
  return 0
}

  


console.log(count("shiny gold"))