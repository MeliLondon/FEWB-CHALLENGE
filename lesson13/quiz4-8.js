/* Directions:
Theater seats often display a row and seat number to help theatergoers find their seats. If there are 26 rows (0 to 25) and 100 seats (0 to 99) in each row, write a nested for loop to print out all of the different seat combinations in the theater.

Example output for row-seat information: output each row and seat number on a separate line

0-0
0-1
0-2
...
25-97
25-98
25-99 

Things to note: 
   - the row and seat numbers start at 0, not 1
   - the highest seat number is 99, not 100 */

for (var x = 0; x < 26; x += 1) {
    for ( var y = 0; y < 100; y += 1) {
        console.log(x + "-" + y);
    }
}
