export default function KnowledgePage() {
  const articles = [
    {
      title: "What Is Sapphire?",
      description:
        "Learn about natural sapphires, colors, origins, quality factors, and investment value.",
      icon: "💎",
    },
    {
      title: "Ruby Buying Guide",
      description:
        "Understand ruby quality, treatments, certification requirements, and pricing.",
      icon: "❤️",
    },
    {
      title: "Gem Certification Guide",
      description:
        "Learn the importance of GRS, GIA, SSEF, Lotus and other gem laboratories.",
      icon: "📜",
    },
    {
      title: "Investment Grade Gemstones",
      description:
        "Discover how gemstones are evaluated as long-term investment assets.",
      icon: "📈",
    },
    {
      title: "Gem Treatments Explained",
      description:
        "Learn the difference between heated, unheated and treated gemstones.",
      icon: "🔥",
    },
    {
      title: "Sri Lankan Gem Industry",
      description:
        "Explore the history and global importance of Sri Lankan gemstones.",
      icon: "🌍",
    },
  ];

  return (
    <main
      style={{
        background: "#0B1220",
        color: "#ffffff",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <section
        style={{
          textAlign: "center",
          marginBottom: "60px",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            color: "#D4AF37",
            marginBottom: "20px",
          }}
        >
          Gem Knowledge Center
        </h1>

        <p
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            fontSize: "20px",
            color: "#E5E7EB",
            lineHeight: "1.8",
          }}
        >
          Learn everything about sapphires, rubies, certification,
          gemstone investments and the Sri Lankan gem industry.
        </p>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "25px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {articles.map((article) => (
          <div
            key={article.title}
            style={{
              background: "#111827",
              border: "1px solid #D4AF37",
              borderRadius: "18px",
              padding: "25px",
              transition: "0.3s",
            }}
          >
            <div
              style={{
                fontSize: "50px",
                marginBottom: "15px",
              }}
            >
              {article.icon}
            </div>

            <h2
              style={{
                color: "#D4AF37",
                marginBottom: "10px",
              }}
            >
              {article.title}
            </h2>

            <p
              style={{
                color: "#D1D5DB",
                lineHeight: "1.8",
              }}
            >
              {article.description}
            </p>

            <button
              style={{
                marginTop: "20px",
                background: "#D4AF37",
                color: "#000",
                border: "none",
                padding: "12px 20px",
                borderRadius: "10px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Read More
            </button>
          </div>
        ))}
      </section>

      <section
        style={{
          marginTop: "80px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#D4AF37",
            fontSize: "40px",
          }}
        >
          Why Gem Knowledge Matters
        </h2>

        <p
          style={{
            maxWidth: "900px",
            margin: "20px auto",
            color: "#E5E7EB",
            lineHeight: "1.8",
          }}
        >
          Buyers who understand certification, treatments, origin and
          gemstone quality make better purchasing decisions and reduce
          investment risk.
        </p>
      </section>
    </main>
  );
}
