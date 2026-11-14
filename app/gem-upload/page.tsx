"use client";

import React, { useState } from "react";
import { supabase } from "../../lib/supabase";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  border: "1px solid #ddd",
  borderRadius: "8px",
};

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

  const [sellerName, setSellerName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");

  const [description, setDescription] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [transparency, setTransparency] = useState("");
  const [stockQty, setStockQty] = useState("");

  const [gemImage, setGemImage] = useState<File | null>(null);
  const [certificateImage, setCertificateImage] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    try {
      setLoading(true);

      let gemImageUrl = "";
      let certificateImageUrl = "";

      if (!gemName || !gemType || !price || !carat) {
        alert("Please fill all required fields");
        setLoading(false);
        return;
      }

      if (gemImage) {
        const fileName = `gem-${Date.now()}-${gemImage.name}`;

        const { error: uploadError } = await supabase.storage
          .from("gem-images")
          .upload(fileName, gemImage);

        if (uploadError) {
          alert(uploadError.message);
          setLoading(false);
          return;
        }

        const { data } = supabase.storage
          .from("gem-images")
          .getPublicUrl(fileName);

        gemImageUrl = data.publicUrl;
      }

      if (certificateImage) {
        const fileName = `cert-${Date.now()}-${certificateImage.name}`;

        const { error: uploadError } = await supabase.storage
          .from("certificate-images")
          .upload(fileName, certificateImage);

        if (uploadError) {
          alert(uploadError.message);
          setLoading(false);
          return;
        }

        const { data } = supabase.storage
          .from("certificate-images")
          .getPublicUrl(fileName);

        certificateImageUrl = data.publicUrl;
      }

      const { error } = await supabase.from("gems").insert([
        {
          gem_name: gemName,
          gem_type: gemType,
          price: Number(price),
          carat: Number(carat),

          seller_name: sellerName,
          seller_email: sellerEmail,

          description,

          origin_country: originCountry,
          origin_region: originRegion,

          treatment,
          color,
          shape,

          laboratory,
          certificate_no: certificateNo,

          dimensions,
          transparency,

          stock_qty: Number(stockQty || 0),

          gem_image: gemImageUrl,
          certificate_image: certificateImageUrl,

          status: "pending",
          chairman_approved: false,
        },
      ]);

      if (error) {
        alert(error.message);
        setLoading(false);
        return;
      }

      alert("Gem Uploaded Successfully");

      setGemName("");
      setGemType("");
      setPrice("");
      setCarat("");
      setOriginCountry("");
      setOriginRegion("");
      setTreatment("");
      setColor("");
      setShape("");
      setLaboratory("");
      setCertificateNo("");
      setSellerName("");
      setSellerEmail("");
      setDescription("");
      setDimensions("");
      setTransparency("");
      setStockQty("");
      setGemImage(null);
      setCertificateImage(null);

      setLoading(false);
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px",
        fontFamily: "Arial",
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
        placeholder="Price (USD)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={inputStyle}
      />

      <input
        type="number"
        placeholder="Carat"
        value={carat}
        onChange={(e) => setCarat(e.target.value)}
        style={inputStyle}
      />

      <input
        type="text"
        placeholder="Seller Name"
        value={sellerName}
        onChange={(e) => setSellerName(e.target.value)}
        style={inputStyle}
      />

      <input
        type="email"
        placeholder="Seller Email"
        value={sellerEmail}
        onChange={(e) => setSellerEmail(e.target.value)}
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
        <option value="Unheated">Unheated</option>
        <option value="Heated">Heated</option>
        <option value="Unknown">Unknown</option>
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
        type="text"
        placeholder="Dimensions"
        value={dimensions}
        onChange={(e) => setDimensions(e.target.value)}
        style={inputStyle}
      />

      <input
        type="text"
        placeholder="Transparency"
        value={transparency}
        onChange={(e) => setTransparency(e.target.value)}
        style={inputStyle}
      />

      <input
        type="number"
        placeholder="Stock Quantity"
        value={stockQty}
        onChange={(e) => setStockQty(e.target.value)}
        style={inputStyle}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{
          ...inputStyle,
          height: "120px",
        }}
      />

      <h3>Gem Image</h3>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setGemImage(e.target.files?.[0] || null)}
        style={inputStyle}
      />

      <h3>Certificate Image</h3>

      <input
        type="file"
        accept="image/*"
        onChange={(e) =>
          setCertificateImage(e.target.files?.[0] || null)
        }
        style={inputStyle}
      />

      <button
        onClick={handleUpload}
        disabled={loading}
        style={{
          width: "100%",
          padding: "15px",
          background: "#0d6efd",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        {loading ? "Uploading..." : "Upload Gem"}
      </button>
    </main>
  );
}
