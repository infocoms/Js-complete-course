/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {


    var output = document.getElementById("target");
    var datamine = document.getElementById("part-one");
    var datamine2 = document.getElementById("part-two");
    var datamine3 = document.getElementById("part-three");
    var datamine4 = document.getElementById("part-four");

    var min = datamine.getAttribute("data-min");
    var max = datamine.getAttribute("data-max");

    var min2 = datamine2.getAttribute("data-min");
    var max2 = datamine2.getAttribute("data-max");

    var min3 = datamine3.getAttribute("data-min");
    var max3 = datamine3.getAttribute("data-max");

    var min4 = datamine4.getAttribute("data-min");
    var max4 = datamine4.getAttribute("data-max");
    console.log(min);
    console.log(max);


    document.getElementById("part-one").addEventListener("click", buttonClick);
    document.getElementById("part-two").addEventListener("click", buttonClick2);
    document.getElementById("part-three").addEventListener("click", buttonClick3);
    document.getElementById("part-four").addEventListener("click", buttonClick4);

    var i = min;
    var ii = min2;
    var iii = min3;
    var iiii = min4;




    function buttonClick() {
        i++;
        var round = (String(iiii).padStart(2,0));
        var round2 = (String(iii).padStart(2,0));
        var round3 = (String(ii).padStart(2,0));
        output.innerHTML = "+" + i + round3 + round2 + round;
        datamine.innerHTML = i;
        if (i == max) {
            i = min - 1;
        }
    }

    function buttonClick2() {
        ii++;
        var round = (String(iiii).padStart(2,0));
        var round2 = (String(iii).padStart(2,0));
        var round3 = (String(ii).padStart(2,0));
        output.innerHTML = "+" + i + round3 + round2 + round;
        datamine2.innerHTML = (String(ii).padStart(2,0));
        if (ii == max2) {
            ii = min2 - 1;
        }
    }

    function buttonClick3() {
        iii++;
        var round = (String(iiii).padStart(2,0));
        var round2 = (String(iii).padStart(2,0));
        var round3 = (String(ii).padStart(2,0));
        output.innerHTML = "+" + i + round3 + round2 + round;
        datamine3.innerHTML = (String(iii).padStart(2,0));
        if (iii == max3) {
            iii = min3 - 1;
        }
    }

    function buttonClick4() {
        iiii++;
        var round = (String(iiii).padStart(2,0));
        var round2 = (String(iii).padStart(2,0));
        var round3 = (String(ii).padStart(2,0));
        output.innerHTML = "+" + i + round3 + round2 + round;
        datamine4.innerHTML = (String(iiii).padStart(2,0));
        if (iiii == max4) {
            iiii = min4 - 1;
        }
    }


})();
