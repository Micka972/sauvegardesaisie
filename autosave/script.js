let textarea_elem = document.getElementById("text");
let container_elem = document.getElementById("container");
let char_count_elem = document.getElementById("charCount");

let typingTimer;
let doneTypingInterval = 3000;
let saveInterval;
let saveIntervalTime = 10000;
let charCount = 0;
let startTime = Date.now();

function updateCharCount() {
    let currentTime = Date.now();
    let timeElapse = (currentTime - startTime) / 1000 / 60;
    let averageCharsPerMinutes = charCount / timeElapse;
    char_count_elem.textContent =`Caractères par minutes : ${Math.round(averageCharsPerMinutes)}`;
}

function saveText() {
    let text = textarea_elem.value;
    if (text.trim().length > 0) {
        let newRow = container_elem.insertRow();
        let newCell = newRow.insertCell(0);
        newCell.textContent = text;
    }
}

function handleTyping() {
    if (!saveInterval) {
        saveInterval = setInterval(saveText, saveIntervalTime);
    }

    charCount += textarea_elem.value.length;
    updateCharCount();

    clearTimeout(typingTimer); 
    typingTimer = setTimeout(() => {
        clearInterval(saveInterval);
        saveInterval = null;
    }, doneTypingInterval);
}

textarea_elem.addEventListener("input", handleTyping);
