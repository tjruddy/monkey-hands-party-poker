let $$ = (selector) => document.querySelector(selector);

// Desktop Validation
function validateFirstname() {
    let isValid = true;
    let el = $$("#firstname");
    let regExp = /^[A-Za-z ~'-]+$/;
    if (el.value === "") {
        el.style.border = "thin solid red";
        $$("#errors").textContent = "**The field is empty, please fill this field.";
        isValid = false;
    } // if
    if (el.value.length > 35) {
        el.style.border = "thin solid red";
        $$("#errors").textContent = "**The field cannot contain more than 35 characters!";
        isValid = false;
    } // if
    if (!regExp.test(el.value)) {
        el.style.border = "thin solid red";
        $$("#errors").textContent = "**Please input a name which contains only letters, tilde, space, single quote, or dash.";
        isValid = false;
    } // if
    return isValid;
} // validateFirstname()

function validateLastname() {
    let isValid = true;
    let el = $$("#lastname");
    let regExp = /^[A-Za-z ~'-]+$/;
    if (el.value === "") {
        el.style.border = "thin solid red";
        $$("#errors").textContent = "**The field is empty, please fill this field.";
        isValid = false;
    } // if
    if (el.value.length > 45) {
        el.style.border = "thin solid red";
        $$("#errors").textContent = "**The field cannot contain more than 35 characters!";
        isValid = false;
    } // if
    if (!regExp.test(el.value)) {
        el.style.border = "thin solid red";
        $$("#errors").textContent = "**Please input a name which contains only letters, tilde, space, single quote, or dash.";
        isValid = false;
    } // if
    return isValid;
} // validateLastname()

function validateUsername() {
    let isValid = true;
    let el = $$("#username");
    let regExp = /^\d[A-Z]{3}[a-z][$&*@!]$/;
    if (el.value === "") {
        el.style.border = "thin solid red";
        $$("#errors").textContent = "**The field is empty, please fill this field.";
        isValid = false;
    } // if
    if (!regExp.test(el.value)) {
        el.style.border = "thin solid red";
        $$("#errors").textContent = "**Please input a username which begins with a number followed by three upper case letters, then a lower case letter, and end with special characters";
        isValid = false;
    } // if
    return isValid;
} // validateUsername()

function validateNumber() {
    let isValid = true;
    let el = $$("#number");
    let regExp = /^\d{3}\.\d{3}\.\d{4}$/;
    if (el.value === "") {
        el.style.border = "thin solid red";
        $$("#errors").textContent = "**The field is empty, please fill this field.";
        isValid = false;
    } // if
    if (!regExp.test(el.value)) {
        el.style.border = "thin solid red";
        $$("#errors").textContent = "**Please input a phone number which follows the format ###.###.####";
        isValid = false;
    } // if
    return isValid;
} // validateNumber()

function validateCity() {
    let isValid = true;
    let el = $$("#location");
    let regExp = /^[a-zA-Z\s]*$/;
    if (el.value === "") {
        el.style.border = "thin solid red";
        $$("#errors").textContent = "**The field is empty, please fill this field.";
        isValid = false;
    } // if
    if (el.value.length > 50) {
        el.style.border = "thin solid red";
        $$("#errors").textContent = "**The field cannot contain more than 50 characters!";
        isValid = false;
    } // if
    if (!regExp.test(el.value)) {
        el.style.border = "thin solid red";
        $$("#errors").textContent = "**Please input a city which only has letters and a maximum of 50 characters.";
        isValid = false;
    } // if
    return isValid;
} // validateCity()

function validateEmail() {
    let isValid = true;
    let el = $$("#email");
    let regExp = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9-]+\.(com|ca)*$/;
    if (el.value === "") {
        el.style.border = "thin solid red";
        $$("#errors").textContent = "**The field is empty, please fill this field.";
        isValid = false;
    } // if
    if (!regExp.test(el.value)) {
        el.style.border = "thin solid red";
        $$("#errors").textContent = "**Please input an email which follows the format of an email.";
        isValid = false;
    }// if
    return isValid;
} // validateEmail()

function validateBankroll() {
    let isValid = true;
    let el = $$("#bankroll");
    let regExp = /^[68]$|^[1-9][02468]$|^[1-9][0-9][02468]$|^[1-4][0-9][0-9][02468]$|^5000$/
    if (el.value === "") {
        el.style.border = "thin solid red";
        $$("#errors").textContent = "**The field is empty, please fill this field.";
        isValid = false;
    } // if
    if (!regExp.test(el.value)) {
        el.style.border = "thin solid red";
        $$("#errors").textContent = "**Please input an even number between $5 - $5000.";
        isValid = false;
    }// if
    return isValid;
} // validateBankroll()

function validateForm() {
    let validForm = false;

    if (
        validateFirstname() &&
        validateLastname() &&
        validateUsername() &&
        validateNumber() &&
        validateCity() &&
        validateEmail() &&
        validateBankroll()
    )
        validForm = true;

    return validForm;
}

// let el = document.querySelector("#form");
// el.onsubmit = validateForm;

let el2 = document.querySelector("#form2");
el2.onsubmit = validateForm;
