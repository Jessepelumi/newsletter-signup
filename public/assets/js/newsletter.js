const emailExpression = /^([a-z0-9\.-]+)@([a-z0-9-]+)\.([a-z]{2,8})([a-z]{2,8})?$/;
const emailInput = document.getElementById("email");

function isEmailValid(email) {
    return emailExpression.test(email);
}