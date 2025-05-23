// This script reads input from the standard input (stdin) and writes it to the standard output (stdout).
console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () => {
  const word = process.stdin.read();
  if (word) {
    process.stdout.write(`Your name is: ${word.toString()}`);
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});