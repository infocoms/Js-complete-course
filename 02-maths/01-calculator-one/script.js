/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition

        var op1 = parseInt(document.getElementById("op-one").value);
        var op2 = parseInt(document.getElementById("op-two").value);
        add = op1 + op2;
        alert("The answer: " +add)
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        var op1 = document.getElementById("op-one").value;
        var op2 = document.getElementById("op-two").value;
        sub = op1 - op2;
        alert("The answer: " +sub)
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        var op1 = document.getElementById("op-one").value;
        var op2 = document.getElementById("op-two").value;
        mul = op1 * op2;
        alert("The answer: " +mul)
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        var op1 = document.getElementById("op-one").value;
        var op2 = document.getElementById("op-two").value;
        div = op1 / op2;
        alert("The answer: " +div)
    });
})();
