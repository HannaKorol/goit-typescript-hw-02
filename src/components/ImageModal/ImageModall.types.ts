/* import { Image } from "../Api/Api.types";
 */
export interface ImageModalProps {
  imageUrl: string | undefined; //Замість Image | string
  onRequestClose: () => void;
  isOpen: boolean;
}
