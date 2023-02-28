import React, { useState, forwardRef, useImperativeHandle } from "react";
import Portal from "./portal";

const Modal = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      openModal: () => handleOpen(),
      closeModal: () => handleClose(),
    };
  });

  const handleOpen = () => {
    setDisplay(true);
  };

  const handleClose = () => {
    setDisplay(false);
  };

  if (display) {
    return (
      <Portal>
        <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center px-6">
          <div
            onClick={handleClose}
            className="bg-black opacity-70 h-full w-full absolute top-0 left-0 z-10"
            aria-hidden="true"
          ></div>
          <div className="w-full bg-white rounded-lg z-20 relative overflow-hidden p-2 max-w-screen-lg">
            {props.children}
          </div>
        </div>
      </Portal>
    );
  }

  return null;
});

export default Modal;
