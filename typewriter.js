

const sentence = "hello there from lighthouse labs";

// for (const char of sentence) {
//   process.stdout.write(char);
// }

const printStc = sentence => {
  for (const char in sentence) {
    let letter = sentence[char];
    setTimeout(() => {
      process.stdout.write(letter);
    }, char * 50);
  }

setTimeout(() => {
  process.stdout.write('\n');
}, sentence.length * 50);

};

printStc(sentence);