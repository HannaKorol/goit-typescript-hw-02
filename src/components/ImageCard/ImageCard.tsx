import React from "react";
import s from "./ImageCard.module.css";
import { ImageCardProps } from "./ImageCard.types";

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div className={s.card} onClick={() => onClick(image)}>
      <img
        src={image.urls.small}
        alt={image.alt_description || "Image"}
        className={s.image}
      />
    </div>
  );
};

export default ImageCard;
