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
      loadSellers();
    }
  }, [authenticated]);

  const loadSellers = async () => {
    const { data, error } = await supabase
      .from("sellers")
      .select("*")
      .order("id", { ascending: false });

    if (!error) {
      setSellers(data || []);
    }
  };

  const approveSeller = async (id: number) => {
    const { error } = await supabase
      .from("sellers")
      .update({ status: "approved" })
      .eq("id", id);

    if (!error) {
      loadSellers();
    }
  };

  const rejectSeller = async (id: number) => {
    const { error } = await supabase
      .from("sellers")
      .update({ status: "rejected" })
      .eq("id", id);

    if (!error) {
      loadSellers();
    }
  };

  if (!authenticated) {
    return (
      <main style={{ padding: "40px", maxWidth: "500px", margin: "0 auto" }}>
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
    <main style={{ padding: "40px", maxWidth: "1000px", margin: "0 auto" }}>
      <h1>Royal Ceylon Gems Chairman Dashboard</h1>

      <h2>Seller Applications</h2>

      <p>
        <strong>Total Sellers:</strong> {sellers.length}
      </p>

      {sellers.length === 0 ? (
        <p>No seller applications found.</p>
      ) : (
        sellers.map((seller) => (
          <div
            key={seller.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "8px",
              backgroundColor: "#f8f9fa",
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

            <div style={{ marginTop: "10px" }}>
              <button
                onClick={() => approveSeller(seller.id)}
                style={{
                  backgroundColor: "green",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  marginRight: "10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Approve
              </button>

              <button
                onClick={() => rejectSeller(seller.id)}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Reject
              </button>
            </div>
          </div>
        ))
      )}
    </main>
  );
}
