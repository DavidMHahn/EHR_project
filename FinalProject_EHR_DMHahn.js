//JavaScript functions for EHR project - by David M. Hahn

//Function to alert the user that the patient data form was correctly submitted.
function validateForm() {
    alert("The form was submitted");
}

// Validating that the user ID is correct format
function validateUserID() {
    var uID = document.getElementById("userID").value;
    var regex1 = /^[a-zA-Z0-9]{5,}$/;
    if (regex1.test(uID)) {
        document.getElementById("userIDPrompt").style.color = "Green";
        document.getElementById("userIDPrompt").innerHTML = "<strong>valid</strong>";
        return true;
    } else {
        document.getElementById("userIDPrompt").style.color = "Red";
        document.getElementById("userIDPrompt").innerHTML = "<strong>Use 5 or more letters and/or numbers</strong>";
        return false;
    }
}

// Validating that password is of correct format
function validatePassword() {
    var pass1 = document.getElementById("password1").value;
    var regexPW = /^[a-zA-Z0-9]{8,}$/;
    if (regexPW.test(pass1)) {
        document.getElementById("passwordPrompt1").style.color = "Green";
        document.getElementById("passwordPrompt1").innerHTML = "<strong>valid</strong>";
        return true;
    } else {
        document.getElementById("passwordPrompt1").style.color = "Red";
        document.getElementById("passwordPrompt1").innerHTML = "<strong>Use at least 8 or more letters and/or numbers</strong>";
        return false;
    }
}

// Validating that passwords match
function validateMatch() {
    var pass1 = document.getElementById("password1").value;
    var pass2 = document.getElementById("password2").value;
    if (pass1 === pass2) {
        document.getElementById("passwordPrompt2").style.color = "Green";
        document.getElementById("passwordPrompt2").innerHTML = "<strong>Passwords Match</strong>";
        return true;
    } else {
        document.getElementById("passwordPrompt2").style.color = "Red";
        document.getElementById("passwordPrompt2").innerHTML = "<strong>Passwords Don't Match. Try again.</strong>";
        return false;
    }
}

// Validating that all log-in fields are correct
function validateLogin() {
    if ((validatePassword() == true) && (validateMatch() == true) && (validateUserID() == true)) {
        window.open("FinalProject_EHR_patientdataform_DMHahn.html");
    }
}

// Validating a first name
function validateFirstName() {
    var fName = document.getElementById("firstName").value;
    var regex1 = /^[a-zA-Z\s\'\-]{2,15}$/;

    if (regex1.test(fName)) {
        document.getElementById("firstNamePrompt").style.color = "Green";
        document.getElementById("firstNamePrompt").innerHTML = "<strong>valid</strong>";
        return true;
    } else {
        document.getElementById("firstNamePrompt").style.color = "Red";
        document.getElementById("firstNamePrompt").innerHTML = "<strong>Enter 2&#45;15 characters</strong>";
        return false;
    }
}

// Validating a last name
function validateLastName() {
    var lName = document.getElementById("lastName").value;
    var regex2 = /(^[a-zA-Z\s\'\-]{2,25})$/;

    if (regex2.test(lName)) {
        document.getElementById("lastNamePrompt").style.color = "Green";
        document.getElementById("lastNamePrompt").innerHTML = "<strong>valid</strong>";
        return true;
    } else {
        document.getElementById("lastNamePrompt").style.color = "Red";
        document.getElementById("lastNamePrompt").innerHTML = "<strong>Enter 2&#45;25 characters</strong>";
        return false;
    }
}

//This function tests valid birthdate. This function is broken right now. Possibly due to how the string is evaluated.
function validateBirthDate() {
    var bDate = document.getElementById("birthDate").value;
    var regex3 = /(^\d{2}\/\d{2}\/\d{4}$)/;

    if (regex3.test(bDate)) {
        document.getElementById("birthDatePrompt").style.color = "Green";
        document.getElementById("birthDatePrompt").innerHTML = "<strong>valid</strong>";
        return true;
    } else {
        document.getElementById("birthDatePrompt").style.color = "Red";
        document.getElementById("birthDatePrompt").innerHTML = "<strong>Use mm/dd/yyyy format</strong>";
        return false;
    }
}

//This function tests valid address. This function is also broken, it doesn't recognize street number + space + street name format of address.
function validateAddress() {
    var address = document.getElementById("address").value;
    var regex4 = /(^[0-9A-Za-z]+$)/;
    if (regex4.test(address)) {
        document.getElementById("addressPrompt").style.color = "Green";
        document.getElementById("addressPrompt").innerHTML = "<strong>valid</strong>";
        return true;
    } else {
        document.getElementById("addressPrompt").style.color = "Red";
        document.getElementById("addressPrompt").innerHTML = "<strong>Use Number and Street name format</strong>";
        return false;
    }
}

// This function tests a valid city format
function validateCity() {
    var cityName = document.getElementById("city").value;
    var regex5 = /(^[a-zA-Z\s\'\-]{2,15}$)/;

    if (regex5.test(cityName)) {
        document.getElementById("cityPrompt").style.color = "Green";
        document.getElementById("cityPrompt").innerHTML = "<strong>valid</strong>";
        return true;
    } else {
        document.getElementById("cityPrompt").style.color = "Red";
        document.getElementById("cityPrompt").innerHTML = "<strong>Enter 2&#45;15 characters</strong>";
        return false;
    }
}

// Testing valid State format. This function tests for 2 letter values, but not actually if they are a proper state 2 letter code.
function validateState() {
    var stateName = document.getElementById("state").value;
    var regex6 = /(^[A-Za-z]{2}$)/;

    if (regex6.test(stateName)) {
        document.getElementById("statePrompt").style.color = "Green";
        document.getElementById("statePrompt").innerHTML = "<strong>valid</strong>";
        return true;
    } else {
        document.getElementById("statePrompt").style.color = "Red";
        document.getElementById("statePrompt").innerHTML = "<strong>Use 2 letter state abbreviation</strong>";
        return false;
    }
}

//Testing valid zipcode format. This function does not test if the zipcode is valid, but only if it is 5 numbers.
function validateZipcode() {
    var zipCode = document.getElementById("zipCode").value;
    var regex7 = /(^\d{5}$)/;

    if (regex7.test(zipCode)) {
        document.getElementById("zipCodePrompt").style.color = "Green";
        document.getElementById("zipCodePrompt").innerHTML = "<strong>valid</strong>";
        return (true);
    } else {
        document.getElementById("zipCodePrompt").style.color = "Red";
        document.getElementById("zipCodePrompt").innerHTML = "<strong>Use a 5 digit zipcode</strong>";
        return (false);
    }
}