"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "../../../lib/supabase";

interface Gem {
  id: number;
  gem_name: string;
  gem_type: string;
  price: number;
  carat: number;
  color: string;
  treatment: string;
  origin_country: string;
  origin_region: string;
  laboratory: string;
  certificate_no: string;
  dimensions: string;
  transparency: string;
  description: string;
  seller_name: string;
  seller_email: string;
  gem_image: string;
  certificate_image: string;
}

export default function GemDetailsPage() {
  const params = useParams();
  const [gem, setGem] = useState<Gem | null>(null);
  const [loading, setLoading] = useState(true);
  const [similarGems, setSimilarGems] = useState<any[]>([]);
  
  useEffect(() => {
    loadGem();
  }, []);

  const loadGem = async () => {
  const { data, error } = await supabase
    .from("gems")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!error && data) {
    setGem(data);

    const { data: similar } = await supabase
      .from("gems")
      .select("*")
      .eq("gem_type", data.gem_type)
      .neq("id", data.id)
      .limit(4);

    setSimilarGems(similar || []);
  }

  setLoading(false);
};

  if (loading) {
    return (
      <div
        style={{
          padding: "50px",
          textAlign: "center",
        }}
      >
        Loading Gem Details...
      </div>
    );
  }

  if (!gem) {
    return (
      <div
        style={{
          padding: "50px",
          textAlign: "center",
        }}
      >
        Gem Not Found
      </div>
    );
  }

  return (
    <main
      style={{
        background: "#f5f7fa",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          background: "#ffffff",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            padding: "30px",
          }}
        >
          <div>
            {gem.gem_image ? (
              <img
                src={gem.gem_image}
                alt={gem.gem_name}
                style={{
                  width: "100%",
                  borderRadius: "15px",
                }}
              />
            ) : (
              <div
                style={{
                  height: "500px",
                  background: "#eeeeee",
                  borderRadius: "15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                No Image Available
              </div>
            )}

            {gem.certificate_image && (
              <>
                <h3 style={{ marginTop: "25px" }}>
                  Certificate Image
                </h3>

                <img
                  src={gem.certificate_image}
                  alt="Certificate"
                  style={{
                    width: "100%",
                    borderRadius: "15px",
                    marginTop: "10px",
                  }}
                />
              </>
            )}
          </div>

          <div>
            <span
              style={{
                background: "#E8F5E9",
                color: "#2E7D32",
                padding: "8px 12px",
                borderRadius: "20px",
                fontWeight: "bold",
              }}
            >
              ✅ Verified Gem
            </span>

            <h1
              style={{
                marginTop: "20px",
                fontSize: "42px",
              }}
            >
              {gem.gem_name}
            </h1>

            <h2
              style={{
                color: "#D32F2F",
                fontSize: "42px",
              }}
            >
              USD {gem.price}
            </h2>

            <hr style={{ margin: "25px 0" }} />

            <table
              style={{
                width: "100%",
                lineHeight: "2",
              }}
            >
              <tbody>
                <tr>
                  <td><strong>Gem Type</strong></td>
                  <td>{gem.gem_type}</td>
                </tr>

                <tr>
                  <td><strong>Carat</strong></td>
                  <td>{gem.carat} Ct</td>
                </tr>

                <tr>
                  <td><strong>Color</strong></td>
                  <td>{gem.color || "N/A"}</td>
                </tr>

                <tr>
                  <td><strong>Treatment</strong></td>
                  <td>{gem.treatment || "-"}</td>
                </tr>

                <tr>
                  <td><strong>Country</strong></td>
                  <td>{gem.origin_country || "Sri Lanka"}</td>
                </tr>

                <tr>
                  <td><strong>Region</strong></td>
                  <td>{gem.origin_region || "-"}</td>
                </tr>

                <tr>
                  <td><strong>Laboratory</strong></td>
                  <td>{gem.laboratory || "-"}</td>
                </tr>

                <tr>
                  <td><strong>Certificate No</strong></td>
                  <td>{gem.certificate_no || "-"}</td>
                </tr>

                <tr>
                  <td><strong>Dimensions</strong></td>
                  <td>{gem.dimensions || "-"}</td>
                </tr>

                <tr>
                  <td><strong>Transparency</strong></td>
                  <td>{gem.transparency || "-"}</td>
                </tr>
              </tbody>
            </table>

            <hr style={{ margin: "25px 0" }} />

            <h3>Description</h3>

            <p
              style={{
                lineHeight: "1.8",
              }}
            >
              {gem.description || "No description available"}
            </p>

            <hr style={{ margin: "25px 0" }} />

            <h3>Seller Information</h3>

            <p>
  ✅ Verified Seller
</p>

<p>
  Seller contact details are protected.
</p>

<p>
  Use the inquiry system to contact the seller.
</p>

            <button
              style={{
                width: "100%",
                marginTop: "20px",
                padding: "15px",
                background: "#0D6EFD",
                color: "#ffffff",
                border: "none",
                borderRadius: "12px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Send Inquiry
            </button>
          </div>
        </div>
      </div>
      {similarGems.length > 0 && (
  <div
    style={{
      maxWidth: "1400px",
      margin: "40px auto",
    }}
  >
    <h2>💎 Similar Gemstones</h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(250px,1fr))",
        gap: "20px",
      }}
    >
      {similarGems.map((item) => (
        <a
          key={item.id}
          href={`/marketplace/${item.id}`}
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow:
                "0 5px 15px rgba(0,0,0,0.08)",
            }}
          >
            {item.gem_image && (
              <img
                src={item.gem_image}
                alt={item.gem_name}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                }}
              />
            )}

            <div style={{ padding: "15px" }}>
              <h3>{item.gem_name}</h3>

              <p>{item.gem_type}</p>

              <p>💎 {item.carat} Ct</p>

              <strong>USD {item.price}</strong>
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
)}
    </main>
  );
}
