// CAPTCHA Code
const captchaCanvas = document.getElementById("captchaCanvas");
const ctx = captchaCanvas.getContext("2d");
const refreshBtn = document.getElementById("refreshCaptcha");
let captchaCode = "";

function generateCaptcha() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    captchaCode = "";
    for (let i = 0; i < 5; i++) {
        captchaCode += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    ctx.clearRect(0, 0, captchaCanvas.width, captchaCanvas.height);
    ctx.font = "28px Arial";
    ctx.fillStyle = "#34495e";
    ctx.fillText(captchaCode, 10, 30);
}

refreshBtn.addEventListener("click", generateCaptcha);
window.onload = generateCaptcha;

// Login Form
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const userCaptcha = document.getElementById("captchaInput").value.trim().toUpperCase();

    if (userCaptcha !== captchaCode) {
        alert("Incorrect captcha. Please try again.");
        generateCaptcha();
        document.getElementById("captchaInput").value = "";
        return;
    }

    // Redirect to another page
    window.location.href = "welcome.html";
});

// Sidebar Menu Toggle
function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    if (menu.style.width === "0px" || menu.style.width === "") {
        menu.style.width = "220px";
    } else {
        menu.style.width = "0";
    }
}
