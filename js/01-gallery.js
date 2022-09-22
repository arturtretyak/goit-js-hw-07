import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refGallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  refGallery.insertAdjacentHTML(
    "beforeend",
    `
    <div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img
              class="gallery__image"
              src="${item.preview}"
              data-source="${item.original}"
              alt="${item.description}"
            />
        </a>
    </div>
    `
  );
});

refGallery.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `
      <img src="${e.target.dataset.source}" width="800" height="600">
  `,
    {
      onShow: (instance) => {
        function escapeHandler(evt) {
          console.log("hi");
          if (evt.code === "Escape") {
            instance.close();
            deleteHandler();
          }
        }

        function deleteHandler() {
          window.removeEventListener("keydown", escapeHandler);
        }

        window.addEventListener("keydown", escapeHandler);
      },
    }
  );

  instance.show();
});
