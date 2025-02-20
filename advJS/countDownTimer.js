const eventDate = new Date("2025-12-31");
const now = new Date();

const difference = eventDate - now; // Difference in milliseconds
const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));

console.log(`Days left until New Year 2026: ${daysLeft} days`);
