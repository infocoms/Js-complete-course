/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here


    let pass = document.getElementById('pass-one');
    var cnfield = document.getElementById("counter");
    pass.addEventListener('keyup', () => {
        var ctr = cnfield.value = pass.value.length;
        const resultcount = cnfield.value = ctr;


        document.getElementById("counter").innerHTML = resultcount + "/10";
        if (pass.value.length > 10) {

            pass.value = pass.value.slice(0, 10);

        }

    })


})();
