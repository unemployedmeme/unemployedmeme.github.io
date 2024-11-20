
document.addEventListener("DOMContentLoaded", function () {
    const grid = document.querySelector('.masonry-grid');
    new Masonry(grid, {
        itemSelector: '.video-item',
        columnWidth: '.video-item',
        gutter: 20, // Space between items
        percentPosition: true
    });
});
