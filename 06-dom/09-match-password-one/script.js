/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    document.getElementById("run").addEventListener("click", function () {


        // your code here

        var inputf1 = document.getElementById("pass-one");
        var inputf2 = document.getElementById("pass-two");

        if (inputf1.value != inputf2.value) {
            inputf1.style.borderColor = "red";
            inputf2.style.borderColor = "red";

        } else {
            console.log("successful Match!");
            inputf1.style.borderColor = "";
           inputf2.style.borderColor = "";
        }

    });
})();
