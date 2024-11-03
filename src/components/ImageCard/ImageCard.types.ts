import { Image } from "../Api/Api.types";

export interface ImageCardProps {
  image: Image;
  onClick: (image: Image) => void;
}
