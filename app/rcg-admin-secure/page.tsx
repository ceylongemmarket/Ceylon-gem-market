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

      <div
        style={{
          background: "#111827",
          border: "1px solid #D4AF37",
          borderRadius: "20px",
          padding: "30px",
        }}
      >
        <h2 style={{ color: "#D4AF37" }}>
          Welcome Chairman
        </h2>

        <p>
          Manage sellers, gemstones, auctions, revenue and platform settings.
        </p>
      </div>
    </main>
  );
}
