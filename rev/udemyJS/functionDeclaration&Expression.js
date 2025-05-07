// function declaration
function calAge(birthYear){
    return 2025 - birthYear;
}

const age1 = calAge(1998);
console.log(age1); // 27


// function expression

const calAge2 = function(birthYear){
    return 2025 - birthYear;
}

const age2 = calAge2(2000);
console.log(age2); // 25