document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".image-wrapper");
    if (wrapper) {
      // スクロールに合わせて表示させたい場合は IntersectionObserver を使ってもOK
      setTimeout(() => {
        wrapper.classList.add("show");
      }, 100); // 少し遅延させることで "ふわっ" 感が増します
    }
  });
  