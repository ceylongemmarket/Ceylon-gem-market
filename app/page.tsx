export default function Home() {
  return (
    <main
      style={{
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      <section
        style={{
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            color: "#0d3b66",
          }}
        >
          Royal Ceylon Gems
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#555",
          }}
        >
          Sri Lanka's Trusted Online Gemstone Marketplace
        </p>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <a href="/register">
            <button
              style={{
                padding: "12px 25px",
                backgroundColor: "#0066cc",
                color: "white",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Register
            </button>
          </a>

          <a href="/login">
            <button
              style={{
                padding: "12px 25px",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Login
            </button>
          </a>
        </div>
      </section>

      <section style={{ marginTop: "60px" }}>
        <h2>Featured Gem Categories</h2>

        <ul>
          <li>Blue Sapphire</li>
          <li>Ruby</li>
          <li>Cat's Eye</li>
          <li>Yellow Sapphire</li>
          <li>Spinel</li>
          <li>Alexandrite</li>
        </ul>
      </section>

      <section style={{ marginTop: "60px" }}>
        <h2>Why Choose Royal Ceylon Gems?</h2>

        <ul>
          <li>Verified Gem Sellers</li>
          <li>Trusted Sri Lankan Marketplace</li>
          <li>Secure Buyer and Seller Connections</li>
          <li>Chairman Controlled Platform</li>
          <li>International Trading Opportunities</li>
        </ul>
      </section>

      <section style={{ marginTop: "60px" }}>
        <h2>Contact Us</h2>

        <p>Email: kalanaudayanga3@gmail.com</p>
      </section>
    </main>
  );
}
