"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("buyer");

  return (
    <main style={{ padding: "40px", maxWidth: "500px", margin: "0 auto" }}>
      <h1>Royal Ceylon Gems Login</h1>

      <p>Select your account type and sign in.</p>

      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
      />

      <div style={{ marginBottom: "20px" }}>
        <label>
          <input
            type="radio"
            value="buyer"
            checked={userType === "buyer"}
            onChange={(e) => setUserType(e.target.value)}
          />
          Buyer
        </label>

        <br />

        <label>
          <input
            type="radio"
            value="seller"
            checked={userType === "seller"}
            onChange={(e) => setUserType(e.target.value)}
          />
          Seller
        </label>
      </div>

      <button
        style={{
          width: "100%",
          padding: "12px",
          backgroundColor: "#0d3b66",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Login
      </button>
    </main>
  );
}
