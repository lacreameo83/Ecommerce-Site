import React, { useContext, useState } from "react";
import { PaystackButton } from "react-paystack";
import { GlobalContext } from "../../../Context/GlobalContext";

function PayStack() {
  const publicKey = "pk_test_84271419232abcfec38be2ba28f2ed4c33c163e9";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");

  const { cart } = useContext(GlobalContext);
  const total = cart
    .map((el) => el.totalPrice)
    .reduce((prev, curr) => prev + curr, 0);
  const handlingFee = 500;
  const overallTotal = total + handlingFee;

  const componentProps = {
    email,
    amount: overallTotal * 100,
    metadata: {
      name,
      phoneNumber,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };
  return (
    <div className="px-4">
      <h1 className="text-center text-[25px] my-4 font-[600]">
        Make Your Payment Here
      </h1>
      <div className="max-w-md mx-auto my-4 flex flex-col gap-3">
        <input
          className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
          type="text"
          value={name}
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none hidden"
          type="number"
          value={amount}
          placeholder="Amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
          type="number"
          value={phoneNumber}
          placeholder="Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <PaystackButton
          {...componentProps}
          className="block w-full px-4 py-2 bg-[#1369A1] text-white rounded-md"
        />
      </div>
    </div>
  );
}

export default PayStack;
