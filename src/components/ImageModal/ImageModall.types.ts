import { Image } from "../Api/Api.types";

export interface ImageModalProps {
  imageUrl: string | undefined;
  onRequestClose: () => void;
  isOpen: boolean;
}
