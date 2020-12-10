const fs = require("fs");
const inp = fs.readFileSync("./d9/in.txt", "utf-8");

const dataFrameLength = 25;
let ptr = 0;

const inArr = inp.split("\n").map((n) => parseInt(n));

const computeFrame = () =>
  inArr.slice(ptr, dataFrameLength + ptr).map((val, idx, src) => {
    const r = [];
    for (let i = idx + 1; i < src.length; i++) {
      r.push(val + src[i]);
    }
    return r;
  });

let dataFrameSums = computeFrame().flat();

const find = () => {
  for (let i = dataFrameLength; i < inArr.length; i++) {
    const v = inArr[i];
    if (dataFrameSums.indexOf(v) === -1) {
      console.log(">> " + v);
      break;
    } else {
      ptr++;
      dataFrameSums = computeFrame().flat();
    }
  }
};

//PART 1 find();
const target = 15690279;
/*
let lst = [];
for (let i = 0; i < inArr.length; i++) {
  let counter = inArr[i];
  lst = [inArr[i]];
  for (let j = i + 1; j < inArr.length; j++) {
    if (counter < target) {
      counter += inArr[j];
      lst = [...lst, inArr[j]];
    } else if (counter === target) {
      if (lst.length > 2) {
        console.log(lst.reduce((acc, val) => acc + val, 0));
        lst.sort((a, b) => a - b);
        console.log(lst);

        console.log(lst[0] + lst[lst.length - 1]);
      }

      break;
    }
  }
}*/

//[1025840, 1090872, 1404797, 769435, 778163, 781000, 791844, 803409, 825818, 849260, 870560, 916145, 931655, 947003, 948223, 966228, 990027]
