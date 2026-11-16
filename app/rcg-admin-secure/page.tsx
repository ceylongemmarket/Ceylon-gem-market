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
          Manage sellers, gemstones, auctions, revenue and platform
          settings.
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

        <div style={{ marginTop: "20px" }}>
          <label>Broker Commission (%)</label>
          <input
            type="number"
            defaultValue="5"
            style={inputStyle}
          />

          <label>Seller Registration Fee ($)</label>
          <input
            type="number"
            defaultValue="50"
            style={inputStyle}
          />

          <label>Auction Commission (%)</label>
          <input
            type="number"
            defaultValue="10"
            style={inputStyle}
          />

          <label>Certification Fee ($)</label>
          <input
            type="number"
            defaultValue="25"
            style={inputStyle}
          />

          <label>Featured Listing Fee ($)</label>
          <input
            type="number"
            defaultValue="15"
            style={inputStyle}
          />

          <button
            style={{
              background: "#D4AF37",
              color: "#000",
              border: "none",
              padding: "12px 25px",
              borderRadius: "10px",
              fontWeight: "bold",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Save Financial Settings
          </button>
        </div>
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

        <p>💰 Broker Commission Income : $0</p>

        <p>📝 Registration Income : $0</p>

        <p>🔨 Auction Income : $0</p>

        <p>📜 Certification Income : $0</p>

        <p>⭐ Featured Listing Income : $0</p>

        <h3 style={{ color: "#D4AF37" }}>
          Total Revenue : $0
        </h3>
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

        <p>Manage Active Auctions</p>

        <p>Monitor Auction Revenue</p>
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

        <textarea
          placeholder="Type announcement here..."
          style={{
            width: "100%",
            height: "120px",
            background: "#1F2937",
            color: "#ffffff",
            border: "1px solid #374151",
            borderRadius: "10px",
            padding: "12px",
          }}
        />

        <button
          style={{
            marginTop: "15px",
            background: "#D4AF37",
            color: "#000",
            border: "none",
            padding: "12px 20px",
            borderRadius: "10px",
            fontWeight: "bold",
          }}
        >
          Publish Message
        </button>
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

        <p>Sri Lanka Gem Market Outlook 2027</p>

        <p>Date : 15 December 2026</p>

        <p>Time : 7.00 PM</p>

        <p>Mode : Online Meeting</p>
      </div>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "5px",
  marginBottom: "15px",
  borderRadius: "10px",
  border: "1px solid #374151",
  background: "#1F2937",
  color: "#ffffff",
} as const;
