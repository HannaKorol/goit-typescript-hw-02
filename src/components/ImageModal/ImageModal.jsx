import React from "react";
import Modal from "react-modal";
import s from "./ImageModal.module.css";

Modal.setAppElement("#root"); //1)Коли ви встановлюєте кореневий елемент за допомогою Modal.setAppElement('#root'), це означає, що весь інший контент сторінки, окрім самого модального вікна, буде позначений як "неважливий" для екранних рідерів під час відкриття модала. Це дозволяє користувачам з обмеженими можливостями зосередитися тільки на вмісті модального вікна.

const ImageModal = ({ isOpen, onRequestClose, imageUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <div className={s.modalContainer}>
        <img src={imageUrl} alt="Large photo" className={s.largeImage} />
        <button onClick={onRequestClose} className={s.closeButton}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ImageModal;