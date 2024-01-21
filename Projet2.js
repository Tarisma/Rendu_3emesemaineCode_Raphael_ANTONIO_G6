//Activation du Dark Mode//
const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
});
function submitForm(event) {
    event.preventDefault(); 

    // Récupération des champs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;

    // Validation adresse mail
    if (!isValidEmail(email)) {
        alert("Veuillez entrer une adresse email valide.");
        return;
    }

    if (password.length < 6) {
        alert("Le mot de passe doit contenir au moins 6 caractères.");
        return;
    }

    document.getElementById('registrationForm').classList.add('success');
}