import { Image } from "../Api/Api.types";

export interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}
