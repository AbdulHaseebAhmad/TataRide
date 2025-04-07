import React from "react";
import ReactDOM from "react-dom";
import ButtonShallow from "../../Components/Buttons/ButtonShallow";

const MenuModal = ({  onClose, children }) => {
  return ReactDOM.createPortal(
    <div className=" fixed inset-0 bg-white z-50  ">
      {children}
      <div className="mx-auto w-[20em]">
        <ButtonShallow value="Close" onClick={onClose} />
      </div>
    </div>,
    document.getElementById("portal-root")
  );
};

export default MenuModal;
