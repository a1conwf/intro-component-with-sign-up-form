const form = document.getElementById('form');

form.addEventListener("submit", e => {
    e.preventDefault();

    const firstName = form["fName"].value;
    const lastName = form["lName"].value;
    const email = form["email"].value;
    const password = form["pwd"].value;

    if (firstName == "") {
        addErrorTo("fName", "First Name cannot be empty");
    } else {
        removeErrorFrom("fName");
    }

    if (lastName === "") {
        addErrorTo("lName", "Last Name cannot be empty");
    } else {
        removeErrorFrom("lName");
    }

    if (email === "" || !isValid(email)) {
        addErrorTo("email", "Email cannot be empty or invalid");
    } else {
        removeErrorFrom("email");
    }

    if (password === "") {
        addErrorTo("pwd", "Password cannot be empty");
    } else {
        removeErrorFrom("pwd");
    }
});

function addErrorTo(field, msg) {
    const inputContainer = form[field].parentNode;
    inputContainer.classList.add("error");

    const errorText = inputContainer.querySelector(".text__error");
    errorText.innerText = msg;
}

function removeErrorFrom(field) {
    const inputContainer = form[field].parentNode;
    inputContainer.classList.remove("error");

    const errorText = inputContainer.querySelector(".text__error");
    errorText.innerText = "";
}

function isValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}