const formTitle = document.getElementById("formTitle");
const toggleForm = document.getElementById("toggleForm");
const toggleText = document.getElementById("toggleText");
const nameGroup = document.getElementById("nameGroup");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");
const quote = document.getElementById("quote");
const error = document.getElementById("error");

let isSignup = true;

toggleForm.onclick = () => {
    isSignup = !isSignup;
    error.textContent = "";

    if (isSignup) {
        formTitle.innerHTML =
            `<span class="welcome">Welcome!</span> <span class="action">Create Account</span>`;
        quote.textContent = `"Join us and unlock your potential."`;
        submitBtn.textContent = "Sign Up";
        toggleText.textContent = "Already have an account?";
        toggleForm.textContent = "Sign In";
        nameGroup.classList.remove("hidden");
    } else {
        formTitle.innerHTML =
            `<span class="welcome">Welcome Back!</span> <span class="action">Sign In</span>`;
        quote.textContent = `"Let's continue where you left off."`;
        submitBtn.textContent = "Sign In";
        toggleText.textContent = "Don't have an account?";
        toggleForm.textContent = "Sign Up";
        nameGroup.classList.add("hidden");
    }
};

document.getElementById("authForm").addEventListener("submit", e => {
    e.preventDefault();

    if (passwordField.value.length < 6) {
        error.textContent = "Password must be at least 6 characters";
        return;
    }

    alert(isSignup ? "Account created successfully!" : "Login successful!");
});
