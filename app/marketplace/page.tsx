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
            fontWeight: "700",
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
              boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
              border: "1px solid #ececec",
              transition: "0.3s",
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
                  fontWeight
