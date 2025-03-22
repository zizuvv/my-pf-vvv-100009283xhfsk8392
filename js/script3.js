document.addEventListener("DOMContentLoaded", function () {
    const navBar = document.querySelector(".nav-bar");
    const navTop = navBar.offsetTop;

    window.addEventListener("scroll", function () {
        if (window.scrollY >= navTop) {
            navBar.classList.add("sticky");
        } else {
            navBar.classList.remove("sticky");
        }
    });
});
