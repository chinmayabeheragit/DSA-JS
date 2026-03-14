for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 100);
}

// why it is print 5 to 5 times because of var , var is function scoped so all callbacksshare the same i =5 which already incremented to 5 by the time the callbacks execute. To fix this we can use let instead of var which is block scoped and will create a new binding for each iteration of the loop.

for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 100);
}

// output will be 0,1,2,3,4 because of let which creates a new binding for each iteration of the loop.