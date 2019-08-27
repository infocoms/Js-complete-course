/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function() {
    document.getElementById("run").addEventListener("click", function () {

    // your code here

        var on = document.getElementById("n-1").innerHTML = Math.floor(Math.random() * 100) + 1;
        var tw = document.getElementById("n-2").innerHTML = Math.floor(Math.random() * 100) + 1;
        var tr = document.getElementById("n-3").innerHTML = Math.floor(Math.random() * 100) + 1;
        var fo = document.getElementById("n-4").innerHTML = Math.floor(Math.random() * 100) + 1;
        var fi = document.getElementById("n-5").innerHTML = Math.floor(Math.random() * 100) + 1;
        var si = document.getElementById("n-6").innerHTML = Math.floor(Math.random() * 100) + 1;
        var se = document.getElementById("n-7").innerHTML = Math.floor(Math.random() * 100) + 1;
        var ei = document.getElementById("n-8").innerHTML = Math.floor(Math.random() * 100) + 1;
        var ni = document.getElementById("n-9").innerHTML = Math.floor(Math.random() * 100) + 1;
        var te = document.getElementById("n-10").innerHTML = Math.floor(Math.random() * 100) + 1;

        const numbers = [on,tw,tr,fo,fi,si,se,ei,ni,te];
        const min = Math.min.apply(Math,numbers);
        const max = Math.max.apply(Math,numbers);
        let sum = numbers.reduce((previous, current) => current += previous);
        let avg = sum / numbers.length;

        document.getElementById("min").innerHTML = min;
        document.getElementById("max").innerHTML = max;
        document.getElementById("sum").innerHTML = numbers.reduce((a, b) => a + b, 0);
        document.getElementById("average").innerHTML = avg;






    });
})();
