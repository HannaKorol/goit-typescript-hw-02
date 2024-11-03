// LoadMoreButton.jsx
import React from "react";
import s from "./LoadMoreBtn.module.css"

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick} className={s.button}
    >
      Load More
    </button>
  );
};

export default LoadMoreBtn;
