/**
 * Arrays.
*/

// create array
const testArray = ['hello', 'darkness', 'my', 'old', 'friend', 'ive', 'come', 'to', 'talk', 'with', 'you', 'again'];
const anotherTestAray = new Array('hello', 'darkness');

// access array
const firstElement = testArray[0];

// array length
testArray.length;

// slice
// returns the selected elements in an array
// creates a new object
// params: start and end
// start is included
// end is not included
const slicedArray = testArray.slice(1, 6);

// concat
// join two or more arrays
const concatArray = testArray.concat(anotherTestAray);

// join
// convert the elements of an array into a string
// default joins w/ commas
// tou can pass a separator
const joinedArray = testArray.join(' ');

// toString
// convert a number to a string
const testNumber = 3;
const numberString = testNumber.toString();

// unshift
// adds new items to the beginning of an array
// returns the new length
const unshiftedArrayLength = testArray.unshift('before', 'prior');

// shift
// remove the first element of the array
// return that removed element
const arrayFirst = testArray.shift();

// push
// add a new item to an array
testArray.push('last-item');

// pop
// remove the last item in the array
// return the last element
testArray.pop();

// splice
// changes the contents of an array
// removes or replaces existing elements
// params: start, deleteCount, item1, item2
// items: items to add to the array
const monthsArray = ['Jan', 'March', 'April', 'May', 'June'];
testArray.splice(1, 0, 'Feb');


/**
 * Strings.
 */

const testString = 'This is a test string honey bunches.';

// split
const newTestString = testString.split(' ');

console.log(newTestString);
