"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [country, setCountry] = useState("");

  const handleRegister = async () => {
    const { error } = await supabase.from("sellers").insert([
      {
        full_name: fullName,
        business_name: businessName,
        email: email,
        mobile: mobile,
        country: country,
      },
    ]);

    if (error) {
      alert("Registration Failed");
      console.error(error);
    } else {
      alert("Registration Submitted Successfully");

      setFullName("");
      setBusinessName("");
      setEmail("");
      setMobile("");
      setCountry("");
    }
  };

  return (
    <main
      style={{
        padding: "40px",
        maxWidth: "600px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Seller Registration</h1>

      <p>Join Royal Ceylon Gems Marketplace</p>

      <input
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <input
        placeholder="Business Name"
        value={businessName}
        onChange={(e) => setBusinessName(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <input
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <input
        placeholder="Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <input
        placeholder="Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
        }}
      />

      <button
        onClick={handleRegister}
        style={{
          width: "100%",
          padding: "12px",
          backgroundColor: "#0066cc",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Register
      </button>
    </main>
  );
}
