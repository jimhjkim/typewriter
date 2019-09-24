const sentence = "hello there from lighthouse labs";
let wait = 0;
const delay = 50;
for (let char of sentence) {
  if (wait !== (sentence.length - 1) * delay) {
    setTimeout(() => { process.stdout.write(char) }, wait);
    wait += delay;
  } else {
    setTimeout(() => { console.log(char) }, wait);
  }
};

// let sentenceArray = sentence.split('');
// sentenceArray.forEach((num, i, arr) => {
//   setTimeout(() => {
//     process.stdout.write(num)
//     if (arr.length - 1 - i === 0) {
//       console.log();
//     }
//   }, wait);
//   wait += 50;
// });