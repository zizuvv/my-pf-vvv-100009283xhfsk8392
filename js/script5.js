document.addEventListener("DOMContentLoaded", () => {
    const beans = document.querySelectorAll(".bean");

    beans.forEach(bean => {
        if (bean.classList.contains("half")) {
            const halfColor = document.createElement("span");
            halfColor.classList.add("half-fill");
            bean.appendChild(halfColor);
        }
    });
});
