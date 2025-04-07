import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import ButtonFilled from "../Buttons/ButtonFilled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";

export default function CheckoutForm({ onClose,fare }) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const dispatch = useDispatch()


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/place-order`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsProcessing(false);
    dispatch(setfare(0.00));
  };

  return (
    <form
      id="payment-form"
      onSubmit={handleSubmit}
      className="flex flex-col items-center  gap-[1em] h-auto max-h-[500px] overflow-y-auto bg-white w-[90%] sm:w-[60%] md:w-[65%] lg:w-[50%] xl:w-[45%] mx-auto p-4 lg:p-8">
      <div className="flex justify-between items-center w-full">
        <div>
        <h1 className="text-primary font-sans text-[1.25em] font-[500] lg:text-[2em]">
          Enter Payment Details
        </h1>
        <p>You are about to be charged <span className="font-bold">$ {fare}</span></p>
        </div>
        <button onClick={onClose} type="button">
          <FontAwesomeIcon icon={faX} className="text-primary" />
        </button>
      </div>

      <PaymentElement id="payment-element" className="w-full" />
      <ButtonFilled
        disabled={isProcessing || !stripe || !elements}
        id="submit"
        value={isProcessing ? "Processing ... " : "Pay now"}
      >
        <span id="button-text"></span>
      </ButtonFilled>

      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
