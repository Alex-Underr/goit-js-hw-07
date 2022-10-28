import { galleryItems } from './gallery-items.js';
// Change code below this line
const containerImg = document.querySelector(".gallery");
const createdPic = createImageEl(galleryItems);
containerImg.insertAdjacentHTML("afterBegin", createdPic);

function createImageEl(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
     <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`;
    })
    .join("");
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250
});