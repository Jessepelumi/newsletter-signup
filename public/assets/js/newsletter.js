const form = document.getElementById("form");

const emailExpression = /^([a-z0-9\.-]+)@([a-z0-9-]+)\.([a-z]{2,8})([a-z]{2,8})?$/;
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("error-message");
const modal = document.getElementById("modal");
const emailSuccess = document.getElementById("email-success");

function isEmailValid(email) {
    return emailExpression.test(email);
}

form.addEventListener("submit", (e) => {
    const email = emailInput.value;
    console.log(email);
    console.log(isEmailValid(email));

    emailInput.addEventListener("input", () => {
        if (emailInput.classList.contains("error")) {
            emailInput.classList.remove("error");
            errorMessage.classList.add("hidden");
        }
    });

    if (email == "") {
        emailInput.classList.add("error");
        errorMessage.classList.remove("hidden");
    }

    if(!isEmailValid(email)) {
        emailInput.classList.add("error");
        errorMessage.classList.remove("hidden");
    } else {
        modal.classList.remove("hidden");
    }

    emailSuccess.textContent = email;
    
    e.preventDefault();
});