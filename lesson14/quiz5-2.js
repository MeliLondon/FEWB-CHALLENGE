/* Directions:
Write a function called laugh() that takes one parameter, num that represents the number of "ha"s to return.

TIP: You might need a loop to solve this!

Here's an example of the output and how to call the function that you will write:

console.log(laugh(3));
Prints: "hahaha!" */

 function laugh(num) {
    
    var l = "" ;
    for (var i = 0; i < num ; i++ ) {
       l += "ha"; 
    }
    return l + "!";
}

console.log(laugh(3));
