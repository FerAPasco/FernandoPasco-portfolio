
export function valida(input){
    const tipoDeInput = input.dataset.tipo;
    
    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input__error").innerHTML = ""
    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input__error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}

export function validaArea(textArea){
    const tipoDeArea = textArea.dataset.tipo;

    if(textArea.validity.valid){
        textArea.parentElement.classList.remove("input-container--invalid");
        textArea.parentElement.querySelector(".input__error").innerHTML = ""
    }else{
        textArea.parentElement.classList.add("input-container--invalid");
        textArea.parentElement.querySelector(".input__error").innerHTML = mostrarMensajeDeErrorArea(tipoDeArea, textArea);
    }


}
const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
];

const mensajesDeError = {
    name: {
        valueMissing: "You should put your name.",
    },
    email: {
        valueMissing: "You should put your email.",
        typeMismatch: "Invalid email.",
    },
    topic: {
        valueMissing: "What's the message about?",
    },
    message: {
        valueMissing: "Write your message.",
    },
};


function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = ""
    tipoDeErrores.forEach( error => {
        if(input.validity[error]){
            console.log(error);
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje;
}

function mostrarMensajeDeErrorArea(tipoDeArea, textArea){
    let mensaje = ""
    tipoDeErrores.forEach( error => {
        if(textArea.validity[error]){
            console.log(error);
            mensaje = mensajesDeError[tipoDeArea][error];
        }
    });
    return mensaje;
}

