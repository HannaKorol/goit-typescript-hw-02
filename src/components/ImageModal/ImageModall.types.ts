import { Image } from "../Api/Api.types";

export interface ImageModalProps {
  imageUrl: Image | null;
  onRequestClose: () => void;
  isOpen: boolean;
}
