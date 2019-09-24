const sentence = "hello there from lighthouse labs";
let wait = 0;

let sentenceArray = sentence.split('');
sentenceArray.forEach((num, i, arr) => {
  setTimeout(() => {
    process.stdout.write(num)
    if (arr.length - 1 - i === 0) {
      console.log();
    }
  }, wait);
  wait += 50;
});