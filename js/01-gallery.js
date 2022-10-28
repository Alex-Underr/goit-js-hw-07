import { galleryItems } from './gallery-items.js';
// Change code below this line
const containerImg = document.querySelector('.gallery');
const createdPic = createImageEl(galleryItems);
containerImg.insertAdjacentHTML('afterBegin', createdPic);


function createImageEl(galleryItems) {
  return galleryItems
.map(({ preview, original, description }) => {
          return `<div class="gallery__item">
     <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}

let instance = null

containerImg.addEventListener("click", (event) => {
    event.preventDefault();
  
  instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="auto" height="auto">
`);

  instance.show();
});

document.addEventListener("keydown", (event) => {
  if (event.code === 'Escape') {
instance.close();   
 }; 
} ) 