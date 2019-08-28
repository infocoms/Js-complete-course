/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here


    document.getElementById("run").addEventListener("click", function () {


        // your code here

        var inputf1 = document.getElementById("pass-one");
        var inputf2 = document.getElementById("pass-two");

        if (inputf1.value != inputf2.value) {
            inputf1.value = "Error";
            inputf2.value= "Error";

        } else {
            console.log("successful Match in input Fields!");
        }

    });


})();
