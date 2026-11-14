"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";
const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  border: "1px solid #ccc",
  borderRadius: "8px",
} as React.CSSProperties;

export default function GemUploadPage() {
  const [gemName, setGemName] = useState("");
  const [gemType, setGemType] = useState("");
  const [price, setPrice] = useState("");
  const [carat, setCarat] = useState("");

  const [originCountry, setOriginCountry] = useState("");
  const [originRegion, setOriginRegion] = useState("");

  const [treatment, setTreatment] = useState("");
  const [color, setColor] = useState("");
  const [shape, setShape] = useState("");

  const [laboratory, setLaboratory] = useState("");
  const [certificateNo, setCertificateNo] = useState("");

const [sellerEmail, setSellerEmail] = useState("");
const [dimensions, setDimensions] = useState("");
const [transparency, setTransparency] = useState("");
const [stockQty, setStockQty] = useState("");

  const handleUpload = async () => {
  try {
    const { error } = await supabase
      .from("gems")
      .insert([
        {
          gem_name: gemName,
          gem_type: gemType,
          carat: carat,
          price: price,
          certificate_no: certificateNo,
          description: description,
          seller_name: sellerName,
          seller_email: sellerEmail,
          origin_country: originCountry,
          origin_region: originRegion,
          treatment: treatment,
          color: color,
          shape: shape,
          laboratory: laboratory,
          dimensions: dimensions,
          transparency: transparency,
          stock_qty: Number(stockQty),
          status: "pending",
          chairman_approved: false
        }
      ]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Gem Uploaded Successfully");
  } catch (err) {
    console.error(err);
    alert("Something went wrong");
  }
};

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
        placeholder="Shape"
        value={shape}
        onChange={(e) => setShape(e.target.value)}
        style={inputStyle}
      />

      <input
        type="text"
        placeholder="Laboratory"
        value={laboratory}
        onChange={(e) => setLaboratory(e.target.value)}
        style={inputStyle}
      />

      <input
        type="text"
        placeholder="Certificate Number"
        value={certificateNo}
        onChange={(e) => setCertificateNo(e.target.value)}
        style={inputStyle}
      />

      <input
  type="email"
  placeholder="Seller Email"
  value={sellerEmail}
  onChange={(e) => setSellerEmail(e.target.value)}
  style={inputStyle}
/>
       

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{
          width: "100%",
          height: "120px",
          padding: "12px",
          marginBottom: "15px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      />

      <label>
        <strong>Gem Image Upload</strong>
      </label>

      <input
        type="file"
        accept="image/*"
        style={inputStyle}
      />

      <label>
        <strong>Certificate Image Upload</strong>
      </label>

      <input
        type="file"
        accept="image/*"
        style={inputStyle}
      />

      <button
        onClick={handleUpload}
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
