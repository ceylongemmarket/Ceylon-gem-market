"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

interface Gem {
  id: number;
  gem_name: string;
  gem_type: string;
  carat: string;
  price: string;
  seller_name: string;
  gem_image: string;
  chairman_approved: boolean;
}

export default function Home() {
  const [featuredGems, setFeaturedGems] = useState<Gem[]>([]);
  const [totalGems, setTotalGems] = useState(0);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const { count } = await supabase
      .from("gems")
      .select("*", { count: "exact", head: true });

    setTotalGems(count || 0);

    const { data } = await supabase
      .from("gems")
      .select("*")
      .eq("chairman_approved", true)
      .order("id", { ascending: false })
      .limit(6);

    setFeaturedGems(data || []);
  };

  return (
    <main
      style={{
        background: "#0B1220",
        color: "#FFFFFF",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "#070B14",
          borderBottom: "1px solid #D4AF37",
          padding: "20px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <h2
          style={{
            color: "#D4AF37",
            margin: 0,
          }}
        >
          ROYAL CEYLON GEMS
        </h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/marketplace"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Marketplace
          </a>

          <a
            href="/register"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Sell Gems
          </a>

          <a
            href="/login"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Login
          </a>

          <a
            href="/chairman"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Chairman
          </a>
        </div>
      </nav>

      {/* Chairman Approved Banner */}
      <section
        style={{
          background: "#D4AF37",
          color: "#000",
          textAlign: "center",
          padding: "12px",
          fontWeight: "bold",
        }}
      >
        ✅ Chairman Approved Global Luxury Gem Marketplace
      </section>

      {/* Hero */}
      <section
        style={{
          padding: "120px 30px",
          textAlign: "center",
          background:
            "linear-gradient(135deg,#0B1220 0%,#111827 100%)",
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            color: "#D4AF37",
            marginBottom: "20px",
          }}
        >
          ROYAL CEYLON GEMS
        </h1>

        <p
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            fontSize: "24px",
            lineHeight: "1.8",
            color: "#E5E7EB",
          }}
        >
          Discover rare, certified and investment-grade Sri Lankan
          gemstones from trusted sellers around the world.
        </p>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <a href="/marketplace">
            <button
              style={{
                background: "#D4AF37",
                color: "#000",
                border: "none",
                padding: "16px 35px",
                borderRadius: "10px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Explore Marketplace
            </button>
          </a>

          <a href="/register">
            <button
              style={{
                background: "transparent",
                color: "#fff",
                border: "2px solid #D4AF37",
                padding: "16px 35px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Become a Seller
            </button>
          </a>
        </div>
      </section>

      {/* Statistics */}
      <section
        style={{
          padding: "80px 30px",
          background: "#111827",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "25px",
          }}
        >
          <div
            style={{
              background: "#1F2937",
              padding: "30px",
              borderRadius: "15px",
              textAlign: "center",
              border: "1px solid #D4AF37",
            }}
          >
            <h2 style={{ color: "#D4AF37" }}>
              {totalGems}
            </h2>
            <p>Listed Gemstones</p>
          </div>

          <div
            style={{
              background: "#1F2937",
              padding: "30px",
              borderRadius: "15px",
              textAlign: "center",
              border: "1px solid #D4AF37",
            }}
          >
            <h2 style={{ color: "#D4AF37" }}>
              Verified
            </h2>
            <p>Chairman Approved Listings</p>
          </div>

          <div
            style={{
              background: "#1F2937",
              padding: "30px",
              borderRadius: "15px",
              textAlign: "center",
              border: "1px solid #D4AF37",
            }}
          >
            <h2 style={{ color: "#D4AF37" }}>
              Global
            </h2>
            <p>International Trading</p>
          </div>

          <div
            style={{
              background: "#1F2937",
              padding: "30px",
              borderRadius: "15px",
              textAlign: "center",
              border: "1px solid #D4AF37",
            }}
          >
            <h2 style={{ color: "#D4AF37" }}>
              Secure
            </h2>
            <p>Inquiry System</p>
          </div>
        </div>
      </section>

      {/* Featured Gems */}
      <section
        style={{
          padding: "90px 30px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#D4AF37",
            fontSize: "42px",
            marginBottom: "40px",
          }}
        >
          Featured Gemstones
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(280px,1fr))",
            gap: "25px",
          }}
        >
          {featuredGems.map((gem) => (
            <a
              key={gem.id}
              href={`/${gem.id}`}
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
            >
              <div
                style={{
                  background: "#111827",
                  borderRadius: "18px",
                  overflow: "hidden",
                  border: "1px solid #D4AF37",
                }}
              >
                <img
                  src={
                    gem.gem_image ||
                    "https://via.placeholder.com/400x250"
                  }
                  alt={gem.gem_name}
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                  }}
                />

                <div
                  style={{
                    padding: "20px",
                  }}
                >
                  <h3>{gem.gem_name}</h3>

                  <p>{gem.gem_type}</p>

                  <p>
                    💎 {gem.carat} Ct
                  </p>

                  <p>
                    Seller: {gem.seller_name}
                  </p>

                  <h3
                    style={{
                      color: "#D4AF37",
                    }}
                  >
                    USD {gem.price}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section
        style={{
          padding: "80px 30px",
          background: "#111827",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#D4AF37",
            fontSize: "42px",
          }}
        >
          Featured Categories
        </h2>

        <div
          style={{
            maxWidth: "1200px",
            margin: "40px auto 0",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
          }}
        >
          {[
            "Blue Sapphire",
            "Ruby",
            "Cat's Eye",
            "Yellow Sapphire",
            "Alexandrite",
            "Spinel",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "#1F2937",
                padding: "25px",
                borderRadius: "15px",
                textAlign: "center",
                border: "1px solid #D4AF37",
              }}
            >
              <div style={{ fontSize: "40px" }}>💎</div>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        style={{
          padding: "80px 30px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#D4AF37",
            marginBottom: "40px",
          }}
        >
          Why Choose Royal Ceylon Gems
        </h2>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
          }}
        >
          {[
            "Verified Sellers",
            "Chairman Approved Listings",
            "Secure Inquiry System",
            "Natural Gemstones",
            "Global Marketplace",
            "Luxury Trading Experience",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "#111827",
                border: "1px solid #D4AF37",
                borderRadius: "15px",
                padding: "25px",
              }}
            >
              ✅ {item}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "100px 30px",
          textAlign: "center",
          background: "#111827",
        }}
      >
        <h2
          style={{
            color: "#D4AF37",
            fontSize: "50px",
          }}
        >
          Start Trading Luxury Gemstones Today
        </h2>

        <p
          style={{
            marginTop: "20px",
            color: "#E5E7EB",
          }}
        >
          Join international buyers and verified gem sellers on
          Royal Ceylon Gems.
        </p>

        <a href="/marketplace">
          <button
            style={{
              marginTop: "30px",
              background: "#D4AF37",
              color: "#000",
              border: "none",
              padding: "18px 40px",
              borderRadius: "10px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Visit Marketplace
          </button>
        </a>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#070B14",
          padding: "60px 30px",
          textAlign: "center",
          borderTop: "1px solid #D4AF37",
        }}
      >
        <h2 style={{ color: "#D4AF37" }}>
          ROYAL CEYLON GEMS
        </h2>

        <p style={{ color: "#9CA3AF" }}>
          Sri Lanka's Premier Luxury Gemstone Marketplace
        </p>

        <div
          style={{
            marginTop: "25px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <a href="/marketplace" style={{ color: "#fff" }}>
            Marketplace
          </a>

          <a href="/register" style={{ color: "#fff" }}>
            Sell Gems
          </a>

          <a href="/login" style={{ color: "#fff" }}>
            Login
          </a>

 <div
  style={{
    marginTop: "25px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  }}
>
  <a href="/marketplace" style={{ color: "#fff" }}>
    Marketplace
  </a>

  <a href="/register" style={{ color: "#fff" }}>
    Sell Gems
  </a>

  <a href="/login" style={{ color: "#fff" }}>
    Login
  </a>
</div>

<p
  style={{
    marginTop: "30px",
    color: "#6B7280",
  }}
>
  © 2026 Royal Ceylon Gems. All Rights Reserved.
</p>          
