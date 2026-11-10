"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function MarketplacePage() {
  const [gems, setGems] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadGems();
  }, []);

  async function loadGems() {
    const { data, error } = await supabase
      .from("gems")
      .select("*");

    if (!error) {
      setGems(data || []);
    }
  }

  const filteredGems = gems.filter((gem) =>
    (gem.gem_name || "")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main
      style={{
        padding: "30px",
        minHeight: "100vh",
        background: "#f5f7fa",
      }}
    >
      <h1>Royal Ceylon Gems Marketplace</h1>

      <input
        type="text"
        placeholder="Search Gems..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "20px",
        }}
      >
        {filteredGems.map((gem) => (
          <div
            key={gem.id}
            style={{
              background: "#fff",
              padding: "15px",
              borderRadius: "10px",
              border: "1px solid #ddd",
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
                  borderRadius: "10px",
                }}
              />
            ) : (
              <div
                style={{
                  height: "250px",
                  background: "#ececec",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                No Image
              </div>
            )}

            <h2>{gem.gem_name}</h2>

            <p>Type: {gem.gem_type}</p>

            <p>Country: {gem.origin_country}</p>

            <p>Carat: {gem.gem_carat}</p>

            <p>Price: USD {gem.gem_price}</p>

            <button
              style={{
                width: "100%",
                padding: "10px",
                background: "#0d6efd",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
              }}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
