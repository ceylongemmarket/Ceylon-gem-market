export default function ServicesPage() {
  const services = [
    {
      icon: "📜",
      title: "Certification Support",
      description:
        "Assistance with GIA, GRS, SSEF, Lotus and other international gemstone laboratory certifications.",
    },
    {
      icon: "💎",
      title: "Custom Gem Sourcing",
      description:
        "We help buyers source rare sapphires, rubies, padparadscha sapphires and investment-grade gemstones.",
    },
    {
      icon: "🚢",
      title: "Export Assistance",
      description:
        "Professional export documentation, customs guidance and worldwide gemstone shipping support.",
    },
    {
      icon: "📈",
      title: "Investment Consulting",
      description:
        "Market insights and guidance for collectors and investors interested in high-value gemstones.",
    },
    {
      icon: "🏆",
      title: "Gem Valuation",
      description:
        "Independent gemstone valuation services based on market trends, rarity and certification.",
    },
    {
      icon: "🤝",
      title: "Buyer & Seller Matching",
      description:
        "Connecting trusted buyers and verified sellers through Royal Ceylon Gems marketplace.",
    },
  ];

  return (
    <main
      style={{
        background: "#07111f",
        minHeight: "100vh",
        color: "#ffffff",
        padding: "40px",
      }}
    >
      {/* Hero */}
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
          🏆 Royal Ceylon Gem Services
        </h1>

        <p
          style={{
            maxWidth: "950px",
            margin: "0 auto",
            fontSize: "20px",
            lineHeight: "1.8",
            color: "#E5E7EB",
          }}
        >
          Professional gemstone services for buyers, investors,
          collectors and international traders. From certification
          support to export assistance, we help you trade with confidence.
        </p>
      </section>

      {/* Services Grid */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "25px",
          marginBottom: "80px",
        }}
      >
        {services.map((service) => (
          <div
            key={service.title}
            style={{
              background: "#111827",
              border: "1px solid #D4AF37",
              borderRadius: "18px",
              padding: "25px",
            }}
          >
            <div
              style={{
                fontSize: "50px",
                marginBottom: "15px",
              }}
            >
              {service.icon}
            </div>

            <h2
              style={{
                color: "#D4AF37",
                marginBottom: "15px",
              }}
            >
              {service.title}
            </h2>

            <p
              style={{
                lineHeight: "1.8",
                color: "#E5E7EB",
              }}
            >
              {service.description}
            </p>

            <button
              style={{
                marginTop: "20px",
                background: "#D4AF37",
                color: "#000",
                border: "none",
                padding: "12px 22px",
                borderRadius: "10px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Learn More
            </button>
          </div>
        ))}
      </section>

      {/* Why Choose Our Services */}
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
            marginBottom: "25px",
            fontSize: "40px",
          }}
        >
          Why Choose Royal Ceylon Gems?
        </h2>

        <ul
          style={{
            lineHeight: "2",
            color: "#E5E7EB",
            fontSize: "18px",
          }}
        >
          <li>✅ Verified gemstone marketplace</li>
          <li>✅ Chairman approved listings</li>
          <li>✅ International certification support</li>
          <li>✅ Trusted buyer and seller network</li>
          <li>✅ Investment-grade gemstone expertise</li>
          <li>✅ Worldwide trading opportunities</li>
        </ul>
      </section>

      {/* CTA */}
      <section
        style={{
          textAlign: "center",
          marginTop: "80px",
        }}
      >
        <h2
          style={{
            color: "#D4AF37",
            fontSize: "45px",
          }}
        >
          Need Professional Gemstone Assistance?
        </h2>

        <p
          style={{
            marginTop: "15px",
            color: "#E5E7EB",
          }}
        >
          Connect with Royal Ceylon Gems and discover trusted gemstone
          services tailored to your needs.
        </p>

        <button
          style={{
            marginTop: "25px",
            background: "#D4AF37",
            color: "#000",
            border: "none",
            padding: "15px 30px",
            borderRadius: "12px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Contact Our Team
        </button>
      </section>
    </main>
  );
}
