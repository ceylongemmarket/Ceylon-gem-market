export default function Home() {
  return (
    <main
      style={{
        background: "#0B1220",
        color: "#FFFFFF",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          padding: "120px 30px",
          textAlign: "center",
          background:
            "linear-gradient(135deg, #0B1220 0%, #111827 100%)",
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            color: "#D4AF37",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          ROYAL CEYLON GEMS
        </h1>

        <p
          style={{
            fontSize: "24px",
            maxWidth: "900px",
            margin: "0 auto",
            color: "#E5E7EB",
            lineHeight: "1.7",
          }}
        >
          Discover rare, certified and investment-grade Sri Lankan
          gemstones from trusted sellers across the world.
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
                fontSize: "16px",
              }}
            >
              Explore Marketplace
            </button>
          </a>

          <a href="/register">
            <button
              style={{
                background: "transparent",
                color: "#FFFFFF",
                border: "2px solid #D4AF37",
                padding: "16px 35px",
                borderRadius: "10px",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "16px",
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
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "25px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {[
            ["5000+", "Listed Gemstones"],
            ["1000+", "Registered Buyers"],
            ["250+", "Verified Sellers"],
            ["25+", "Countries Reached"],
          ].map(([value, label]) => (
            <div
              key={label}
              style={{
                background: "#1F2937",
                padding: "30px",
                borderRadius: "15px",
                textAlign: "center",
                border: "1px solid #D4AF37",
              }}
            >
              <h2
                style={{
                  color: "#D4AF37",
                  fontSize: "42px",
                  margin: 0,
                }}
              >
                {value}
              </h2>

              <p
                style={{
                  color: "#E5E7EB",
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section
        style={{
          padding: "80px 30px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#D4AF37",
            fontSize: "42px",
          }}
        >
          Featured Gem Categories
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          {[
            "Blue Sapphire",
            "Ruby",
            "Cat's Eye",
            "Yellow Sapphire",
            "Spinel",
            "Alexandrite",
          ].map((gem) => (
            <div
              key={gem}
              style={{
                background: "#111827",
                padding: "30px",
                textAlign: "center",
                borderRadius: "15px",
                border: "1px solid #D4AF37",
              }}
            >
              <div
                style={{
                  fontSize: "40px",
                  marginBottom: "15px",
                }}
              >
                💎
              </div>

              <h3>{gem}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
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
            marginBottom: "50px",
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
              "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
          }}
        >
          {[
            "Verified Gem Sellers",
            "Certified Natural Gemstones",
            "Secure Marketplace",
            "Global Trading Network",
            "Chairman Approved Platform",
            "International Buyers & Sellers",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "#1F2937",
                padding: "25px",
                borderRadius: "15px",
                border: "1px solid #D4AF37",
              }}
            >
              <h3
                style={{
                  color: "#D4AF37",
                }}
              >
                ✅ {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "100px 30px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "52px",
            color: "#D4AF37",
          }}
        >
          Discover Premium Sri Lankan Gemstones
        </h2>

        <p
          style={{
            color: "#E5E7EB",
            fontSize: "20px",
            maxWidth: "800px",
            margin: "20px auto",
          }}
        >
          Browse exclusive collections of natural sapphires,
          rubies, spinels and rare gemstones from verified sellers.
        </p>

        <a href="/marketplace">
          <button
            style={{
              background: "#D4AF37",
              color: "#000",
              border: "none",
              padding: "18px 40px",
              borderRadius: "10px",
              fontWeight: "bold",
              fontSize: "18px",
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
          padding: "50px 30px",
          textAlign: "center",
          borderTop: "1px solid #D4AF37",
        }}
      >
        <h2
          style={{
            color: "#D4AF37",
          }}
        >
          ROYAL CEYLON GEMS
        </h2>

        <p
          style={{
            color: "#9CA3AF",
          }}
        >
          Sri Lanka's Premier Luxury Gemstone Marketplace
        </p>

        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/marketplace"
            style={{ color: "#FFFFFF" }}
          >
            Marketplace
          </a>

          <a
            href="/register"
            style={{ color: "#FFFFFF" }}
          >
            Sell Gems
          </a>

          <a
            href="/login"
            style={{ color: "#FFFFFF" }}
          >
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
