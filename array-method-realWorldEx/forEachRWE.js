const users = [
    {
        name: 'jhon', age: 23, job: 'developer',
    },
    {
        name: 'jane', age: 24, job: 'developer',
    },
    {
        name: 'doe', age: 25, job: 'designer',
    },
    {
        name: 'jane', age: 24, job: 'engineer',
    },
    {
        name: 'jhon', age: 23, job: 'designer',
    },
    {
        name: 'doe', age: 25, job: 'engineer',
    }
]

function sendWelcomeEmail(name) {
    console.log(`📩 Welcome email sent to ${name}!`)
}

// this function will send a welcome email to each user in the array
users.forEach(user =>sendWelcomeEmail(user.name));


//To make it more realistic and professional, let’s avoid sending multiple emails to users with the same name
const sent = new Set();

users.forEach(user => {
    if (!sent.has(user.name)) {
        sendWelcomeEmail(user.name);
        sent.add(user.name);
    }
});



/*
this optmized version show first it itreate through each object in the array,
and select unique elemnts then the if block checks if the name has already been sent an email,
if not, it sends the email and adds the name to the set to avoid duplicates.
 */