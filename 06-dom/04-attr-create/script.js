/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here


   /* var anchor = document.getElementById("myAnchor");  // Get the <a> element with id="myAnchor"
    var att = document.createAttribute("href");        // Create a "href" attribute
    att.value = "https://www.w3schools.com";            // Set the value of the href attribute
    anchor.setAttributeNode(att);                      // Add the href attribute to <a>*/



    let div1 = document.getElementById("source");
    let cont = div1.getAttribute("data-image");
    var img = document.createElement("img");
    img.src = cont;
    div1.appendChild(img);




})();
