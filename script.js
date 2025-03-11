// スライドショー機能
let slideIndex = 1;
let slideTimer;

// DOMが読み込まれたら実行
document.addEventListener('DOMContentLoaded', function() {
    // スライドショーの初期化
    const slides = document.getElementsByClassName("slide");
    if (slides.length > 0) {
        showSlides(slideIndex);
        // 自動スライドショーを開始
        startSlideTimer();
    }
    
    // フィルターボタンの処理
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterButtons.length > 0 && galleryItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                
                // アクティブクラスの変更
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // 作品のフィルタリング
                galleryItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');