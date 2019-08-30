/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



var fontsize = 9;
var incr = true;
var no = 0;
var txt = document.getElementById("target");
var input = txt.innerText;
txt.innerHTML = "";


(function() {
    for (var i = 0; i < input.length; i++) {
        var span = document.createElement("span");
        var node = document.createTextNode(input.charAt(i));
        span.appendChild(node);
        txt.appendChild(span);
    }

    var spanId = document.getElementById("target").querySelectorAll("span");


    spanId.forEach(function (element) {

        if (no == 9) {
            incr = false;
        }
        if (no == 0) {
            incr = true;
        }


        if (incr == true) {
            element.style.fontSize = `${fontsize++}px`;
            fontsize++;
            no++;
        } else if (incr == false) {
            element.style.fontSize = `${fontsize--}px`;
            fontsize--;
            no--;
        }


    })
})();
