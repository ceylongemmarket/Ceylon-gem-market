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
    try {
      let gemImageUrl = "";
      let certificateImageUrl = "";

      if (gemImage) {
        const gemFileName =
          Date.now() + "-" + gemImage.name;

        const { error } = await supabase.storage
          .from("gem-images")
          .upload(gemFileName, gemImage);

        if (error) {
          alert(error.message);
          return;
        }

        const { data } = supabase.storage
          .from("gem-images")
          .getPublicUrl(gemFileName);

        gemImageUrl = data.publicUrl;
      }

      if (certificateImage) {
        const certFileName =
          Date.now() + "-" +
          certificateImage.name;

        const { error } = await supabase.storage
          .from("certificate-images")
          .upload(
            certFileName,
            certificateImage
          );

        if (error) {
          alert(error.message);
          return;
        }

        const { data } = supabase.storage
          .from("certificate-images")
          .getPublicUrl(certFileName);

        certificateImageUrl =
          data.publicUrl;
      }

      const { error } = await supabase
        .from("gems")
        .insert([
          {
            gem_name: gemName,
            gem_type: gemType,
            gem_price: Number(gemPrice),
            gem_carat: Number(gemCarat),

            origin_country: originCountry,
            origin_region: originRegion,

            treatment,
            color,
            shape,
            dimensions,
            transparency,

            laboratory,
            certificate_no: certificateNo,

            seller_name: sellerName,
            description,

            gem_image: gemImageUrl,
            certificate_image:
              certificateImageUrl,
          },
        ]);

      if (error) {
        alert(error.message);
        return;
      }

      alert("Gem Uploaded Successfully");

      setGemName("");
      setGemType("");
      setGemPrice("");
      setGemCarat("");
      setOriginCountry("");
      setOriginRegion("");
      setTreatment("");
      setColor("");
      setShape("");
      setDimensions("");
      setTransparency("");
      setLaboratory("");
      setCertificateNo("");
      setSellerName("");
      setDescription("");
    } catch (err) {
      console.log(err);
      alert("Upload Failed");
    }
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
        onChange={(e) =>
          setGemName(e.target.value)
        }
        style={inputStyle}
      />

      <input
        type="text"
        placeholder="Gem Type"
        value={gemType}
        onChange={(e) =>
          setGemType(e.target.value)
        }
        style={inputStyle}
      />

      <input
        type="number"
        placeholder="Price USD"
        value={gemPrice}
        onChange={(e) =>
          setGemPrice(e.target.value)
        }
        style={inputStyle}
      />

      <input
        type="number"
        placeholder="Carat Weight"
        value={gemCarat}
        onChange={(e) =>
          setGemCarat(e.target.value)
        }
        style={inputStyle}
      />

      <input
        type="text"
        placeholder="Country of Origin"
        value={originCountry}
        onChange={(e) =>
          setOriginCountry(e.target.value)
        }
        style={inputStyle}
      />

      <input
        type="text"
        placeholder="Origin Region"
        value={originRegion}
        onChange={(e) =>
          setOriginRegion(e.target.value)
        }
        style={inputStyle}
      />

      <select
        value={treatment}
        onChange={(e) =>
          setTreatment(e.target.value)
        }
        style={inputStyle}
      >
        <option value="">
          Select Treatment
        </option>
        <option value="Unheated">
          Unheated
        </option>
        <option value="Heated">
          Heated
        </option>
        <option value="Unknown">
          Unknown
        </option>
      </select>

      <input
        type="text"
        placeholder="Color"
        value={color}
        onChange={(e) =>
          setColor(e.target.value)
        }
        style={inputStyle}
      />

      <input
        type="text"
        placeholder="Shape"
        value={shape}
        onChange={(e) =>
          setShape(e.target.value)
        }
        style={inputStyle}
      />

      <input
        type="text"
        placeholder="Dimensions"
        value={dimensions}
        onChange={(e) =>
          setDimensions(e.target.value)
        }
        style={inputStyle}
      />

      <input
        type="text"
        placeholder="Transparency"
        value={transparency}
        onChange={(e) =>
          setTransparency(e.target.value)
        }
        style={inputStyle}
      />

      <input
        type="text"
        placeholder="Laboratory"
        value={laboratory}
        onChange={(e) =>
          setLaboratory(e.target.value)
        }
        style={inputStyle}
      />

      <input
        type="text"
        placeholder="Certificate Number"
        value={certificateNo}
        onChange={(e) =>
          setCertificateNo(e.target.value)
        }
        style={inputStyle}
      />

      <input
        type="text"
        placeholder="Seller Name"
        value={sellerName}
        onChange={(e) =>
          setSellerName(e.target.value)
        }
        style={inputStyle}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
        style={{
          width: "100%",
          height: "120px",
          padding: "12px",
          marginBottom: "15px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      />

      <label>Gem Image Upload</label>

      <input
        type="file"
        accept="image/*"
        onChange={(e) =>
          setGemImage(
            e.target.files?.[0] || null
          )
        }
        style={inputStyle}
      />

      <label>Certificate Image Upload</label>

      <input
        type="file"
        accept="image/*"
        onChange={(e) =>
          setCertificateImage(
            e.target.files?.[0] || null
          )
        }
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
        }}
      >
        Upload Gem
      </button>
    </main>
  );
}
