/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  // your code here
    var out;
    var r = window.prompt("Do you want some cake?");
    if (r == "yes") {
        out = "Congratulations! claim your free cake!";
        alert(out);
    } else {
        out = "More cake for me then :p !";
        alert(out);
    }

})();