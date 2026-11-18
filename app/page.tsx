"use client";

export default function Home() {
  return (
    <main
      style={{
        background: "#0B1220",
        minHeight: "100vh",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          background: "#070B14",
          borderBottom: "1px solid #D4AF37",
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ color: "#D4AF37", margin: 0 }}>
          ROYAL CEYLON GEMS
        </h2>

        <div style={{ display: "flex", gap: "20px" }}>
          <a href="/" style={{ color: "#fff", textDecoration: "none" }}>
            Home
          </a>
          <a
            href="/marketplace"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Marketplace
          </a>
          <a
            href="/auctions"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Auctions
          </a>
          <a
            href="/contact"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        style={{
          padding: "120px 30px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "70px",
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
            color: "#E5E7EB",
            lineHeight: "1.8",
          }}
        >
          The Global Marketplace for Certified Gemstones,
          Live Auctions, Luxury Trading and Investment Grade Gems.
        </p>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <span style={{ color: "#D4AF37" }}>
            ✓ Verified Sellers
          </span>

          <span style={{ color: "#D4AF37" }}>
            ✓ Live Auctions
          </span>

          <span style={{ color: "#D4AF37" }}>
            ✓ Secure Trading
          </span>

          <span style={{ color: "#D4AF37" }}>
            ✓ Chairman Approved
          </span>
        </div>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <a href="/marketplace">
            <button
              style={{
                background: "#D4AF37",
                color: "#000",
                border: "none",
                padding: "15px 30px",
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
                padding: "15px 30px",
                borderRadius: "10px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Live Auctions
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
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "25px",
          }}
        >
          {[
            { title: "1000+", subtitle: "Gem Listings" },
            { title: "250+", subtitle: "Verified Sellers" },
            { title: "25+", subtitle: "Countries" },
            { title: "24/7", subtitle: "Global Access" },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: "#1F2937",
                padding: "30px",
                textAlign: "center",
                borderRadius: "15px",
                border: "1px solid #D4AF37",
              }}
            >
              <h2 style={{ color: "#D4AF37" }}>
                {item.title}
              </h2>

              <p>{item.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section
        style={{
          padding: "80px 30px",
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
          Featured Categories
        </h2>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
          }}
        >
          {[
            "Blue Sapphire",
            "Ruby",
            "Padparadscha",
            "Alexandrite",
            "Cat's Eye",
            "Spinel",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "#111827",
                border: "1px solid #D4AF37",
                borderRadius: "15px",
                padding: "25px",
                textAlign: "center",
              }}
            >
              <h3>{item}</h3>
            </div>
          ))}
        </div>
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
          Global Marketplace for Certified Gemstones
        </p>

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
