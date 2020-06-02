const sentence = "hello there from lighthouse labs";
let time = 0;
let sentenceLength = sentence.length;

for (let char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time);
  time += 50;
}

setTimeout(() =>{
  process.stdout.write("\n");
}, Number(sentenceLength) * 50);

