document.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;
    let windowBg = document.querySelector(".window-background");

    // 画像をスクロール量に応じて動かす（数値を調整すると効果を変えられる）
    windowBg.style.transform = `translateY(${scrollTop * 0.2}px)`;
});
