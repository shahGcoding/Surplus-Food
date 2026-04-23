import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function PaymentSuccess() {
  const [params] = useSearchParams();
  const sessionId = params.get("session_id");

  useEffect(() => {
    console.log("Payment success session:", sessionId);
  }, []);

  return (
    <div className="p-10 text-center h-85 flex flex-col items-center justify-center space-y-4 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-green-600">Payment Successful!</h1>
      <p>Your order has been placed.</p>
    </div>
  );
}

export default PaymentSuccess;
