[Back to main page](https://ereeq.github.io/proglangblog/)

### Exercise on Termination (blog)

Write a program in your programming language that contains a while loop or recursive calls and show termination by exhibiting a measure function. Write a blog post about it.

while loop is pretty simple. its basically an if statement - if it's true, it will continuously loop. So if you put
````typescript
while(1==1){
  console.log("Hello")
}
````
since 1 is always equal to 1, this while loop will never end and will print hello indefinitely without termination.

to terminate, the statement must be altered so that the statement is false.

````typescript
var i:num = 1;
while(i < 20){
  if(20%i == 0){
    i++;
  }else{
    i = i+(20%i);
  }
  console.log(i);
}
````

This program will loop until `i` reaches a number bigger than 20. 
