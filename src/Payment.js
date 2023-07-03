import { useState, useEffect } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

export default function Pay() {
  const [amount, setAmount] = useState(2000); // Default amount is 2000UGX
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [accessGranted, setAccessGranted] = useState(false); // Initial access is blocked
  const [blocked, setBlocked] = useState(false);
  const [txRef, setTxRef] = useState("");

  const handleAmountChange = (e) => {
    setAmount(Number(e.target.value));
  };

  useEffect(() => {
    // Generate a new tx_ref whenever the amount changes
    setTxRef(Date.now().toString());
  }, [amount]);

  const config = {
    public_key: "FLWPUBK_TEST-9f7f57197d8282ff50a32f602ed4804b-X",
    tx_ref: txRef,
    amount: amount,
    currency: "UGX",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email,
      phone_number: phone,
      name: name,
    },
    customizations: {
      title: "my Payment Title",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const sendPaymentDetails = (paymentResponse) => {
    const paymentData = {
      paymentResponse: paymentResponse,
      amount: amount,
      email: email,
      name: name,
      phone: phone,
    };

    fetch("https://messaging-fjza.onrender.com/api/whatsapp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paymentData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Payment details sent successfully:", data);
        if (amount === 2000) {
          // Set access to true and start the 24-hour timer
          setAccessGranted(true);
          setBlocked(false);
          setTimeout(() => {
            setAccessGranted(false);
            setBlocked(true);
          }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds
        } else if (amount === 12000) {
          // Set access to true and start the 7-day timer
          setAccessGranted(true);
          setBlocked(false);
          setTimeout(() => {
            setAccessGranted(false);
            setBlocked(true);
          }, 7 * 24 * 60 * 60 * 1000); // 7 days in milliseconds
        }
      })
      .catch((error) => {
        console.error("Failed to send payment details:", error);
      });
  };

  useEffect(() => {
    // Check if the user is blocked
    if (accessGranted) {
      if (!blocked) {
        // Redirect the user to Google or provide internet access here
        window.location.href = "https://www.google.com"; // Replace with the desired URL
      } else {
        console.log("Access blocked. Payment required.");
      }
    }
  }, [accessGranted, blocked]);

  return (
    <div className="Payment">
      <div className="payment-container">
        <select
          value={amount}
          onChange={handleAmountChange}
          style={{
            width: "100%",
            maxWidth: "400px",
            padding: "1rem",
            border: "1px solid #ccc",
            borderRadius: "5px",
            outline: "none",
            fontSize: "1.2rem",
            marginBottom: "1rem",
          }}
        >
          <option value={2000}>2000 UGX</option>
          <option value={12000}>12000 UGX</option>
        </select>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          onChange={(e) => setPhone(e.target.value)}
        />

        <button
          onClick={() =>
            handleFlutterPayment({
              callback: (response) => {
                console.log(response);
                sendPaymentDetails(response); // Send payment details after successful payment
                closePaymentModal();
              },
              onClose: () => {},
            })
          }
        >
          Pay
        </button>
      </div>
    </div>
  );
}
