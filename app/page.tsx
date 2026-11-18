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
  <a href="/" style={{ color: "#fff", textDecoration: "none" }}>
    Home
  </a>

  <a href="/marketplace" style={{ color: "#fff", textDecoration: "none" }}>
    Marketplace
  </a>

  <a href="/knowledge" style={{ color: "#fff", textDecoration: "none" }}>
    Knowledge
  </a>

  <a href="/auctions" style={{ color: "#fff", textDecoration: "none" }}>
    Auctions
  </a>

  <a href="/services" style={{ color: "#fff", textDecoration: "none" }}>
    Services
  </a>

  <a href="/about" style={{ color: "#fff", textDecoration: "none" }}>
    About
  </a>

  <a href="/contact" style={{ color: "#fff", textDecoration: "none" }}>
    Contact
  </a>
          
  </div>

  </nav>

      {/* Banner */}
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
    maxWidth: "1000px",
    margin: "0 auto",
    fontSize: "24px",
    lineHeight: "1.8",
    color: "#E5E7EB",
  }}
>
  The Global Marketplace for Certified Gemstones,
  Live Auctions, Escrow Protected Trading and
  Investment Grade Rare Gems.
</p>

<div
  style={{
    marginTop: "35px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    color: "#D4AF37",
    fontWeight: "bold",
    fontSize: "16px",
  }}
>
  <span>✓ Verified Sellers</span>
  <span>✓ Escrow Protection</span>
  <span>✓ Live Auctions</span>
  <span>✓ Certified Gemstones</span>
  <span>✓ Global Trading</span>
</div>
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

<a href="/auctions">
  <button
    style={{
      background: "#10B981",
      color: "#fff",
      border: "none",
      padding: "16px 35px",
      borderRadius: "10px",
      fontWeight: "bold",
      cursor: "pointer",
    }}
  >
    Live Auctions
  </button>
</a>

<a href="/seller-register">
  <button
    style={{
      background: "transparent",
      color: "#fff",
      border: "2px solid #D4AF37",
      padding: "16px 35px",
      borderRadius: "10px",
      cursor: "pointer",
      fontWeight: "bold",
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
            <h2 style={{ color: "#D4AF37" }}>{totalGems}</h2>
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
            <h2 style={{ color: "#D4AF37" }}>Verified</h2>
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
            <h2 style={{ color: "#D4AF37" }}>Global</h2>
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
            <h2 style={{ color: "#D4AF37" }}>Secure</h2>
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

                <div style={{ padding: "20px" }}>
                  <h3>{gem.gem_name}</h3>

                  <p>{gem.gem_type}</p>

                  <p>💎 {gem.carat} Ct</p>

                  <p>Seller: {gem.seller_name}</p>

                  <h3 style={{ color: "#D4AF37" }}>
                    USD {gem.price}
                  </h3>
                  <p
  style={{
    color: "#10B981",
    fontWeight: "bold",
    marginTop: "8px",
  }}
>
  Chairman Verified Listing
</p>

<div
  style={{
    display: "flex",
    gap: "10px",
    marginTop: "15px",
  }}
>
  <button
    style={{
      flex: 1,
      background: "#D4AF37",
      color: "#000",
      border: "none",
      padding: "12px",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "bold",
    }}
  >
    View Details
  </button>

  <button
    style={{
      flex: 1,
      background: "#10B981",
      color: "#fff",
      border: "none",
      padding: "12px",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "bold",
    }}
  >
    Make Offer
  </button>
</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

{/* Escrow Protection */}

<section
  style={{
    padding: "90px 30px",
    background: "#111827",
    textAlign: "center",
  }}
>
  <h2
    style={{
      color: "#D4AF37",
      fontSize: "42px",
      marginBottom: "20px",
    }}
  >
    Escrow Protected Trading
  </h2>

  <p
    style={{
      maxWidth: "900px",
      margin: "0 auto",
      color: "#E5E7EB",
      lineHeight: "1.8",
      fontSize: "18px",
    }}
  >
    Buyer payments remain protected until the gemstone
    is received and verified. Seller delivery details
    are released only after payment confirmation.
  </p>

  <div
    style={{
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit,minmax(220px,1fr))",
      gap: "20px",
      maxWidth: "1200px",
      margin: "50px auto 0",
    }}
  >
    {[
      "Buyer Payment",
      "Escrow Protection",
      "Shipment",
      "Delivery Verification",
      "Fund Release",
    ].map((step, index) => (
      <div
        key={step}
        style={{
          background: "#1F2937",
          padding: "25px",
          borderRadius: "15px",
          border: "1px solid #D4AF37",
        }}
      >
        <h2 style={{ color: "#D4AF37" }}>
          {index + 1}
        </h2>

        <p>{step}</p>
      </div>
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

<p
  style={{
    color: "#9CA3AF",
    maxWidth: "700px",
    margin: "15px auto",
    lineHeight: "1.8",
  }}
>
  Global Marketplace for Certified Gemstones,
  Live Auctions, Escrow Protected Transactions
  and Investment Grade Gem Trading.
</p>

        <div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    flexWrap: "wrap",
    marginTop: "25px",
    color: "#D4AF37",
    fontWeight: "bold",
  }}
>
  <span>Verified Sellers</span>
  <span>Escrow Protection</span>
  <span>Live Auctions</span>
  <span>Certificate Verification</span>
</div>
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

  <a href="/auctions" style={{ color: "#fff" }}>
    Auctions
  </a>

  <a href="/seller-register" style={{ color: "#fff" }}>
    Become a Seller
  </a>

  <a href="/buyer-register" style={{ color: "#fff" }}>
    Become a Buyer
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
      </footer>
    </main>
  );
}
