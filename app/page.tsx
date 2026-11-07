export default function Home() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>Ceylon Gem Market</h1>

      <p>Sri Lanka's Trusted Multi-Vendor Gem Marketplace</p>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="/register">Register</a>
        <a href="/login">Login</a>
      </div>
    </main>
  );
}
