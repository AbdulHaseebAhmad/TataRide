import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function StepThree() {
  const [paymentMethod, setPaymentMethod] = useState("");
  return (
    <div className="font-sans text-[16px] md:text-[13px] lg:text-[15px] xl:text-[17px]  px-[1em] flex flex-col gap-[1em]">
      <div className="flex gap-[0.5em] items-center">
        <p className="font-sans font-[400] text-[0.9em] tracking-[0.02em] text-[#000]">
          Step 3 of 4
        </p>
        <p className="font-sans font-[500] text-[1em] tracking-[0.02em] text-[#000]">
          Payment
        </p>
      </div>

      <div className="w-full max-w-[400px] items-center">
        <div className="relative w-full">
          <select
            className="px-[0.4em] w-full h-[2.5em] text-gray-700 text-[1em] border border-1 border-lightgrey rounded-md focus:border-2  outline-none cursor-pointer appearance-none"
            defaultValue=""
            onChange={(e) => {
              setPaymentMethod(e.target.value);
            }}
          >
            <option
              value=""
              disabled
              hidden
              className="text-lightgrey text-[1em]"
            >
              Please Select
            </option>
            <option value="credit/debit" className="">
              Credit / Debit Card
            </option>
            <option value="googlepay" className="">
              Google Pay
            </option>
            <option value="paydriver" className="">
              Pay Cash
            </option>
          </select>
          <div className="absolute text-lightgrey right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M1 4L6 9L11 4"
                stroke="gray"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {paymentMethod === "credit/debit" && (
        <div className="w-full max-w-[400px] items-center">
          <div className="w-full flex justify-between items-center">
            <img
              className="w-[5em] h-[3em] object-contain"
              src="https://s3-alpha-sig.figma.com/img/e543/8983/92f1a7fe6ff770252e03423246527ddc?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BD6N7VtDsC4atabm3WWd6qcdUQDt2PXiDfPoM6hGpSzR6tDoI9PwQWJpXgWjzkmgCTpuuq~4EAFg1mA2wUhHxrDRdwFG-AGRSllEkjNDH66Lu~F7Ux1Y9KPoMw86XXf2Ht~3DMyJokvMKJHZePcbbX-Oy8dsXj-9FFzSQF~G-EBb6TLzoWnYwUmYFIpf0ZseU8xK9m77Cj1xagoJvI9ge617mwRkJzLhJfTDR0ZDMPBb-8AVLMb0rF2WABPNKAM5Sg7UI~aR0NKkuDMj6NZUB2oIv2zXAu2~P-2mPdz-dYPo6uIpvRMCagku2FgVOdGl2bpTfnSTFbdcO2Uzbs2jFA__"
              alt="visa-banner"
            />
            <img
              className="w-[5em] h-[3em]  object-contain"
              src="https://s3-alpha-sig.figma.com/img/9c98/ed7a/5155ffa5f9d21539bba2cfa16ba93fe4?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=n6yDwleq89hmY86eaZXk0iVT1CxTSvOaFggq4M8EDzm-I~bZeVJHZrZH4zv-aOo5FHeLyqKye8i4QmFQJV3ZpYWhX~VsGzU7cwCybbD30UKjdd9oViN46RfEjzchld8ZUAcf5puGHzCBKOiMv9F0XEbw7DCguSEQuESLdvlJlHUI15ma2WfVWy-Zw1xMderLV9zyYDETU0BLf8rTeQLY~-eQAaUNF2A9AUYgVvegee5ScFxRd0yYbS9cDgInyrjIZpyVEbX7cDjfR6fMsbGZfP7iTmQtWCfvI~kMXXKkFWzRSpd0eu88hkXrBoXWbc5JSFTs-xc7QPP7zGuPFNovyQ__"
              alt="master-card-banner"
            />
            <img
              className="w-[5em] h-[5em]  object-contain"
              src="https://s3-alpha-sig.figma.com/img/4f7f/83fe/63c749355990f56b63be435675795ae8?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cbK8OLLV8KqSf5K3e5gV8lZfENRZE-5vxVZTWZaiBtQDlQ0t5DxTW3~EY-KgOTyWI7oNDI9v6FTszUEqxbQhHxCk0IhR0Qi~2WTSTXPZgpNz9ct2xZPcw~epr6YEJcrUSsRzVEmxue8T4wdHmHHXBJRkE4c57sl4IbUZAp2Jdr6jA8D-fe2qNsYn4Xu99PB-rFkt-FOqLepMqkXrCMn5pA3S3FYmKl9C8PgBbQPOYcAe4auc4UggC9keLUqZngtSc0R1NLmYV3pyneYll0Relrn4Z4Yws5mfblkXuRaat4RhmTrZ7r0G7~cEUJt9wltSBq6qp~foM~H9CZ-1e7Ll3Q__"
              alt="discover-banner"
            />
          </div>

          <div className="flex flex-col gap-[0.8em] py-[0.2em]">
            <div className="w-full max-w-[400px] flex  gap-[0.2em] items-start">
              <input
                id="card-number"
                className="px-[0.3em] w-full h-[2.5em] border border-1 border-lightgrey rounded-sm focus:border-2 focus:border-primary outline-none cursor-pointer"
                type="text"
                placeholder="Credit or Debit Card Number"
              />
            </div>

            <div className="w-full max-w-[400px] flex gap-[2em] items-start">
              <input
                id="expiry"
                className="px-[0.3em] w-full h-[2.5em] border border-1 border-lightgrey rounded-sm focus:border-2 focus:border-primary outline-none cursor-pointer"
                type="text"
                placeholder="MM/YY"
                min="0"
              />
              <input
                id="cvv"
                className="px-[0.3em] w-full h-[2.5em] border border-1 border-lightgrey rounded-sm focus:border-2 focus:border-primary outline-none cursor-pointer"
                type="text"
                placeholder="CVV"
                min="100"
                max="999"
              />
            </div>

             <div className="w-full max-w-[400px] flex  gap-[0.2em] items-start">
              <input
                id="email"
                className="px-[0.3em] w-full h-[2.5em] border border-1 border-lightgrey rounded-sm focus:border-2 focus:border-primary outline-none cursor-pointer"
                type="email"
                placeholder="Email"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
