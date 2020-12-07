const fs = require("fs");
const inp = fs.readFileSync("./d7/in.txt", "utf-8");

let _c = 0;

const BAGS = {
  lr: "light red",
  do: "dark orange",
  bw: "bright white",
  my: "muted yellow",
  sg: "shiny gold",
  do: "dark olive",
  vp: "vibrant plum",
  fb: "faded blue",
  db: "dotted black",
};

const map = {
  ls: {
    [BAGS.bw]: 1,
    [BAGS.my]: 2,
  },
  do: {
    [BAGS.bw]: 3,
    [BAGS.my]: 4,
  },
  bw: {
    [BAGS.sg]: 1,
  },
  my: {
    [BAGS.sg]: 2,
    [BAGS.fb]: 9,
  },
  ls: {
    [BAGS.bw]: 1,
    [BAGS.my]: 2,
  },
  sg: {
    [BAGS.do]: 1,
    [BAGS.vp]: 2,
  },
  do: {
    [BAGS.fb]: 3,
    [BAGS.db]: 4,
  },
  vp: {
    [BAGS.fb]: 5,
    [BAGS.db]: 6,
  },
  fb: {},
  db: {},
};

const inArr = inp.split("\r\n").forEach((r) => {
  const _rX = /([\d\s]*\w+\s+\w+) bag/gm;
  let f = true;
  while (null != (rules = _rX.exec(r))) {
    if (!f && rules[0].indexOf(BAGS.sg) != -1) {
      console.log("sg in " + r);
    }
    f = false;
  }
});

console.log(_c);
