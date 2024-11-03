import { Image } from "../Api/api.types";

export interface ImageModalProps {
  image: Image | null;
  onClose: () => void;
}
