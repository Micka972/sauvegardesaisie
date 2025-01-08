function getJoke() {
fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json())
    .then(json => afficherBlague(json));
}

function getCategories() {
    fetch("https://api.chucknorris.io/jokes/categories")
    .then(response => response.json())
    .then(json => afficherCategories(json));
}


function afficherBlague(json) {
    const affichageBlague = document.getElementById("affichageBlague");
    affichageBlague.innerHTML = "";

    let p_elem = document.createElement("p");
    p_elem.innerText = json.value;
    document.getElementById("affichageBlague").appendChild(p_elem);
}

function afficherCategories(categories) {
    const categoriesContainer = document.getElementById("categoiesContainer");
    categoriesContainer.innerHTML = "";

    categories.forEach(category => {
        let button_elem = document.createElement("button");
        button_elem.innerText = category;
        button_elem.addEventListener("click", () => getJokeByCategory(category));
        categoriesContainer.appendChild(button_elem);
    });
}

function getJokeByCategory {}

document.getElementById("nouvelleBlague").addEventListener("click", getJoke);
