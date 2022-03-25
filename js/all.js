function renderImages() {
    let items = '';
    for (let i = 1; i <= 10; i++) {
        items += `<div class="item">
            <img class="img" src="./img/${i}.jpeg" style="opacity:0"/>
          </div>`;
    }
    document.querySelector('.grid').innerHTML = items;
}
renderImages();

// init Masonry
var $grid = $('.grid');
// layout Masonry after each image loads
$grid.imagesLoaded(function (ImagesLoaded) {
    let time = 0;
    ImagesLoaded.images.forEach((item) => {
        item.img.style.animationName = 'bounceIn';
        item.img.style.animationDuration = '500ms';
        item.img.style.animationTimingFunction = 'linear';
        item.img.style.animationFillMode = 'forwards';
        item.img.style.animationDelay = time + 's';

        time += 0.3;
    });

    $grid.masonry({
        itemSelector: '.item',
        horizontalOrder: true,
        percentPosition: true,
    });
});
