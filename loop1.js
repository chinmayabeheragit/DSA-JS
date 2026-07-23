

for(let i = 0; i < 11; i++){
    console.log(i);
}



for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}


for(let i = 0; i<10; i+=2){
    console.log(i);
}



for(let i = 20; i>=0; i--){
    console.log(i);
}


for(let i = 0; i<30; i++){
    if(i % 3 === 0){
        console.log(i);
    }
}


for(let i = 0; i < 30; i++){
    if(i% 5 === 0){
        console.log(i);
    }
}


for(let i = 0; i < 30; i++){
    if(i % 15 === 0){
        console.log(i);
    }
}


let N = 10;
for(let i = 1; i <= N; i++){
    console.log(i);
}
for(let i = N; i>=1; i--){
    console.log(i);
}


let N = 20;
let sum = 0;
for(let i = 1; i <= N; i++){
    sum += i;

}
console.log(sum);


 let N = 6;
let product = 1;
for(let i = 1; i<=N; i++){
    product = product * i;
}
console.log(product);



let n = 19;
for(let i = 1; i<= 10; i++){
    console.log(n + " x " + i + " = " + (n * i));
}


let N = 1000;
let count = 0;
for(let i = 1; i <= N; i++)
{
    count++;
}
console.log(count);


for(let i = 1; i<=10; i++){
    console.log(i*i);
}


for(let i = 1; i<=10; i++){
    console.log(i*i*i);
}