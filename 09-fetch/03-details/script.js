/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {


    document.getElementById("run").addEventListener("click", function () {
        fetch("http://localhost:63342/js-complete-course/_shared/api.json")

            .then(function (response) {
                return response.json();

            })


            .then((data) => {
                var container = document.getElementById('target');
                var ins = document.getElementById("hero-id").value;

                i = ins;

                const tmpl = document.getElementById('tpl-hero');
                tmpl.content.querySelector('.name').innerText = data.heroes[i].name;
                tmpl.content.querySelector('.alter-ego').innerText = data.heroes[i].alterEgo;
                tmpl.content.querySelector('.powers').innerText = data.heroes[i].abilities;
                let clone = tmpl.content.cloneNode(true);
                container.appendChild(clone);


            });

    })


})();
