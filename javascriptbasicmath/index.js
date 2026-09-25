const q1 = require('./q1');
const q2 = require('./q2');
const q3 = require('./q3');
const q4 = require('./q4');

const questions = [q1, q2, q3, q4];

questions.forEach((item) => {
  console.log(`Q${item.id}: ${item.question}`);
  console.log(`Answer: ${item.answer}`);
  console.log(`Explanation: ${item.explanation}`);
  console.log('---');
});

module.exports = questions;
