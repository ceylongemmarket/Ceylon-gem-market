"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "../../../lib/supabase";

export default function InquiryPage() {
  const params = useParams();

  const [buyerName, setBuyerName] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submitInquiry = async () => {
    setLoading(true);

    const { error } = await supabase
      .from("inquiries")
      .insert([
        {
          gem_id: Number(params.id),
          buyer_name: buyerName,
          buyer_email: buyerEmail,
          message: message,
        },
      ]);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Inquiry Sent Successfully ✅");

    setBuyerName("");
    setBuyerEmail("");
    setMessage("");
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f7fa",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: "#ffffff",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
        }}
      >
        <h1>📩 Send Inquiry</h1>

        <p>
          Submit your inquiry to the seller securely through
          Royal Ceylon Gems.
        </p>

        <input
          type="text"
          placeholder="Your Name"
          value={buyerName}
          onChange={(e) => setBuyerName(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "20px",
            marginBottom: "10px",
            border: "1px solid #ddd",
            borderRadius: "10px",
          }}
        />

        <input
          type="email"
          placeholder="Your Email"
          value={buyerEmail}
          onChange={(e) => setBuyerEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "10px",
            border: "1px solid #ddd",
            borderRadius: "10px",
          }}
        />

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            width: "100%",
            height: "150px",
            padding: "14px",
            border: "1px solid #ddd",
            borderRadius: "10px",
          }}
        />

        <button
          onClick={submitInquiry}
          disabled={loading}
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "15px",
            border: "none",
            borderRadius: "10px",
            background: "#0D6EFD",
            color: "#ffffff",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          {loading
            ? "Sending..."
            : "Send Inquiry"}
        </button>
      </div>
    </main>
  );
}
