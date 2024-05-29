const currentpasswordEl = document.querySelector('#currentpassword');
const newpasswordEl = document.querySelector('#newpassword');
const confirmPasswordEl = document.querySelector('#confirmPassword'); // Corrected variable name
const form = document.querySelector('#changepassword');

const isRequired = value => value === '' ? false : true;

const isBetween = (length, min, max) => length < min || length > max ? false : true;

const showSuccess = (input) => {
    const formField = input.parentElement;
    formField.classList.remove('error');
    formField.classList.add('success');
    const error = formField.querySelector('small');
    error.innerHTML = '';
}

const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');
    const error = formField.querySelector('small');
    error.innerHTML = message;
};

const checkCurrentpassword = () => {
    let valid = false;
    const currentpassword = currentpasswordEl.value.trim();
    if (!isRequired(currentpassword)) {
        showError(currentpasswordEl, 'Current password cannot be blank.');
    } else {
        showSuccess(currentpasswordEl);
        valid = true;
    }
    return valid;
}

const checknewPassword = () => {
    let valid = false;
    const newpassword = newpasswordEl.value.trim();

    if (!isRequired(newpassword)) {
        showError(newpasswordEl, 'New Password cannot be blank.');
    } else if (!isnewPasswordSecure(newpassword)) {
        showError(newpasswordEl, 'New Password must have at least 8 characters including at least 1 lowercase character, 1 uppercase character, 1 number, and 1 special character');
    } else {
        showSuccess(newpasswordEl);
        valid = true;
    }
    return valid;
};

const isnewPasswordSecure = (newpassword) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*]).{8,}$/; // Corrected regex
    return re.test(newpassword);
};

const checkConfirmPassword = () => {
    let valid = false;
    const confirmPassword = confirmPasswordEl.value.trim();
    const newpassword = newpasswordEl.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordEl, 'Please enter the new password again');
    } else if (newpassword !== confirmPassword) {
        showError(confirmPasswordEl, 'The new password does not match');
    } else {
        showSuccess(confirmPasswordEl);
        valid = true;
    }
    return valid;
};

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let isCurrentpasswordValid = checkCurrentpassword(); // Corrected function name
    let isNewPasswordValid = checknewPassword(); // Corrected function name
    let isConfirmPasswordValid = checkConfirmPassword();
    let isFormValid = isCurrentpasswordValid && isNewPasswordValid && isConfirmPasswordValid;
    // submit to the server if the form is valid
    if (isFormValid){

    }
});
