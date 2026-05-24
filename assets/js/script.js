
function init() {
    document.querySelector(".nav-blog").addEventListener("click", showBlog);
    document.querySelectorAll(".nav-home").forEach(el => el.addEventListener("click", showHome));

}

function showBlog() {
    document.querySelector(".home").classList.add("hidden");
    document.querySelector(".blog").classList.remove("hidden");
}

function showHome() {
    document.querySelector(".blog").classList.add("hidden");
    document.querySelector(".home").classList.remove("hidden");
}

init();

if (window.location.hash === "#blog") {
    showBlog();
}