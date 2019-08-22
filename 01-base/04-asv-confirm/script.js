/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function () {

    do {
        var ag = window.prompt("How old are you?");
        var gen = window.prompt("Your Gender?");
        var liv = window.prompt("The Town you live in?");
    } while (!confirm("Confirm given information\n\nAge: " + ag + "\nGender: " + gen + "\nTown: " + liv));


})();





