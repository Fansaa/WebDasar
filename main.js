
document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.querySelector("nav ul");
    document.querySelector("header").addEventListener("click", function() {
        navToggle.classList.toggle("show");
    });
});
