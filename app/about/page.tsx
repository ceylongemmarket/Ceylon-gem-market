export default function AboutPage() {
  return (
    <main
      style={{
        background: "#07111f",
        minHeight: "100vh",
        color: "#ffffff",
        padding: "40px",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          textAlign: "center",
          marginBottom: "70px",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            color: "#D4AF37",
            marginBottom: "20px",
          }}
        >
          💎 About Royal Ceylon Gems
        </h1>

        <p
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            fontSize: "20px",
            lineHeight: "1.8",
            color: "#E5E7EB",
          }}
        >
          Royal Ceylon Gems is a premium digital marketplace dedicated
          to connecting verified gemstone sellers with buyers,
          collectors and investors around the world.
        </p>
      </section>

      {/* Our Story */}
      <section
        style={{
          background: "#111827",
          border: "1px solid #D4AF37",
          borderRadius: "20px",
          padding: "35px",
          marginBottom: "35px",
        }}
      >
        <h2
          style={{
            color: "#D4AF37",
            marginBottom: "20px",
          }}
        >
          📖 Our Story
        </h2>

        <p
          style={{
            lineHeight: "2",
            color: "#E5E7EB",
          }}
        >
          Royal Ceylon Gems was established with a vision of creating a
          trusted international platform for buying and selling
          Sri Lankan gemstones. Our mission is to provide transparency,
          trust, certification support and worldwide access to premium
          natural gemstones.
        </p>
      </section>

      {/* Mission & Vision */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(350px,1fr))",
          gap: "25px",
          marginBottom: "35px",
        }}
      >
        <div
          style={{
            background: "#111827",
            border: "1px solid #D4AF37",
            borderRadius: "20px",
            padding: "30px",
          }}
        >
          <h2
            style={{
              color: "#D4AF37",
            }}
          >
            🎯 Our Mission
          </h2>

          <p
            style={{
              lineHeight: "1.8",
            }}
          >
            To create a secure, transparent and trusted marketplace
            where buyers and sellers can confidently trade natural
            gemstones with international visibility.
          </p>
        </div>

        <div
          style={{
            background: "#111827",
            border: "1px solid #D4AF37",
            borderRadius: "20px",
            padding: "30px",
          }}
        >
          <h2
            style={{
              color: "#D4AF37",
            }}
          >
            🚀 Our Vision
          </h2>

          <p
            style={{
              lineHeight: "1.8",
            }}
          >
            To become the leading global marketplace for Sri Lankan
            gemstones while promoting trust, quality, certification and
            innovation within the gem industry.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        style={{
          background: "#111827",
          border: "1px solid #D4AF37",
          borderRadius: "20px",
          padding: "35px",
          marginBottom: "35px",
        }}
      >
        <h2
          style={{
            color: "#D4AF37",
            marginBottom: "20px",
          }}
        >
          🏆 Why Choose Royal Ceylon Gems
        </h2>

        <ul
          style={{
            lineHeight: "2",
            color: "#E5E7EB",
            fontSize: "18px",
          }}
        >
          <li>✅ Chairman Approved Listings</li>
          <li>✅ Verified Sellers</li>
          <li>✅ International Certification Support</li>
          <li>✅ Secure Inquiry System</li>
          <li>✅ Global Buyer Network</li>
          <li>✅ Investment Grade Gemstones</li>
        </ul>
      </section>

      {/* Sri Lankan Heritage */}
      <section
        style={{
          background: "#111827",
          border: "1px solid #D4AF37",
          borderRadius: "20px",
          padding: "35px",
          marginBottom: "35px",
        }}
      >
        <h2
          style={{
            color: "#D4AF37",
            marginBottom: "20px",
          }}
        >
          🌍 Sri Lankan Gem Heritage
        </h2>

        <p
          style={{
            lineHeight: "2",
            color: "#E5E7EB",
          }}
        >
          Sri Lanka has been globally recognized for its exceptional
          sapphires, rubies, cat's eye gemstones and other precious
          stones for centuries. Royal Ceylon Gems proudly promotes this
          heritage by connecting international buyers with trusted
          suppliers.
        </p>
      </section>

      {/* Chairman Message */}
      <section
        style={{
          background: "#111827",
          border: "1px solid #D4AF37",
          borderRadius: "20px",
          padding: "35px",
        }}
      >
        <h2
          style={{
            color: "#D4AF37",
            marginBottom: "20px",
          }}
        >
          👑 Chairman's Message
        </h2>

        <p
          style={{
            lineHeight: "2",
            color: "#E5E7EB",
          }}
        >
          Our commitment is to build a trusted gemstone ecosystem where
          quality, authenticity and transparency remain at the heart of
          every transaction. We welcome buyers, collectors, investors
          and sellers from around the world to become part of Royal
          Ceylon Gems.
        </p>
      </section>
    </main>
  );
}
