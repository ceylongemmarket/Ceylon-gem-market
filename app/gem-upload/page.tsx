"use client";

import { useState } from "react";

export default function GemUploadPage() {
  const [gemName, setGemName] = useState("");
  const [gemType, setGemType] = useState("");
  const [gemPrice, setGemPrice] = useState("");
  const [gemCarat, setGemCarat] = useState("");

  const [originCountry, setOriginCountry] = useState("");
  const [originRegion, setOriginRegion] = useState("");

  const [treatment, setTreatment] = useState("");
  const [color, setColor] = useState("");
  const [shape, setShape] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [transparency, setTransparency] = useState("");

  const [laboratory, setLaboratory] = useState("");
  const [certificateNo, setCertificateNo] = useState("");

  const [sellerName, setSellerName] = useState("");
  const [description, setDescription] = useState("");

  const [gemImage, setGemImage] = useState<File | null>(null);
  const [certificateImage, setCertificateImage] =
    useState<File | null>(null);

  const handleUpload = async () => {
    alert("Gem Upload Form Ready");
  };

  return (
    <main
      style={{
        maxWidth: "1000px",
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
        placeholder="Price
