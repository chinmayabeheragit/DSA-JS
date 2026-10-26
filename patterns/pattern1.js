//so we have num 4 we have to create a 4/4 star pattern 
// Imagine you have to print this pattern yourself on paper.

// You would do this:
// 1. Print 5 stars: *****
// 2. Move to the next line and print 5 stars: *****
// 3. Repeat until you have 5 rows.
// Now we have discovered the logic:
// - Repeat the process 5 times to create 5 rows.
// - In each repetition, print 5 stars.

// so the loop will be like this:
// Outer loop for rows
// Inner loop for columns
//we will fill these with stars and spaces to create the pattern


function pattern(n){
    for(let i=0; i<n; i++){
        let row = ' ';
        for(let j = 0; j<n; j++){
            row = row + '*';
        }
        console.log(row);
    }
}
pattern(4);