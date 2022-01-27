// Компонент элемента списка с изображением.
//Создает DOM - элемент следующей структуры.
export default function ImageGalleryItem({ previewURL, img, alt }) {
  return (
    <li>
      <img
        src={previewURL}
        alt={alt}
        onClick={() => {
          console.log("Modal");
        }}
      />
    </li>
  );
}
