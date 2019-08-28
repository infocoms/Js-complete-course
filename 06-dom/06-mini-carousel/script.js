/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];


    var imaagesr = document.getElementsByTagName("img");

    document.getElementById("next").addEventListener("click", myFunction2);



    function myFunction2() {
        var randomValue = gallery[Math.floor(Math.random() * gallery.length)];
        imaagesr[0].src = randomValue;
        console.log(randomValue);
    }





    // your code here

})();
