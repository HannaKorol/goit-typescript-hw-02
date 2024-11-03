import { Image } from "../App/";

export interface ImageCardProps {
  image: Image;
  onClick: (image: Image) => void;
}
