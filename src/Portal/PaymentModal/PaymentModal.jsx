import React from "react";
import ReactDOM from "react-dom";


const PaymentModal = ({  onClose, children }) => {
  return ReactDOM.createPortal(
    <div className=" fixed inset-0 bg-black bg-opacity-[0.8] z-50 flex flex-col justify-center items-center">
      {children}
    </div>,
    document.getElementById("portal-root")
  );
};

export default PaymentModal;
