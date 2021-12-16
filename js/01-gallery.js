import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
// console.log(creteImgCard(galleryItems));

const imgContainer = document.querySelector('div.gallery');
const cardMarkup = creteImgCard(galleryItems);

imgContainer.insertAdjacentHTML('beforeend', cardMarkup)
imgContainer.addEventListener('click', onImgContainerClick)

function creteImgCard(galleryItems) {
  return galleryItems.map(({preview, original}) => {
    return `
    <div class="gallery__item">
      <a class="gallery__link"
      onclick="event.preventDefault()"
      href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="Image description"
       />
      </a>
    </div>`;
  }).join('');;
};

function onImgContainerClick(event) {
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
 
  // console.log(event.target.dataset.source);
  return event.target.dataset.source;

};