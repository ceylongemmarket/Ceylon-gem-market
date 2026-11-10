"use client";

import { useState } from "react";

export default function GemUploadPage() {
  const [gemName, setGemName] = useState("");
  const [gemType, setGemType] = useState("");
  const [price, setPrice] = useState("");
  const [carat, setCarat] = useState("");

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px",
      }}
    >
      <h1>Royal Ceylon Gems Upload</h1>

      <input
        type="text"
        placeholder="Gem Name"
        value={gemName}
        onChange={(e) => setGemName(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "15px",
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
          marginBottom: "15px",
        }}
      />

      <input
        type="number"
        placeholder="Price USD"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "15px",
        }}
      />

      <input
        type="number"
        placeholder="Carat Weight"
        value={carat}
        onChange={(e) => setCarat(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "15px",
        }}
      />

      <button
        style={{
          width: "100%",
          padding: "15px",
          background: "#0d6efd",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
        }}
      >
        Upload Gem
      </button>
    </main>
  );
}
