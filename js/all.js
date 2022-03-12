const grid = document.querySelector('.grid');

function renderImages() {
    let items = '';
    for (let i = 1; i <= 10; i++) {
        items += `<div class="item">
    <img src="./img/${i}.jpeg"/></div>`;
    }
    grid.innerHTML = items;
    return items;
}

renderImages();

var msnry = new Masonry(grid, {
    itemSelector: '.item',
    columnWidth: 20,
    horizontalOrder: true,
    gutter: 10,
    percentPosition: true,
});

let time = 0;
imagesLoaded(grid).on('progress', function (ImagesLoaded, LoadingImage) {
    LoadingImage.img.style.animationName = 'bounceIn';
    LoadingImage.img.style.animationDuration = '450ms';
    LoadingImage.img.style.animationTimingFunction = 'linear';
    LoadingImage.img.style.animationFillMode = 'forwards';
    LoadingImage.img.style.animationDelay = time + 's';

    // layout Masonry after each image loads
    msnry.layout();
    time += 0.15;
});
