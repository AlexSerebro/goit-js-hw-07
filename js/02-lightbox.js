import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const imgContainer = document.querySelector('div.gallery');
const cardMarkup = creteImgCard(galleryItems);

imgContainer.insertAdjacentHTML('beforeend', cardMarkup)
// imgContainer.addEventListener('click', onImgContainerClick)

function creteImgCard(galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
    return `
    <div class="gallery__item">
      <a class="gallery__item" href="${original}" onclick="event.preventDefault()">
        <img class="gallery__image" src="${preview}" alt="Image description" title = "${description}" />
      </a>
    </div>`;
  }).join('');
};

var lightbox = new SimpleLightbox('.gallery a', { /* options */ });