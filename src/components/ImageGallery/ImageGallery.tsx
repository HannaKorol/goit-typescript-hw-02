import ImageCard from "../ImageCard/ImageCard";
import React from "react";
import s from "./ImageGallery.module.css";
import { ImageGalleryProps } from "./ImageGallery.types";

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <ul className={s.list}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard
            image={image}
            onClick={() => onImageClick(image)} // Передаем объект image
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
