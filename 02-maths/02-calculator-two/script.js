/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(function() {
    // to get the value of an input: document.getElementById("element-id").value

    var performOperation = function(operation) {
        // perform the operation
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);

                // perform an addition



                const op1 = document.getElementById("op-one").value;
                const op2 = document.getElementById("op-two").value;

//the Switch method -----------------------

            switch($btn.id) {
                case "addition":
                    let result = '';
                    result = parseFloat(op1) + parseFloat(op2);
                    alert(result);
                    break;
                case "substraction":
                    let result2 = '';
                    result2 = parseFloat(op1) - parseFloat(op2);
                    alert(result2);
                    break;
                case "multiplication":
                    let result3 = '';
                    result3 = parseFloat(op1) * parseFloat(op2);
                    alert(result3);
                    break;
                case "division":
                    let result4 = '';
                    result4 = parseFloat(op1) / parseFloat(op2);
                    alert(result4);
                    break;

            }


//the If Else method -----------------------

                /*let result = '';
                if ($btn.id === 'addition') {
                    result = parseFloat(op1) + parseFloat(op2);
                    alert(result)
                } else if ($btn.id === 'substraction') {
                    result = parseFloat(op1) - parseFloat(op2);
                    alert(result)
                } else if ($btn.id === 'multiplication') {
                    result = parseFloat(op1) * parseFloat(op2);
                    alert(result)
                } else if ($btn.id === 'division') {
                    result = parseFloat(op1) / parseFloat(op2);
                    alert(result)
                }*/


        });
    });
})();
