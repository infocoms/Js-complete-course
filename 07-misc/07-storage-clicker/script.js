/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
var lastname = localStorage.getItem("num");
(function() {

    // your code here
    document.getElementById("increment").addEventListener("click", buttonClick);
    var data = document.getElementById("target").innerText;
    var i = data;
    document.getElementById("target").innerHTML = lastname;
    console.log(i);
    function buttonClick() {
        i++;
        localStorage.setItem("num",i);
        document.getElementById("target").innerHTML = i;

    }




    //window.localStorage.setItem('user', JSON.stringify(lastname));


})();
