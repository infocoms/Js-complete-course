/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    let pass = document.getElementById('pass-one');

    pass.addEventListener('keyup', () => {
        var passw = ("^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8,}$");
        if (pass.value.match(passw)) {
            document.getElementById("validity").innerHTML = "Ok";
            return true;
        } else {
            document.getElementById("validity").innerHTML = "Not Ok";
            return false;
        }

    })

})();
