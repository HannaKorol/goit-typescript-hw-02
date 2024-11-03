import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css"


const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={s.list}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onClick={() => onImageClick(image.urls.full)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

