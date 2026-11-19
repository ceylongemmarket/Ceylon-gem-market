import Link from "next/link";
export default function CreateAuction() {
  return (
    <main
      style={{
        background: "#0B1220",
        minHeight: "100vh",
        color: "#fff",
        padding: "40px",
      }}
    >
      <h1
        style={{
          color: "#D4AF37",
          marginBottom: "30px",
        }}
      >
        Create Auction
      </h1>

      <div
        style={{
          maxWidth: "700px",
          display: "grid",
          gap: "20px",
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
    </main>
  );
}
