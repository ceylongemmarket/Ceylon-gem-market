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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }}
>
    <h1
  style={{
    color: "#D4AF37",
    fontSize: "64px",
    fontWeight: "900",
    marginBottom: "10px",
    letterSpacing: "2px",
    textAlign: "center",
    textShadow: "0 0 25px rgba(212,175,55,0.5)",
  }}
>
  Create Luxury Gem Auction
</h1>

<p
  style={{
    color: "#d1d5db",
    marginBottom: "30px",
    fontSize: "20px",
    textAlign: "center",
    maxWidth: "900px",
  }}
>
  List certified gemstones for international bidding and premium buyers.
</p>

   <div
  style={{
    width: "100%",
    maxWidth: "900px",
    margin: "0 auto",
    display: "grid",
    gap: "20px",
    background: "rgba(8,18,45,0.88)",
    backdropFilter: "blur(20px)",
    border: "2px solid rgba(212,175,55,0.5)",
    borderRadius: "24px",
    padding: "40px",
    boxShadow: "0 25px 80px rgba(0,0,0,0.6)",
  }}
>
        <input
  placeholder="Gem Name"
  style={{
    padding: "16px",
    borderRadius: "12px",
    border: "1px solid #D4AF37",
    background: "#0B1730",
    color: "#fff",
    fontSize: "16px",
  }}
/>

        <input
  placeholder="Gem Type"
  style={{
    padding: "16px",
    borderRadius: "12px",
    border: "1px solid #D4AF37",
    background: "#0B1730",
    color: "#fff",
    fontSize: "16px",
  }}
/>
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
  style={{
    padding: "16px",
    borderRadius: "12px",
    border: "1px solid #D4AF37",
    background: "#0B1730",
    color: "#fff",
    fontSize: "16px",
  }}
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
