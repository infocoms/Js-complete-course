/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    var input = 0;
    while (input <= 99) {
        //console.log(input);
        input++;

        if (input%3 == 0 && input%5 == 0){
            console.log(input+ " "+ "FizzBuzz")

        }
        else if(input%3 == 0){
            console.log(input+ " "+ "Fizz")
        }
        else if (input%5 == 0){
            console.log(input+ " "+ "Buzz")

        }else{
            console.log(input+ " "+ "FizzBuzz" );
        }
    }

})();
