import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, target }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById(target);
    modalRoot.appendChild(elRef.current);

    return () => {
      modalRoot.removeChild(elRef.current);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
