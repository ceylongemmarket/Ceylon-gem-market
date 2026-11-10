"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../../lib/supabase";

export default function MarketplacePage() {
  const [gems, setGems] = useState<any[]>([]);
  const [search, setSearch] = useState("");

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

  const filteredGems = gems.filter(
    (gem) =>
      gem.gem_name
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      gem.gem_type
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      gem.origin_country
        ?.toLowerCase()
        .includes(search.toLowerCase())
  );

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
          padding: "50px",
          borderRadius: "15px",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <h1>Royal Ceylon Gems Marketplace</h1>

        <p>
          Buy Certified Natural Gemstones From
          Trusted Sri Lankan Sellers
        </p>
      </div>

      <input
        type="text"
        placeholder="Search Gems..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "15px",
          borderRadius: "10px",
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
        {filteredGems.map((gem) => (
          <div
            key={gem.id}
            style={{
              background: "#fff",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow:
                "0 4px 15px rgba(0,0,0,0.08)",
              border: "1px solid #eee",
            }}
          >
            {gem.gem_image ? (
              <img
                src={gem.gem_image}
                alt={gem.gem_name}
                style={{
                  width: "100%",
                  height: "280px",
                  objectFit: "cover",
                }}
              />
            ) : (
              <div
                style={{
                  height: "280px",
                  background: "#e5e5e5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                No Image
              </div>
            )}

            <div style={{ padding: "16px" }}>
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  flexWrap: "wrap",
                  marginBottom: "12px",
                }}
              >
                <span
                  style={{
                    background: "#e8f5e9",
                    color: "#2e7d32",
                    padding: "4px 8px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  ✓ Verified Seller
                </span>

                <span
                  style={{
                    background:
                      gem.treatment === "Unheated"
                        ? "#e3f2fd"
                        : "#fff3e0",
                    color:
                      gem.treatment === "Unheated"
                        ? "#1565c0"
                        : "#ef6c00",
                    padding: "4px 8px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {gem.treatment === "Unheated"
                    ? "✅ Unheated"
                    : "🔥 Heated"}
                </span>

                <span
                  style={{
                    background: "#f3e5f5",
                    color: "#6a1b9a",
                    padding: "4px 8px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  📜 Certified
                </span>
              </div>

              <h2
                style={{
                  marginBottom: "10px",
                }}
              >
                {gem.gem_name}
              </h2>

              <p
                style={{
                  color: "#666",
                }}
              >
                {gem.gem_type}
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  marginTop: "10px",
                }}
              >
                <strong>
                  💎 {gem.gem_carat} Ct
                </strong>

                <strong>
                  🎨 {gem.color}
                </strong>
              </div>

              <p
                style={{
                  marginTop: "12px",
                }}
              >
                🌍 {gem.origin_country}
              </p>

              <p>
                📍 {gem.origin_region}
              </p>

              <p
                style={{
                  color: "#2e7d32",
                  fontWeight: "bold",
                }}
              >
                📜 {gem.laboratory}
              </p>

              <h3
                style={{
                  color: "#d32f2f",
                  fontSize: "28px",
                  marginTop: "15px",
                }}
              >
                USD {gem.gem_price}
              </h3>

              <Link
                href={`/marketplace/${gem.id}`}
              >
                <button
                  style={{
                    width: "100%",
                    marginTop: "15px",
                    padding: "12px",
                    background: "#0d6efd",
                    color: "#fff",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
