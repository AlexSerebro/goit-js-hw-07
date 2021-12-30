import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
// console.log(creteImgCard(galleryItems));

const imgContainer = document.querySelector("div.gallery");
const cardMarkup = creteImgCard(galleryItems);

imgContainer.insertAdjacentHTML("beforeend", cardMarkup);
imgContainer.addEventListener("click", onImgContainerClick);

function creteImgCard(galleryItems) {
  return galleryItems
    .map(({ preview, original }) => {
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
    })
    .join("");
}

function onImgContainerClick(event) {
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}" width="800" height="600">
`,
    {
      onShow: () => {
        // console.log("~ instance");
        window.addEventListener("keydown", onClickEscape);
      },
      onClose: () => window.removeEventListener("keydown", onClickEscape),
    }
  );
  const onClickEscape = (event) => {
    if (event.key === "Escape") {
      // console.log(event.key);
      instance.close();
    }
  };
  instance.show();
}

// },
// onClose: (instance) => {
// window.removeEventListener("keydown", onKeydown);

// },

// const openModal = this.classList.contains('gallery');
// console.log(openModal)
// function onEscCloseModal(event) {
//   const openModal = document.querySelector('.basicLightbox--visible');

//   if ()
//   window.addEventListener('keydown', onEscCloseModal)
// }

// const onClickEscape = (event) => {
// if (event.key === "Escape") {
//   console.log(event.key);
//   instance.close();
// }
// };
// window.addEventListener("keydown", onClickEscape);
