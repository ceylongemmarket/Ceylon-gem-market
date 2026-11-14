"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../../lib/supabase";

interface Gem {
  id: number;
  gem_name: string;
  gem_type: string;
  price: number;
  carat: number;
  gem_image: string;
  color: string;
  treatment: string;
  origin_country: string;
  origin_region: string;
  laboratory: string;
}

export default function MarketplacePage() {
  const [gems, setGems] = useState<Gem[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadGems();
  }, []);

  const loadGems = async () => {
    const { data, error } = await supabase
      .from("gems")
      .select("*")
      .order("id", { ascending: false });

    if (!error && data) {
      setGems(data);
    }
  };

  const filteredGems = gems.filter(
    (gem) =>
      gem.gem_name?.toLowerCase().includes(search.toLowerCase()) ||
      gem.gem_type?.toLowerCase().includes(search.toLowerCase()) ||
      gem.origin_country?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main
      style={{
        background: "#f5f7fa",
        minHeight: "100vh",
        padding: "20px",
        maxWidth: "1600px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(135deg, #0d3b66 0%, #1b4965 50%, #2a6f97 100%)",
          color: "#ffffff",
          padding: "70px 40px",
          borderRadius: "20px",
          textAlign: "center",
          marginBottom: "30px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            marginBottom: "15px",
            fontWeight: 700,
          }}
        >
          💎 Royal Ceylon Gems Marketplace
        </h1>

        <p
          style={{
            fontSize: "18px",
            maxWidth: "850px",
            margin: "0 auto",
            opacity: 0.95,
          }}
        >
          Discover Premium Sri Lankan Sapphires, Rubies,
          Padparadscha and Rare Natural Gemstones with
          International Certification.
        </p>
      </div>

      <input
        type="text"
        placeholder="🔍 Search Gems..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "15px",
          borderRadius: "12px",
          border: "1px solid #ccc",
          marginBottom: "30px",
          fontSize: "16px",
          boxSizing: "border-box",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredGems.map((gem) => (
          <div
            key={gem.id}
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid #ececec",
              boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
            }}
          >
            {gem.gem_image ? (
              <img
                src={gem.gem_image}
                alt={gem.gem_name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
            ) : (
              <div
                style={{
                  height: "200px",
                  background: "#eeeeee",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "bold",
                }}
              >
                No Image
              </div>
            )}

            <div style={{ padding: "12px" }}>
              <div
                style={{
                  display: "flex",
                  gap: "6px",
                  flexWrap: "wrap",
                  marginBottom: "10px",
                }}
              >
                <span
                  style={{
                    background: "#E8F5E9",
                    color: "#2E7D32",
                    padding: "4px 8px",
                    borderRadius: "20px",
                    fontSize: "11px",
                    fontWeight: "bold",
                  }}
                >
                  ✓ Verified Seller
                </span>

                <span
                  style={{
                    background:
                      gem.treatment === "Unheated"
                        ? "#E3F2FD"
                        : "#FFF3E0",
                    color:
                      gem.treatment === "Unheated"
                        ? "#1565C0"
                        : "#EF6C00",
                    padding: "4px 8px",
                    borderRadius: "20px",
                    fontSize: "11px",
                    fontWeight: "bold",
                  }}
                >
                  {gem.treatment === "Unheated"
                    ? "✅ Unheated"
                    : "🔥 Heated"}
                </span>

                <span
                  style={{
                    background: "#F3E5F5",
                    color: "#6A1B9A",
                    padding: "4px 8px",
                    borderRadius: "20px",
                    fontSize: "11px",
                    fontWeight: "bold",
                  }}
                >
                  📜 Certified
                </span>
              </div>

              <h2
                style={{
                  marginBottom: "6px",
                }}
              >
                {gem.gem_name}
              </h2>

              <p
                style={{
                  color: "#666",
                  marginBottom: "10px",
                }}
              >
                {gem.gem_type}
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <strong>💎 {gem.carat} Ct</strong>
                <strong>🎨 {gem.color || "N/A"}</strong>
              </div>

              <p>🌍 {gem.origin_country || "Sri Lanka"}</p>
              <p>📍 {gem.origin_region || "-"}</p>

              <p
                style={{
                  color: "#2E7D32",
                  fontWeight: "bold",
                }}
              >
                📜 {gem.laboratory || "Certified"}
              </p>

              <h3
                style={{
                  color: "#D32F2F",
                  fontSize: "30px",
                  marginTop: "15px",
                  marginBottom: "15px",
                }}
              >
                USD {gem.price}
              </h3>

              <Link href={`/marketplace/${gem.id}`}>
                <button
                  style={{
                    width: "100%",
                    padding: "12px",
                    background: "#0D6EFD",
                    color: "#ffffff",
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
