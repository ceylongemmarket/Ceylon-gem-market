export default function AuctionsPage() {
  const premiumAuctions = [
    {
      name: "Royal Blue Sapphire",
      bid: "$10,000",
      carat: "12.5 Ct",
    },
    {
      name: "Padparadscha Sapphire",
      bid: "$7,500",
      carat: "8.2 Ct",
    },
    {
      name: "Burma Ruby",
      bid: "$15,000",
      carat: "6.8 Ct",
    },
  ];

  const budgetAuctions = [
    {
      name: "Moonstone",
      bid: "$25",
      carat: "4.2 Ct",
    },
    {
      name: "Garnet",
      bid: "$50",
      carat: "5.1 Ct",
    },
    {
      name: "Quartz",
      bid: "$100",
      carat: "7.4 Ct",
    },
  ];

  return (
    <main
      style={{
        background: "#07111f",
        minHeight: "100vh",
        color: "#fff",
        padding: "40px",
      }}
    >
      {/* Hero */}
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
          🔨 Royal Ceylon Gem Auctions
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
          Participate in premium and budget gemstone auctions.
          Discover rare sapphires, rubies and investment-grade
          gemstones from trusted sellers.
        </p>
      </section>

      {/* Premium Auctions */}
      <section
        style={{
          marginBottom: "80px",
        }}
      >
        <h2
          style={{
            color: "#D4AF37",
            marginBottom: "25px",
            fontSize: "40px",
          }}
        >
          👑 Premium Auctions
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "25px",
          }}
        >
          {premiumAuctions.map((item) => (
            <div
              key={item.name}
              style={{
                background: "#111827",
                border: "1px solid #D4AF37",
                borderRadius: "18px",
                padding: "25px",
              }}
            >
              <h3>{item.name}</h3>

              <p>💎 {item.carat}</p>

              <p
                style={{
                  color: "#D4AF37",
                  fontWeight: "bold",
                  fontSize: "28px",
                }}
              >
                Starting Bid {item.bid}
              </p>

              <button
                style={{
                  marginTop: "15px",
                  padding: "12px 20px",
                  background: "#D4AF37",
                  color: "#000",
                  border: "none",
                  borderRadius: "10px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Join Auction
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Budget Auctions */}
      <section
        style={{
          marginBottom: "80px",
        }}
      >
        <h2
          style={{
            color: "#D4AF37",
            marginBottom: "25px",
            fontSize: "40px",
          }}
        >
          💰 Budget Auctions
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "25px",
          }}
        >
          {budgetAuctions.map((item) => (
            <div
              key={item.name}
              style={{
                background: "#111827",
                border: "1px solid #D4AF37",
                borderRadius: "18px",
                padding: "25px",
              }}
            >
              <h3>{item.name}</h3>

              <p>💎 {item.carat}</p>

              <p
                style={{
                  color: "#D4AF37",
                  fontWeight: "bold",
                  fontSize: "28px",
                }}
              >
                Starting Bid {item.bid}
              </p>

              <button
                style={{
                  marginTop: "15px",
                  padding: "12px 20px",
                  background: "#D4AF37",
                  color: "#000",
                  border: "none",
                  borderRadius: "10px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Join Auction
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Auction Rules */}
      <section
        style={{
          background: "#111827",
          border: "1px solid #D4AF37",
          borderRadius: "18px",
          padding: "30px",
        }}
      >
        <h2
          style={{
            color: "#D4AF37",
            marginBottom: "20px",
          }}
        >
          📜 Auction Rules
        </h2>

        <ul
          style={{
            lineHeight: "2",
            color: "#E5E7EB",
          }}
        >
          <li>All bids are final.</li>
          <li>Winning bidders must complete payment.</li>
          <li>Certified gemstones receive priority listing.</li>
          <li>Chairman approved sellers receive premium exposure.</li>
          <li>Royal Ceylon Gems reserves auction moderation rights.</li>
        </ul>
      </section>
    </main>
  );
}
