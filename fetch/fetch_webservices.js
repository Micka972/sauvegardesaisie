fetch("https://geo.api.gouv.fr/communes")
    .then(response => response.json())
    .then(json => displayJson(json));

function displayJson(communes) {
    let ul_element = document.createElement("ul");
    document.body.appendChild(ul_element);

    communes.forEach(commune => {
        let li_elem = document.createElement("li");
        li_elem.textContent = `${commune.nom} (${commune.population} habitants)`;
        ul_element.appendChild(li_elem);
    });
}