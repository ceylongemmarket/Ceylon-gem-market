"use client";

import { useState } from "react";

export default function GemUploadPage() {
  const [gemName, setGemName] = useState("");
  const [gemType, setGemType] = useState("");
  const [price, setPrice] = useState("");
  const [carat, setCarat] = useState("");

  const [originCountry, setOriginCountry] = useState("");
  const [originRegion, setOriginRegion] = useState("");

  const [treatment, setTreatment] = useState("");
  const [color, setColor] = useState("");
  const [sellerName, setSellerName] = useState("");

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Royal Ceylon Gems Upload</h1>

      <input
        type="text"
        placeholder="Gem Name"
        value={gemName}
        onChange={(e) => setGemName(e.target.value)}
        style={inputStyle}
      />

      <input
        type="text"
        placeholder="Gem Type"
        value={gemType}
        onChange={(e) => setGemType(e.target.value)}
        style={inputStyle}
      />

      <input
        type="number"
        placeholder="Price USD"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={inputStyle}
      />

      <input
        type="number"
        placeholder="Carat Weight"
        value={carat}
        onChange={(e) => setCarat(e.target.value)}
        style={inputStyle}
      />

      <input
        type="text"
        placeholder="Country of Origin"
        value={originCountry}
        onChange={(e) => setOriginCountry(e.target.value)}
        style={inputStyle}
      />

      <input
        type="text"
        placeholder="Origin Region"
        value={originRegion}
        onChange={(e) => setOriginRegion(e.target.value)}
        style={inputStyle}
      />

      <select
        value={treatment}
        onChange={(e) => setTreatment(e.target.value)}
        style={inputStyle}
      >
        <option value="">Select Treatment</option>
        <option value="Unheated">✅ Unheated</option>
        <option value="Heated">🔥 Heated</option>
        <option value="Unknown">❓ Unknown</option>
      </select>

      <input
        type="text"
        placeholder="Color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        style={inputStyle}
      />

      <input
        type="text"
        placeholder="Seller Name"
        value={sellerName}
        onChange={(e) => setSellerName(e.target.value)}
        style={inputStyle}
      />

      <button
        style={{
          width: "100%",
          padding: "15px",
          background: "#0d6efd",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Upload Gem
      </button>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  border: "1px solid #ccc",
  borderRadius: "8px",
} as React.CSSProperties;
