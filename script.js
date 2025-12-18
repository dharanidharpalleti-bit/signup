const params = new URLSearchParams(window.location.search);
let isSignup = params.get("mode") === "signup";

const formTitle = document.getElementById("formTitle");
const toggleForm = document.getElementById("toggleForm");
const nameField = document.getElementById("name");
const submitBtn = document.getElementById("submitBtn");

/* Render form */
function renderForm() {
    if (isSignup) {
        formTitle.innerHTML =
            "<b>Welcome</b><br><span style='color:#1e88e5'>Create Account</span>";
        submitBtn.textContent = "Sign Up";
        toggleForm.textContent = "Already have an account? Sign In";
        nameField.style.display = "block";
    } else {
        formTitle.innerHTML =
            "<b>Welcome Back</b><br><span style='color:#1e88e5'>Sign In</span>";
        submitBtn.textContent = "Sign In";
        toggleForm.textContent = "Don't have an account? Sign Up";
        nameField.style.display = "none";
    }
}
toggleForm.onclick = () => {
    isSignup = !isSignup;
    renderForm();
};
renderForm();

/* Show toast */
function showToast(message) {
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add("show"), 100);
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

/* Form submit */
document.getElementById("authForm").addEventListener("submit", e => {
    e.preventDefault();
    showToast(isSignup ? "Account created successfully" : "Login successful");
});

/* Google click */
document.getElementById("googleBtn").onclick = () => {
    showToast("Signed in with Google successfully");
};
