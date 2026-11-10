"use client";

import { useState } from "react";

export default function GemUploadPage() {
  const [gemName, setGemName] = useState("");
  const [gemType, setGemType] = useState("");
  const [gemPrice, setGemPrice] = useState("");
  const [gemCarat, setGemCarat] = useState("");

  const handleUpload = () => {
    alert("Gem Upload Button Working");
  };

  return (
    <main
      style={{
        padding: "40px",
        maxWidth: "900px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Royal Ceylon Gems Gem Upload</h1>

      <input
        type="text"
        placeholder="Gem Name"
        value={gemName}
        onChange={(e) => setGemName(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "10px",
        }}
      />

      <input
        type="text"
        placeholder="Gem Type"
        value={gemType}
        onChange={(e) => setGemType(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "10px",
        }}
      />

      <input
        type="number"
        placeholder="Carat"
        value={gemCarat}
        onChange={(e) => setGemCarat(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "10px",
        }}
      />

      <input
        type="number"
        placeholder="Price (USD)"
        value={gemPrice}
        onChange={(e) => setGemPrice(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "20px",
        }}
      />

      <button
        onClick={handleUpload}
        style={{
          width: "100%",
          padding: "12px",
          background: "#0d6efd",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Upload Gem
      </button>
    </main>
  );
}
