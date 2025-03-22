document.addEventListener("DOMContentLoaded", () => {
    console.log("Initializing Galleries...");

    const initializeGallery = (imageSelector, thumbnailsSelector, textSelector, textList, wakuSelector) => {
        const mainImage = document.querySelector(imageSelector);
        const thumbImages = document.querySelectorAll(thumbnailsSelector);
        const changeText = document.querySelector(textSelector);
        const waku = document.querySelector(wakuSelector); 

        if (!mainImage || thumbImages.length === 0 || !changeText || !waku) {
            console.error("Gallery elements not found! Please check your selectors.");
            return;
        }

        let currentIndex = 0;
        let intervalId;

        // サムネイルのハイライトを更新
        const updateThumbnailHighlight = () => {
            thumbImages.forEach((thumb, index) => {
                thumb.classList.toggle('selected', index === currentIndex);
                thumb.style.opacity = index === currentIndex ? '1' : '0.5';
            });
        };

        // テキストを更新
        const updateText = () => {
            changeText.innerHTML = "";
            const ul = document.createElement("ul");
            ul.classList.add("change-text-list");

            textList[currentIndex].split("、").forEach(item => {
                const li = document.createElement("li");
                li.textContent = item;
                ul.appendChild(li);
            });

            changeText.appendChild(ul);
        };

        // **画像とテキストを切り替える関数**
const changeImage = (index) => {
    currentIndex = index;

    // **枠をフェードアウト**
    waku.style.opacity = "0";
    
    setTimeout(() => {
        // **画像をフェードアウト**
        mainImage.style.opacity = "0";

        setTimeout(() => {
            // **画像を切り替え**
            mainImage.src = thumbImages[currentIndex].src;

            // **画像をフェードイン**
            mainImage.animate([{ opacity: 0 }, { opacity: 1 }], {
                duration: 500,
                easing: "ease-in-out"
            });

            // **枠をフェードイン（画像が変わった後）**
            setTimeout(() => {
                waku.animate([{ opacity: 0 }, { opacity: 1 }], {
                    duration: 500,
                    easing: "ease-in-out"
                });
                waku.style.opacity = "1";
            }, 300); // 画像変更後に枠を遅れてフェードイン

            mainImage.style.opacity = "1"; // 画像を完全に表示
            
            updateThumbnailHighlight();
            updateText();
            
        }, 300); // 画像のフェードアウト時間と同期

    }, 200); // まず枠を消す時間
};

        
        

        // **自動切り替えの開始**
        const startAutoSlide = () => {
            clearInterval(intervalId);
            intervalId = setInterval(() => {
                currentIndex = (currentIndex + 1) % thumbImages.length;
                changeImage(currentIndex);
            }, 3000);
        };

        // **ホバーイベント設定**
        thumbImages.forEach((thumb, index) => {
            thumb.addEventListener("mouseover", () => {
                changeImage(index);
                clearInterval(intervalId);
            });

            thumb.addEventListener("mouseout", startAutoSlide);
        });

        // **初期設定**
        changeImage(currentIndex);
        startAutoSlide();
    };

    const textList1 = [
        "日替わりランチ　９９０円、スープ、サラダ、日替わり副菜",
        "カレーランチ　９９０円、スープ、サラダ、日替わり副菜",
        "ドリアランチ　１０１０円、スープ、サラダ、日替わり副菜"
    ];

    initializeGallery(
        ".gallery-image img",
        ".gallery-thumbnails li img",
        ".gallery .change-text",
        textList1,
        ".gallery-image .waku"  // wakuの要素を渡す
    );
});
