document.addEventListener("DOMContentLoaded", function () {
    const openButton = document.querySelector(".menu-button-wrapper"); // 画像のラッパーを取得
    const closeButton = document.querySelector(".close-button");
    const menuOverlay = document.querySelector(".menu-overlay");

    // 画像 + テキストのボタンをクリックするとメニューを開く
    openButton.addEventListener("click", function () {
        menuOverlay.classList.add("active");
    });

    // 閉じるボタンでメニューを閉じる
    closeButton.addEventListener("click", function () {
        menuOverlay.classList.remove("active");
    });

    // モーダル外をクリックして閉じる
    menuOverlay.addEventListener("click", function (e) {
        if (e.target === menuOverlay) {
            menuOverlay.classList.remove("active");
        }
    });
});
