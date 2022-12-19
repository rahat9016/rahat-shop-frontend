import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./style.css";
import { stripeAction, stripeUpdateAction } from "../../action/stripe.action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Stripe = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const id = JSON.parse(localStorage.getItem("payment"));
  useEffect(() => {
    stripeAction(id, clientSecret).then((res) => {
      setClientSecret(res.data.clientSecret);
    });
  }, [dispatch, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: e.target.name.value,
        },
      },
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      if (id && payload) {
        stripeUpdateAction(id, payload.paymentIntent).then((res) => {
          if (res.status === 200) {
            localStorage.removeItem("payment");
            navigate("/user/order");
          }
        });
      }
    }
  };
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  // Cart Style
  const cartStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };
  return (
    <div>
      <form id="payment-form" onSubmit={handleSubmit}>
        <CardElement
          id="card-element"
          options={cartStyle}
          onChange={handleChange}
        />
        <button
          className="stripe-button"
          disabled={processing || disabled || succeeded}
        >
          {processing ? <div className="spinner"></div> : "Pay"}
        </button>
        {error && (
          <div
            className="card-error text-center my-2 text-red-600 font-semibold"
            role="alert"
          >
            {error}
          </div>
        )}
        {!error && succeeded && (
          <div
            className="card-error text-center my-2 text-green-600 font-semibold"
            role="alert"
          >
            Payment Successful
          </div>
        )}
      </form>
    </div>
  );
};

export default Stripe;
