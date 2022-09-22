import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refGallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  refGallery.insertAdjacentHTML(
    "beforeend",
    `<li>
<a class="gallery__item" href="${item.original}"><img class="gallery__image" src="${item.preview}" alt="${item.description}"></a>
    </li>`
  );
});

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

console.log(galleryItems);
