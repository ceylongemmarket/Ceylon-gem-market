"use client";

import { useEffect, useState } from "react";
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
      gem.gem_name?.toLowerCase().includes(search.toLowerCase()) ||
      gem.gem_type?.toLowerCase().includes(search.toLowerCase()) ||
      gem.origin_country?.toLowerCase().includes(search.toLowerCase())
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
          color: "#ffffff",
          padding: "40px",
          borderRadius: "12px",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        <h1>Royal Ceylon Gems Marketplace</h1>
        <p>Verified Sri Lankan Gemstone Marketplace</p>
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
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "25px",
        }}
      >
        {filteredGems.map((gem) => (
          <div
            key={gem.id}
            style={{
              background: "#ffffff",
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
                  background: "#ececec",
                  display:
