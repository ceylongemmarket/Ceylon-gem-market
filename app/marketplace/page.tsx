"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function MarketplacePage() {
  const [gems, setGems] = useState<any[]>([]);

  useEffect(() => {
    loadGems();
  }, []);

  const loadGems = async () => {
    const { data, error } = await supabase
      .from("gems")
      .select("*")
      .order("id", { ascending: false });

    if (!error) {
      setGems(data || []);
    }
  };

  return (
    <main
      style={{
        background: "#f5f7fa",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <div
        style={{
          background: "#0d3b66",
          color: "white",
          padding: "40px",
          borderRadius: "12px",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        <h1>Royal Ceylon Gems Marketplace</h1>
        <p>Verified Sri Lankan Gemstones Marketplace</p>
      </div>

      <input
        type="text"
        placeholder="Search Gems..."
        style={{
          width: "100%",
          padding: "15px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginBottom: "30px",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "25px",
        }}
      >
        {gems.map((gem) => (
          <div
            key={gem.id}
            style={{
              background: "white",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            }}
          >
            {gem.gem_image ? (
              <img
                src={gem.gem_image}
                alt={gem.gem_name}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                }}
              />
            ) : (
              <div
                style={{
                  height: "250px",
                  background: "#e9ecef",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                No Image
              </div>
            )}

            <div style={{ padding: "20px" }}>
              <h2
                style={{
                  marginBottom: "10px",
                  color: "#0d3b66",
                }}
              >
                {gem.gem_name}
              </h2>

              <p>
                <strong>Type:</strong> {gem.gem_type}
              </p>

              <p>
                <strong>Origin:</strong>{" "}
                {gem.origin_country}
              </p>

              <p>
                <strong>Region:</strong>{" "}
                {gem.origin_region}
              </p>

              <p>
                <strong>Treatment:</strong>{" "}
                {gem.treatment}
              </p>

              <p>
                <strong>Color:</strong> {gem.color}
              </p>

              <p>
                <strong>Shape:</strong> {gem.shape}
              </p>

              <p>
                <strong>Laboratory:</strong>{" "}
                {gem.laboratory}
              </p>

              <p>
                <strong>Carat:</strong> {gem.carat}
              </p>

              <h3
                style={{
                  color: "green",
                  marginTop: "10px",
                }}
              >
                USD {gem.price}
              </h3>

              <p>
                <strong>Certificate:</strong>{" "}
                {gem.certificate_no}
              </p>

              <button
                style={{
                  width: "100%",
                  marginTop: "15px",
                  padding: "12px",
                  background: "#0d6efd",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
