const questions = [
  {
    id: 1,
    question: 'What is 12 + 8 * 3?',
    answer: 36,
    explanation: 'According to BODMAS, multiplication is done before addition: 8 * 3 = 24, then 12 + 24 = 36.'
  },
  {
    id: 2,
    question: 'What is the average of 10, 20, 30, and 40?',
    answer: 25,
    explanation: 'Add all numbers: 10 + 20 + 30 + 40 = 100. Divide by 4: 100 / 4 = 25.'
  },
  {
    id: 3,
    question: 'Write a JavaScript expression to check whether a number is even.',
    answer: 'number % 2 === 0',
    explanation: 'If the remainder after dividing by 2 is 0, the number is even.'
  },
  {
    id: 4,
    question: 'What is the area of a rectangle with length 8 and width 5?',
    answer: 40,
    explanation: 'Area = length * width = 8 * 5 = 40.'
  }
];

module.exports = questions;

questions.forEach((item) => {
  console.log(`Q${item.id}: ${item.question}`);
  console.log(`Answer: ${item.answer}`);
  console.log(`Explanation: ${item.explanation}`);
  console.log('---');
});
