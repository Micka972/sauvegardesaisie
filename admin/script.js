let utilisateurs = [
    {"nom" : "Skywalker", "prenom" : "Luke", "camp" : "Jedi"},
    {"nom" : "Skywalker", "prenom" : "Anakin", "camp" : "Jedi (?)"},
    {"nom" : "Jin", "prenom" : "Qui Gon", "camp" : "Jedi"},
    {"nom" : "Palpatine", "prenom" : "Chancelier", "camp" : "Sith"},
    {"nom" : "Maul", "prenom" : "Dark", "camp" : "Sith"},
    {"nom" : "Tano", "prenom" : "Ahsoka", "camp" : "Gris"},
]

// Etape 1
let table = document.querySelector("tbody");
let template = document.querySelector("template");
let input_elems = document.querySelectorAll("input");
let btn_elem = document.querySelector("button");
let sort_btn_elem = document.querySelectorAll(".sorter");

// Etape 2
btn_elem.addEventListener("click", addForceWielder);
displayForceWielders()
// sort_btn_elem[0].addEventListener("click", () => sortBy("nom"));
// sort_btn_elem[1].addEventListener("click", () => sortBy("prenom"));
// sort_btn_elem[2].addEventListener("click", () => sortBy("camp"));
sort_btn_elem[0].addEventListener("click", sortByNom);
sort_btn_elem[1].addEventListener("click", sortByPrenom);
sort_btn_elem[2].addEventListener("click", sortByCamp);

// Etape 3
function addForceWielder() {
    utilisateurs.push({"nom" : input_elems[0].value, "prenom" : input_elems[1].value, "camp" : input_elems[2].value});
    displayForceWielders();
}

function displayForceWielders() {
    table.innerHTML = "";
    for (let u of utilisateurs) {
        let ligne = document.importNode(template.content, true);
        let td_elems = ligne.querySelectorAll("td");

        td_elems[0].innerHTML = u.nom;
        td_elems[1].innerHTML = u.prenom;
        td_elems[2].innerHTML = u.camp;

        table.appendChild(ligne);
    }
}

function sortBy(criteria) {
    utilisateurs.sort((u1, u2) => u1[criteria].localeCompare(u2[criteria]));
    displayForceWielders();
}

function sortByNom() {
    utilisateurs.sort((u1, u2) => u1.nom.localeCompare(u2.nom));
    displayForceWielders();
}

function sortByPrenom() {
    utilisateurs.sort((u1, u2) => u1.prenom.localeCompare(u2.prenom));
    displayForceWielders();
}

function sortByCamp() {
    utilisateurs.sort((u1, u2) => u1.camp.localeCompare(u2.camp));
    displayForceWielders();
}