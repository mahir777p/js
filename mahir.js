const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;
    if (email === "" || password === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Login successful!");
    }
    console.log(email, password);
});