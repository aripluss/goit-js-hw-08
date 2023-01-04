import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const createItems = ({ preview, original, description } = {}) => {
  return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`;
};

const images = galleryItems.map(image => {
  return createItems(image);
});

galleryEl.innerHTML = images.join('');
console.log(galleryEl);

const lightbox = new SimpleLightbox('.gallery .gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(lightbox);
