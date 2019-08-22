/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here

    Array.from(document.querySelectorAll("button")).forEach(function ($btn) {
        $btn.addEventListener("click", function () {
            document.body.style.background = '#' + Math.random().toString(16).slice(-6);
        });
    });

})();
