
// step -1 > add click handler with the submit button
document.getElementById("btn-submit").addEventListener('click', function () {
    // step-2 > get the email address inside the email input field
    const emailField = document.getElementById('user-email');
    const passwordField = document.getElementById('user-password');

    const email = emailField.value;
    const password = passwordField.value;

    console.log(email, password);

    if (email === 'rial@h.com' && password === 'ssssssss') {
        window.location.href = 'bank.html'
    }
    else {
        alert("You have no access. Insert the right password and email.");
    }
})