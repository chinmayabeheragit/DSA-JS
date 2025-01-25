const user = "John";
const product = "JavaScript Course";
const price = "$50";

const email = `
Hi ${user},

Thank you for purchasing the ${product}.
The total price is ${price}.

Best regards,
The Team
`;

console.log(email);
/* Output:
Hi John,

Thank you for purchasing the JavaScript Course.
The total price is $50.

Best regards,
The Team
*/
