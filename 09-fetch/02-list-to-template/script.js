/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here





    document.getElementById("run").addEventListener("click", function () {
        fetch("http://localhost:63342/js-complete-course/_shared/api.json")

            .then(function (response) {
                return response.json();

            })


            .then((data) => {
                    const container = document.getElementById('target');
                    console.log(data);

                    data.heroes.forEach((heroes, index) => {
                        const tmpl = document.getElementById('tpl-hero');
                        tmpl.content.querySelector('.name').innerText = data.heroes[index].name;
                        tmpl.content.querySelector('.alter-ego').innerText = data.heroes[index].alterEgo;
                        tmpl.content.querySelector('.powers').innerText = data.heroes[index].abilities;
                        let clone = tmpl.content.cloneNode(true);
                        container.appendChild(clone);

                    });


            });

    })


})();
