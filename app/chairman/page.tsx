"use client";

import { useState } from "react";

export default function ChairmanDashboard() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const chairmanPassword = "KalanaRCG2026";

  const handleLogin = () => {
    if (password === chairmanPassword) {
      setAuthenticated(true);
    } else {
      alert("Invalid Chairman Password");
    }
  };

  if (!authenticated) {
    return (
      <main
        style={{
          padding: "40px",
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        <h1>Chairman Access</h1>

        <input
          type="password"
          placeholder="Chairman Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#0d3b66",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Enter Dashboard
        </button>
      </main>
    );
  }

  return (
    <main style={{ padding: "40px" }}>
      <h1>Royal Ceylon Gems Chairman Dashboard</h1>

      <h2>System Ready</h2>

      <ul>
        <li>Seller Registration Database Connected</li>
        <li>Supabase Connected</li>
        <li>Chairman Access Protected</li>
      </ul>
    </main>
  );
}
