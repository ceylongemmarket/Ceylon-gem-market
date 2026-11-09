"use client";

import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";

export default function ChairmanDashboard() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [sellers, setSellers] = useState<any[]>([]);

  const chairmanPassword = "KalanaRCG2026";

  const handleLogin = () => {
    if (password === chairmanPassword) {
      setAuthenticated(true);
    } else {
      alert("Invalid Chairman Password");
    }
  };

  useEffect(() => {
    if (authenticated) {
      fetchSellers();
    }
  }, [authenticated]);

  const fetchSellers = async () => {
    const { data, error } = await supabase
      .from("sellers")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
    } else {
      setSellers(data || []);
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
            cursor: "pointer",
          }}
        >
          Enter Dashboard
        </button>
      </main>
    );
  }

  return (
    <main
      style={{
        padding: "40px",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <h1>Royal Ceylon Gems Chairman Dashboard V2</h1>

      <h2>Seller Applications</h2>

      {sellers.length === 0 ? (
        <p>No seller registrations found.</p>
      ) : (
        sellers.map((seller) => (
          <div
            key={seller.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "8px",
            }}
          >
            <h3>{seller.full_name}</h3>

            <p>
              <strong>Business:</strong> {seller.business_name}
            </p>

            <p>
              <strong>Email:</strong> {seller.email}
            </p>

            <p>
              <strong>Mobile:</strong> {seller.mobile}
            </p>

            <p>
              <strong>Country:</strong> {seller.country}
            </p>

            <p>
              <strong>Status:</strong> {seller.status}
            </p>
          </div>
        ))
      )}
    </main>
  );
}
