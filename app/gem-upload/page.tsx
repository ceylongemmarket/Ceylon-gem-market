"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function GemUploadPage() {
  const [gemName, setGemName] = useState("");
  const [gemType, setGemType] = useState("");
  const [originCountry, setOriginCountry] = useState("");
  const [originRegion, setOriginRegion] = useState("");
  const [treatment, setTreatment] = useState("");
  const [color, setColor] = useState("");
  const [shape, setShape] = useState("");
  const [laboratory, setLaboratory] = useState("");
  const [carat, setCarat] = useState("");
  const [price, setPrice] = useState("");
  const [certificateNo, setCertificateNo] = useState("");
  const [description, setDescription] = useState("");

  const [gemImage, setGemImage] = useState<File | null>(null);
  const [certificateImage, setCertificateImage] =
    useState<File | null>(null);

  const handleSubmit = async () => {
    let gemImageUrl = "";
    let certificateImageUrl = "";

    try {
      if (gemImage) {
        const gemFileName = `${Date.now()}-${gemImage.name}`;

        const { error } = await supabase.storage
          .from("gem-images")
          .upload(gemFileName, gemImage);

        if (!error) {
          const { data } = supabase.storage
            .from("gem-images")
            .getPublicUrl(gemFileName);

          gemImageUrl = data.publicUrl;
        }
      }

      if (certificateImage) {
        const certFileName = `${Date.now()}-${certificateImage.name}`;

        const { error } = await supabase.storage
          .from("certificate-images")
          .upload(certFileName, certificateImage);

        if (!error) {
          const { data } = supabase.storage
            .from("certificate-images")
            .getPublicUrl(certFileName);

          certificateImageUrl = data.publicUrl;
        }
      }

      const { error } = await supabase
        .from("gems")
        .insert([
          {
            gem_name: gemName,
            gem_type: gemType,
            origin_country: originCountry,
            origin_region: originRegion,
            treatment: treatment,
            color: color,
            shape: shape,
            laboratory: laboratory,
            carat: carat,
            price: price,
            certificate_no: certificateNo,
            description: description,
            gem_image: gemImageUrl,
            certificate_image: certificateImageUrl,
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
        setOriginCountry("");
        setOriginRegion("");
        setTreatment("");
        setColor("");
        setShape("");
        setLaboratory("");
        setCarat("");
        setPrice("");
        setCertificateNo("");
        setDescription("");
        setGemImage(null);
        setCertificateImage(null);
      }
    } catch (err) {
      console.error(err);
      alert("Upload Error");
    }
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
      <h1
        style={{
          color: "#0d3b66",
          marginBottom: "25px",
        }}
      >
        Royal Ceylon Gems - Professional Gem Upload
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
        placeholder="Origin Country"
        value={originCountry}
        onChange={(e) => setOriginCountry(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "12px",
        }}
      />

      <input
        placeholder="Origin Region"
        value={originRegion}
        onChange={(e) => setOriginRegion(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "12px",
        }}
      />

      <input
        placeholder="Treatment (Unheated / Heated)"
        value={treatment}
        onChange={(e) => setTreatment(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "12px",
        }}
      />

      <input
        placeholder="Color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "12px",
        }}
      />

      <input
        placeholder="Shape"
        value={shape}
        onChange={(e) => setShape(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "12px",
        }}
      />

      <input
        placeholder="Laboratory (GRS / GIA / SSEF)"
        value={laboratory}
        onChange={(e) => setLaboratory(e.target.value)}
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

      <h3>Gem Image</h3>

      <input
        type="file"
        accept="image/*"
        onChange={(e) =>
          setGemImage(
            e.target.files ? e.target.files[0] : null
          )
        }
        style={{
          marginBottom: "20px",
        }}
      />

      <h3>Certificate Image</h3>

      <input
        type="file"
        accept="image/*"
        onChange={(e) =>
          setCertificateImage(
            e.target.files ? e.target.files[0] : null
          )
        }
        style={{
          marginBottom: "20px",
        }}
      />

      <textarea
        placeholder="Gem Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{
          width: "100%",
          height: "150px",
          padding: "12px",
          marginBottom: "20px",
        }}
      />

      <button
        onClick={handleSubmit}
        style={{
          width: "100%",
          padding: "15px",
          background: "#0d6efd",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Upload Gem
      </button>
    </main>
  );
}
