const images = document.querySelectorAll('.item');
const container = document.querySelector('.container');
let count = 0;

rollSlider();

document.querySelector('#next').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('#previous').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    container.style.transform = 'translate(-' + count * 15 + 'rem)';
}