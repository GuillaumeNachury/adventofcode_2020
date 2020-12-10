const fs = require("fs");
const inp = fs.readFileSync("./d8/in.txt", "utf-8");
let acc = 0;
const code = inp.split("\n");

const candidates = [];
code.forEach((l, idx) => {
  let [i, v] = l.split(" ");
  if (i == "nop" || i == "jmp") candidates.push({ patchAt: idx });
});

let callStack = new Array(code.length).fill(0);

const getNextCandidate = (from) => {
  for (let i = from; i <= code.length; i++) {
    if (candidates[i] === 1) return i;
  }
};

let changed = false;
let currentChangeAt = -1;
let cPtr = 0;

function interp(ptr) {
  if (callStack[ptr] !== 0) {
    return { done: true, loop: true };
    // candidates[cPtr] = 0;
    // callStack = new Array(code.length).fill(0);
    // cPtr = getNextCandidate(cPtr);
    // yield * interp(0);
  }

  let [i, v] = code[ptr].split(" ");
  let nextIns = 0;
  let offset = 0;
  if (ptr === cPtr) {
    i = i == "jmp" ? "nop" : "jmp";
    changed = true;
    currentChangeAt = ptr;
  }
  switch (i) {
    case "nop":
      offset = 1;
      break;
    case "acc":
      {
        acc += parseInt(v);
        offset = 1;
      }
      break;
    case "jmp":
      {
        offset = parseInt(v);
      }
      break;
  }
  nextIns = ptr + offset;
  if (nextIns >= code.length) {
    return { ended: true, done: true };
  }

  callStack[ptr] += 1;
  return { nextIns, done: false };
}

for (let i = 0; i < candidates.length; i++) {
  cPtr = candidates[i].patchAt;
  callStack = new Array(code.length).fill(0);
  acc = 0;
  let ptr = 0;
  let f = false;
  while (true) {
    const { done, nextIns, loop, ended } = interp(ptr);
    if (!done && nextIns != undefined) {
      ptr = nextIns;
    } else if (loop) {
      break;
    } else if (ended) {
      f = true;
      break;
    } else {
      console.log("Shrug");
    }
  }
  if (f) {
    console.log({ cPtr, acc });

    break;
  }
}
