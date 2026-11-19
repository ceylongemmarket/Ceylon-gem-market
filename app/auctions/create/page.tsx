import Link from "next/link";
export default function CreateAuction() {
  return (
    <main
  style={{
    minHeight: "100vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=2000&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    color: "#fff",
  }}
>

  <div
    style={{
      minHeight: "100vh",
      background: "rgba(2,10,30,0.88)",
      padding: "40px",
    }}
  >
      <h1
  style={{
    color: "#D4AF37",
    fontSize: "48px",
    fontWeight: "800",
    marginBottom: "10px",
    letterSpacing: "1px",
  }}
>
  Create Luxury Gem Auction
</h1>

<p
  style={{
    color: "#d1d5db",
    marginBottom: "30px",
    fontSize: "18px",
  }}
>
  List certified gemstones for international bidding and premium buyers.
</p>

      <div
  style={{
    maxWidth: "800px",
    display: "grid",
    gap: "20px",
    background: "rgba(8,18,45,0.85)",
    backdropFilter: "blur(15px)",
    border: "1px solid rgba(212,175,55,0.4)",
    borderRadius: "20px",
    padding: "30px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
  }}
>
        <input placeholder="Gem Name" />

        <input placeholder="Gem Type" />

        <select>
          <option>Cut Stone</option>
          <option>Rough Stone</option>
        </select>

        <input placeholder="Weight (Ct)" />

        <input placeholder="Starting Bid" />
        <input placeholder="Reserve Price" />

        <textarea
        placeholder="Auction Description"
        rows={5}
        />

        <label>Gem Photos</label>
        <input type="file" multiple />

        <label>Certificate Upload</label>
        <input type="file" />
        <select>
          <option>1 Day - $2</option>
          <option>2 Days - $3</option>
          <option>3 Days - $5</option>
          <option>4 Days - $7</option>
          <option>5 Days - $10</option>
          <option>6 Days - $12</option>
          <option>7 Days - $15</option>
        </select>

       <Link
  href="/payment"
  style={{
    display: "block",
    background: "#D4AF37",
    color: "#000",
    padding: "15px",
    borderRadius: "8px",
    fontWeight: "bold",
    textAlign: "center",
    textDecoration: "none",
    width: "100%",
    boxSizing: "border-box",
  }}
>
  Continue to Payment
</Link>
        </div>
      </div>
    </main>
  );
}
