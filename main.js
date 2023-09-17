import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

if (document.querySelector(".page-home")) {
    document.addEventListener("DOMContentLoaded", function () {
        // 獲取按鈕和所有滿版高的div元素
        const scrollButton = document.getElementById("scrollButton");
        const nextDivs = document.querySelectorAll(".nextDiv");

        // 初始化當前可見的div索引
        let currentIndex = 0;

        // 點擊按鈕時滾動到下一個滿版高的div
        scrollButton.addEventListener("click", function () {
            // 確保索引不超出範圍
            if (currentIndex < nextDivs.length - 1) {
                currentIndex++;
            }
            // 滾動到下一個div
            nextDivs[currentIndex].scrollIntoView({ behavior: "smooth" });
        });
    });
}