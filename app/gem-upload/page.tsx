"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function GemUploadPage() {
  const [gemName, setGemName] = useState("");
  const [gemType, setGemType] = useState("");
  const [carat, setCarat] = useState("");
  const [price, setPrice] = useState("");
  const [certificateNo, setCertificateNo] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    const { error } = await supabase.from("gems").insert([
      {
        gem_name: gemName,
        gem_type: gemType,
        carat: carat,
        price: price,
        certificate_no: certificateNo,
        description: description,
        seller_name: "Approved Seller",
        seller_email: "seller@example.com",
      },
    ]);

    if (error) {
      console.error(error);
      alert("Gem Upload Failed");
    } else {
      alert("Gem Uploaded Successfully");

      setGemName("");
      setGemType("");
      setCarat("");
      setPrice("");
      setCertificateNo("");
      setDescription("");
    }
  };

  return (
    <main
      style={{
        padding: "40px",
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          color: "#0d3b66",
          marginBottom: "25px",
        }}
      >
        Royal Ceylon Gems - Gem Upload
      </h1>

      <input
        placeholder="Gem Name"
        value={gemName}
        onChange={(e) => setGemName(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "12px",
        }}
      />

      <input
        placeholder="Gem Type"
        value={gemType}
        onChange={(e) => setGemType(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "12px",
        }}
      />

      <input
        placeholder="Carat"
        value={carat}
        onChange={(e) => setCarat(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "12px",
        }}
      />

      <input
        placeholder="Price (USD)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "12px",
        }}
      />

      <input
        placeholder="Certificate Number"
        value={certificateNo}
        onChange={(e) => setCertificateNo(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "12px",
        }}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{
          width: "100%",
          height: "120px",
          padding: "12px",
          marginBottom: "20px",
        }}
      />

      <button
        onClick={handleSubmit}
        style={{
          width: "100%",
          padding: "14px",
          backgroundColor: "#0d6efd",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Upload Gem
      </button>
    </main>
  );
}
