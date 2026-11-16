export default function ChairmanDashboard() {
  return (
    <main
      style={{
        background: "#07111f",
        minHeight: "100vh",
        color: "#ffffff",
        padding: "40px",
      }}
    >
      <h1
        style={{
          color: "#D4AF37",
          fontSize: "55px",
          marginBottom: "30px",
        }}
      >
        👑 Chairman Dashboard Pro
      </h1>

      {/* Welcome */}
      <div
        style={{
          background: "#111827",
          border: "1px solid #D4AF37",
          borderRadius: "20px",
          padding: "30px",
          marginBottom: "30px",
        }}
      >
        <h2 style={{ color: "#D4AF37" }}>
          Welcome Chairman
        </h2>

        <p>
          Manage sellers, gemstones, auctions, revenue and platform settings.
        </p>
      </div>

      {/* Financial Settings */}
      <div
        style={{
          background: "#111827",
          border: "1px solid #D4AF37",
          borderRadius: "20px",
          padding: "30px",
          marginBottom: "30px",
        }}
      >
        <h2 style={{ color: "#D4AF37" }}>
          💰 Financial Settings
        </h2>

        <p>Broker Commission : 5%</p>

        <p>Seller Registration Fee : $50</p>

        <p>Auction Commission : 10%</p>

        <p>Certification Fee : $25</p>

        <p>Featured Listing Fee : $15</p>
      </div>

      {/* Revenue Center */}
      <div
        style={{
          background: "#111827",
          border: "1px solid #D4AF37",
          borderRadius: "20px",
          padding: "30px",
          marginBottom: "30px",
        }}
      >
        <h2 style={{ color: "#D4AF37" }}>
          📈 Revenue Center
        </h2>

        <p>Broker Commission Income : $0</p>

        <p>Registration Income : $0</p>

        <p>Auction Income : $0</p>

        <p>Total Revenue : $0</p>
      </div>

      {/* Seller Management */}
      <div
        style={{
          background: "#111827",
          border: "1px solid #D4AF37",
          borderRadius: "20px",
          padding: "30px",
          marginBottom: "30px",
        }}
      >
        <h2 style={{ color: "#D4AF37" }}>
          👥 Seller Management
        </h2>

        <p>✅ Approved Sellers</p>

        <p>⏳ Pending Sellers</p>

        <p>🚫 Blocked Sellers</p>

        <p>🪪 Verification Requests</p>
      </div>

      {/* Gem Management */}
      <div
        style={{
          background: "#111827",
          border: "1px solid #D4AF37",
          borderRadius: "20px",
          padding: "30px",
          marginBottom: "30px",
        }}
      >
        <h2 style={{ color: "#D4AF37" }}>
          💎 Gem Management
        </h2>

        <p>✅ Approved Gems</p>

        <p>⏳ Pending Gems</p>

        <p>⭐ Featured Gems</p>

        <p>🚫 Rejected Gems</p>
      </div>

      {/* Auction Management */}
      <div
        style={{
          background: "#111827",
          border: "1px solid #D4AF37",
          borderRadius: "20px",
          padding: "30px",
          marginBottom: "30px",
        }}
      >
        <h2 style={{ color: "#D4AF37" }}>
          🔨 Auction Management
        </h2>

        <p>Create Auctions</p>

        <p>Approve Auction Entries</p>

        <p>Auction Revenue Monitoring</p>

        <p>Manage Active Auctions</p>
      </div>

      {/* Chairman Messages */}
      <div
        style={{
          background: "#111827",
          border: "1px solid #D4AF37",
          borderRadius: "20px",
          padding: "30px",
          marginBottom: "30px",
        }}
      >
        <h2 style={{ color: "#D4AF37" }}>
          📢 Chairman Messages
        </h2>

        <p>
          Send announcements to buyers, sellers and auction participants.
        </p>
      </div>

      {/* Public Meetings */}
      <div
        style={{
          background: "#111827",
          border: "1px solid #D4AF37",
          borderRadius: "20px",
          padding: "30px",
        }}
      >
        <h2 style={{ color: "#D4AF37" }}>
          🎤 Public Chairman Meetings
        </h2>

        <p>
          Sri Lanka Gem Market Outlook 2027
        </p>

        <p>
          Date : 15 December 2026
        </p>

        <p>
          Time : 7.00 PM
        </p>

        <p>
          Mode : Online Meeting
        </p>
      </div>
    </main>
  );
}
