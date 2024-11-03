import { Image } from "../Api/Api.types";

export interface ImageModalProps {
  image: Image | null;
  onClose: () => void;
}
