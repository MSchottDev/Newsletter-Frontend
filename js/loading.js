const submitButton = document.getElementById("submitButton");

const buttonText = submitButton.querySelector(".button-text");
const buttonLoader = submitButton.querySelector(".button-loader");


function showButtonLoading() {

    submitButton.disabled = true;

    buttonText.classList.add("is-hidden");
    buttonLoader.classList.remove("is-hidden");

}


function hideButtonLoading() {

    submitButton.disabled = false;

    buttonText.classList.remove("is-hidden");
    buttonLoader.classList.add("is-hidden");

}