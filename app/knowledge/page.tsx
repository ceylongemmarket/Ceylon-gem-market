import Link from "next/link";

export default function KnowledgePage() {
  const articles = [
{
  title: "What Is Sapphire?",
  description: "...",
  icon: "💎",
  link: "/knowledge/sapphire",
},
    {
  title: "Ruby Buying Guide",
  description: "...",
  icon: "❤️",
  link: "/knowledge/ruby",
},
    {
  title: "Gem Certification Guide",
  description: "...",
  icon: "📜",
  link: "/knowledge/certification",
},
{
  title: "Investment Grade Gemstones",
  description: "...",
  icon: "📈",
  link: "/knowledge/investment",
},
{
  title: "Gem Treatments Explained",
  description: "...",
  icon: "🔥",
  link: "/knowledge/treatments",
},
{
  title: "Sri Lankan Gem Industry",
  description: "...",
  icon: "🌍",
  link: "/knowledge/sri-lanka-gems",
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

            <Link href={article.link}>
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
</Link>
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
