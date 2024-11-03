import React from "react";
import s from "./ImageCard.module.css";
import { ImageCardProps } from "./ImageCard.types";


const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div className={s.card} onClick={onClick}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={s.image}
      />
    </div>
  );
};

export default ImageCard;
