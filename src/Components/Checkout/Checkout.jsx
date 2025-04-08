import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import ButtonFilled from "../Buttons/ButtonFilled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setfare } from "../../Store/Form/Actions";
import BookingConfirmation from "../Booking-Confirmation/BookingConfirmation";

export default function CheckoutForm({ onClose, fare }) {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showConfirmationPortal, setShowConfirmationPortal] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const {rideDate,rideTime,rideFare} = useSelector((state)=>state.form);
  const url = import.meta.env.VITE_APP_BACKEND_API_URL;
console.log(rideDate,rideTime,rideFare)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsProcessing(true);
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/place-order`,
      },
      redirect: "if_required",
    });
    if (paymentIntent && paymentIntent.status === "succeeded") {
      try {
        await fetch(`${url}/bookingConfirmation`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pickup: data["pick-up"],
            dropoff: data["drop-off"],
            note:data["drivers-note"],
            customerName: data.name,
            customerPhone: data["phone"],
            fare:rideFare,
            date:rideDate,
            time:rideTime

          }),
        });
        setShowConfirmationPortal(true);
        dispatch(setfare(0.0));
      } catch (e) {
        console.log(e.message)
      }
    } else if (
      error?.type === "card_error" ||
      error?.type === "validation_error"
    ) {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }
    setIsProcessing(false);
  };
  return (
    <>
      {!showConfirmationPortal ? (
        <form
          id="payment-form"
          onSubmit={handleSubmit}
          className="flex flex-col items-center  gap-[1em] h-auto max-h-[500px] overflow-y-auto bg-white w-[90%] sm:w-[60%] md:w-[65%] lg:w-[50%] xl:w-[45%] mx-auto p-4 lg:p-8"
        >
          <div className="flex justify-between items-start w-full">
            <div>
              <h1 className="font-sans text-primary font-sans text-[1.25em] font-[500] lg:text-[2em]">
                Enter Payment Details
              </h1>
              <p className="font-sans">
                You are about to be charged{" "}
                <span className="font-bold font-sans">$ {fare}</span>
              </p>
            </div>
            <button onClick={onClose} type="button">
              <FontAwesomeIcon icon={faX} className="text-primary" />
            </button>
          </div>
          <PaymentElement id="payment-element" className="w-full" />
          <ButtonFilled
            type="submit"
            disabled={isProcessing || !stripe || !elements}
            id="submit"
            value={isProcessing ? "Processing ... " : "Pay now"}
          >
            <span id="button-text"></span>
          </ButtonFilled>

          {message && (
            <div id="payment-message" className="font-sans">
              {message}
            </div>
          )}
        </form>
      ) : (
        <BookingConfirmation onClose={onClose} />
      )}
    </>
  );
}
