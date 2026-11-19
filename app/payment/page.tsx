export default function PaymentPage() {
  return (
    <main
      style={{
        background: "#0B1220",
        minHeight: "100vh",
        color: "#fff",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          color: "#D4AF37",
          marginBottom: "30px",
        }}
      >
        Auction Payment
      </h1>

      <div
        style={{
          maxWidth: "700px",
          background: "#111827",
          padding: "30px",
          borderRadius: "15px",
          border: "1px solid #D4AF37",
        }}
      >
        <h2 style={{ color: "#D4AF37" }}>
          Selected Package
        </h2>

        <p>Duration: 1 Day</p>

        <p>Auction Fee: $2</p>

        <p>Status: Pending Payment</p>

        <button
          style={{
            width: "100%",
            background: "#D4AF37",
            color: "#000",
            border: "none",
            padding: "15px",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Pay Now
        </button>
      </div>
    </main>
  );
}
