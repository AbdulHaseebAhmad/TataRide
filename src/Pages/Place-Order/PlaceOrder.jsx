import React, { useEffect, useState } from "react";
import MapComponent from "../../Components/Map/Map";
import StepOne from "../../Components/Step-1/StepOne";
import StepTwo from "../../Components/Step-2/StepTwo";
// import StepThree from "../../Components/Step-3/StepThree";
import StepFour from "../../Components/Step-4/StepFour";
import ButtonFilled from "../../Components/Buttons/ButtonFilled";
import TermsAndConditions from "../../Components/T&C/TermsAndConditions";
import PaymentModal from "../../Portal/PaymentModal/PaymentModal";
import Payment from "../../Components/Payment/Payment";
import { useSelector } from "react-redux";

export default function PlaceOrder() {

  const fare = useSelector((state)=> state.form.rideFare);
  console.log(fare,'22')
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  return (
    <div className="w-full md:flex md:flex-row-reverse md:gap-[10px] md:px-[10px] overflow-y-hidden">
      {showPaymentModal && (
        <PaymentModal onClose={() => setShowPaymentModal(false)}>
          <Payment onClose={() => setShowPaymentModal(false)} />
        </PaymentModal>
      )}
      <div className="h-[400px] md:h-auto md:w-3/5 l lg:w-3/4">
        <MapComponent />
      </div>
      <div className="flex flex-col gap-[32px] sm:w-full md:w-2/5 lg:w-1/4 h-[500px] overflow-y-scroll">
        <StepOne />
        <StepTwo />
        {/* <StepThree/> */}
        <StepFour />
        <ButtonFilled
          value="Book Ride"
          onClick={() => setShowPaymentModal(true)}
          disabled={fare === 0 }
        />
        <TermsAndConditions />
      </div>
    </div>
  );
}
