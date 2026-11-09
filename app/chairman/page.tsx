"use client";

import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";

export default function ChairmanDashboard() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [sellers, setSellers] = useState<any[]>([]);

  const chairmanPassword = "KalanaRCG2026";

  useEffect(() => {
    if (authenticated) {
      loadSellers();
    }
  }, [authenticated]);

  const handleLogin = () => {
    if (password === chairmanPassword) {
      setAuthenticated(true);
    } else {
      alert("Invalid Chairman Password");
    }
  };

  const loadSellers = async () => {
    const { data, error } = await supabase
      .from("sellers")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      console.error(error);
    } else {
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
      alert("Seller Approved Successfully");
    }
  };

  const rejectSeller = async (id: number) => {
    const { error } = await supabase
      .from("sellers")
      .update({ status: "rejected" })
      .eq("id", id);

    if (!error) {
      loadSellers();
      alert("Seller Rejected Successfully");
    }
  };

  if (!authenticated) {
    return (
      <main
        style={{
          padding: "40px",
          maxWidth: "500px",
          margin: "0 auto",
          fontFamily: "Arial, sans-serif",
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
            padding: "12px",
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
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Enter Dashboard
        </button>
      </main>
    );
  }

  const approvedCount = sellers.filter(
    (seller) => seller.status === "approved"
  ).length;

  const pendingCount = sellers.filter(
    (seller) => seller.status === "pending"
  ).length;

  const rejectedCount = sellers.filter(
    (seller) => seller.status === "rejected"
  ).length;

  return (
    <main
      style={{
        padding: "40px",
        maxWidth: "1200px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          color: "#0d3b66",
          marginBottom: "30px",
        }}
      >
        Royal Ceylon Gems Chairman Dashboard
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            background: "#0d6efd",
            color: "white",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h3>Total Sellers</h3>
          <h1>{sellers.length}</h1>
        </div>

        <div
          style={{
            background: "#198754",
            color: "white",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h3>Approved Sellers</h3>
          <h1>{approvedCount}</h1>
        </div>

        <div
          style={{
            background: "#ffc107",
            color: "black",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h3>Pending Sellers</h3>
          <h1>{pendingCount}</h1>
        </div>

        <div
          style={{
            background: "#dc3545",
            color: "white",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h3>Rejected Sellers</h3>
          <h1>{rejectedCount}</h1>
        </div>
      </div>

      <h2>Seller Applications</h2>

      {sellers.length === 0 ? (
        <p>No seller applications found.</p>
      ) : (
        sellers.map((seller) => (
          <div
            key={seller.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "20px",
              marginBottom: "20px",
              background: "#f8f9fa",
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

            <div style={{ marginTop: "15px" }}>
              <button
                onClick={() => approveSeller(seller.id)}
                style={{
                  background: "green",
                  color: "white",
                  border: "none",
                  padding: "10px 15px",
                  marginRight: "10px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Approve
              </button>

              <button
                onClick={() => rejectSeller(seller.id)}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "10px 15px",
                  borderRadius: "6px",
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
