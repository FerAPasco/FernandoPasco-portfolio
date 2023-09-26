import { valida } from "./validcode.js";
import { validaArea } from "./validcode.js";

const inputs = document.querySelectorAll("input");
const textArea = document.querySelector("textarea");

inputs.forEach(input => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    });
});

textArea.addEventListener("blur", (textArea) => {
    validaArea(textArea.target);
});


let menu = document.getElementById('menu_list');
let tab_open = document.getElementById('tab_open');
let tab_close = document.getElementById('tab_close');

tab_open.addEventListener('click', tabMenu);
tab_close.addEventListener('click', tabMenu);

function tabMenu() {
    menu.classList.toggle('show__menu');

    if (menu.classList.contains('show__menu')) {
        tab_open.style.display = 'none';
        tab_close.style.display = 'block';
    }
    else {
        tab_open.style.display = 'block';
        tab_close.style.display = 'none';
    }

}

const btn = document.querySelector(".contact__button");
const mailMessage = document.querySelector(".contact__image__text");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const topicInput = document.getElementById("topic");
const messageArea = document.getElementById("message");

btn.addEventListener("click", function (event) {
    if (nameInput.validity.valid && emailInput.validity.valid && topicInput.validity.valid && messageArea.validity.valid) {
        event.preventDefault();
        inputs.forEach(input => {
            input.value = "";
        });
        textArea.value = "";
        mailMessage.classList.add("contact__image__text--valid");
    }
});

