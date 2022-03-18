function renderImages() {
    let items = '';
    for (let i = 1; i <= 10; i++) {
        items += `<div class="item">
            <img class="img" src="./img/${i}.jpeg" style="display:none"/>
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
        item.img.style.display = null;
        item.img.style.animationName = 'bounceIn';
        item.img.style.animationDuration = '450ms';
        item.img.style.animationTimingFunction = 'linear';
        item.img.style.animationFillMode = 'forwards';
        item.img.style.animationDelay = time + 's';

        time += 0.25;
    });

    $grid.masonry({
        itemSelector: '.item',
        horizontalOrder: true,
        percentPosition: true,
    });
});
