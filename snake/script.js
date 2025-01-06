const speed = 8;

let x_position = character1.offsetLeft;
let y_position = character1.offsetTop;
let maxX = window.innerWidth - character1.offsetWidth / 2;
let maxY = window.innerHeight - character1.offsetHeight / 2;

window.addEventListener("keydown", move);

function move(event) {
    switch(event.key) {
        case "q" :
            x_position-=speed;
            break;
        case "z" :
            y_position-=speed;
            break;
        case "d" :
            x_position+=speed;
            break;
        case "s" :
            y_position+=speed;
            break;
        default :
            console.log("Déplacement invalide !");
            break;
    }

    if (x_position < character1.offsetWidth / 2) x_position = character1.offsetWidth / 2;
    if (x_position > maxX) x_position = maxX;
    if (y_position < character1.offsetHeight / 2) y_position = character1.offsetHeight / 2;
    if (y_position > maxY) y_position = maxY;

    character1.style.left = `${x_position}px`;
    character1.style.top = `${y_position}px`;
}