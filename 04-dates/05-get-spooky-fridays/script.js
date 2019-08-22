/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here


    document.getElementById("run").addEventListener("click", function () {


        var drtn = document.getElementById("year").value;


        if (drtn == "") {
            alert("Input a year");
            return
        }


        function numberOfFridaythe13thsIn(year) {

            var txt = [
                "january",
                "february",
                "march",
                "april",
                "may",
                "june",
                "july",
                "august",
                "september",
                "october",
                "november",
                "december",
            ];

            var count = 0;
            for (var month = 0; month < 12; month++) {
                var d = new Date(year, month, 13);
                if (d.getDay() == 5) {
                    count++;
                    console.log(month);
                    alert("13 " + txt[d.getMonth()]);
                }
            }
            return count;
        }

        console.log(numberOfFridaythe13thsIn(drtn));


    });


})();
