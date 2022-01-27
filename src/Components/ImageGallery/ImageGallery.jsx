// Список карточек изображений. Создает DOM-элемент следующей структуры.
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

export default function ImageGallery({ images }) {
  return (
    <ul>
      {images.map(({ id, previewURL, pageURL, alt }) => (
        <ImageGalleryItem
          key={id}
          previewURL={previewURL}
          img={pageURL}
          alt={alt}
        />
      ))}
    </ul>
  );
}
