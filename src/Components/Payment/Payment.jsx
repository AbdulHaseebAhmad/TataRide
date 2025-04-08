import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../Checkout/Checkout";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import ButtonFilled from "../Buttons/ButtonFilled";

function Payment({ onClose }) {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const fare = useSelector((state) => state.form.rideFare);
  const url = import.meta.env.VITE_APP_BACKEND_API_URL;

  useEffect(() => {
    fetch(`${url}/checkout/config`).then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch(`${url}/checkout/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fare }),
    })
      .then(async (result) => {
        const { clientSecret } = await result.json();
        setClientSecret(clientSecret);
      })
      .catch((error) => {
        console.error("Error creating payment intent:", error);
      });
  }, []);

  return (
    <div className="w-full">
      {clientSecret && stripePromise ? (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm onClose={onClose} fare={fare} />
        </Elements>
      ) : (
        <div className="font-sans w-[300px] sm:w-[400px] lg:w-[500px] bg-white flex flex-col gap-[2em]  rounded-[5px] mx-auto items-center p-4 ">
          <p className="text-primary text-[1em] lg:text-[1.25em] text-center">
            Loading Payment Portal..
          </p>
          <ButtonFilled value="Close" onClick={onClose}></ButtonFilled>
        </div>
      )}
    </div>
  );
}

export default Payment;
