/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
var y = Math.floor(Math.random() * 100 + 1);
var guess = 1;
(function loopy() {


        var x = window.prompt("Guess the number");

        if (x == y) {

            alert("That's it "
                + guess + " guesses ");
            return;
        } else if (x > y) {
            guess++;
            alert("Smaller");
            console.log(x);
            console.log(y);
            loopy()

        } else {
            guess++;
            alert("Higher");
            console.log(x);
            console.log(y);
            loopy()
        }



})();
