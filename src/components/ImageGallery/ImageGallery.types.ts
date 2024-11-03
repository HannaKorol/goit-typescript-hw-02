import { Image } from "../Api/api.types";

export interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}
