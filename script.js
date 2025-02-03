const messages = [
    "Sure kana dyan?",
    "Aba ayos ka ha attitude??",
    "Legit bayan apaka lala monaman nyan?",
    "Uyyy bili na YES kana oh...",
    "Pag isipan moyan !",
    "Pag dika nag yes magkukulong ako sa ref...",
    "Laah ayos to ah...",
    "YES MONA KASEE ...",
    "okay titigil nakoo...",
    "Joke lang HAHAHA mag asawa na tayo eh! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}