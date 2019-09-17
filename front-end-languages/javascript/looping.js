/**
 * JS Loops
 */

const helloArray = ['hello', 'darkness', 'my', 'old', 'friend'];
let whileCounter = 0;

// vanilla for loop
for (let i = 0; i < helloArray.length; i++) {
  console.log(`loop ${i}`)
  console.log(helloArray[i]);
}

// foreach loop
helloArray.forEach((item, index) => {
  console.log(`${item} is at index ${index}`);
});

// while loop
while (whileCounter < 10) {
  console.log(`count ${whileCounter}`);
  whileCounter++;
}
