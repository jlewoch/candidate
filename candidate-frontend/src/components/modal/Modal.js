import React from "react";
import "./Modal.css";
const Modal = ({ children }) => {
  return (
    <div
      className={`modal-container ${true ? "show" : "hide"}`}
    >

      {children}

    </div>
  );
};

export default Modal;
