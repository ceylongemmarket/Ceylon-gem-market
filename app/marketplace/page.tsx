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
        padding: "40px",
        maxWidth: "1200px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Royal Ceylon Gems Marketplace</h1>

      {gems.map((gem) => (
        <div
          key={gem.id}
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>{gem.gem_name}</h2>

          <p>
            <strong>Type:</strong> {gem.gem_type}
          </p>

          <p>
            <strong>Origin:</strong> {gem.origin_country}
          </p>

          <p>
            <strong>Region:</strong> {gem.origin_region}
          </p>

          <p>
            <strong>Treatment:</strong> {gem.treatment}
          </p>

          <p>
            <strong>Color:</strong> {gem.color}
          </p>

          <p>
            <strong>Shape:</strong> {gem.shape}
          </p>

          <p>
            <strong>Laboratory:</strong> {gem.laboratory}
          </p>

          <p>
            <strong>Carat:</strong> {gem.carat}
          </p>

          <p>
            <strong>Price:</strong> USD {gem.price}
          </p>

          <p>
            <strong>Certificate:</strong> {gem.certificate_no}
          </p>

          {gem.gem_image && (
            <img
              src={gem.gem_image}
              alt={gem.gem_name}
              style={{
                maxWidth: "300px",
                borderRadius: "10px",
                marginTop: "15px",
              }}
            />
          )}
        </div>
      ))}
    </main>
  );
}
