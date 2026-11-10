import { supabase } from "@/lib/supabase";

export default async function GemDetails({
  params,
}: {
  params: { id: string };
}) {
  const { data: gem } = await supabase
    .from("gems")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!gem) {
    return (
      <div style={{ padding: "40px" }}>
        <h2>Gem not found</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "auto",
        padding: "40px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "start",
        }}
      >
        <div>
          {gem.gem_image ? (
            <img
              src={gem.gem_image}
              alt={gem.gem_name}
              style={{
                width: "100%",
                borderRadius: "15px",
                objectFit: "cover",
              }}
            />
          ) : (
            <div
              style={{
                height: "400px",
                background: "#f5f5f5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "15px",
              }}
            >
              No Image
            </div>
          )}
        </div>

        <div>
          <h1
            style={{
              fontSize: "32px",
              marginBottom: "15px",
            }}
          >
            {gem.gem_name}
          </h1>

          <h2
            style={{
              color: "green",
              marginBottom: "25px",
            }}
          >
            USD {gem.gem_price}
          </h2>

          <p>
            <strong>Type:</strong> {gem.gem_type}
          </p>

          <p>
            <strong>Weight:</strong> {gem.gem_carat} ct
          </p>

          <p>
            <strong>Color:</strong> {gem.color}
          </p>

          <p>
            <strong>Shape:</strong> {gem.shape}
          </p>

          <p>
            <strong>Origin Country:</strong>{" "}
            {gem.origin_country}
          </p>

          <p>
            <strong>Origin Region:</strong>{" "}
            {gem.origin_region}
          </p>

          <p>
            <strong>Treatment:</strong>{" "}
            {gem.treatment}
          </p>

          <p>
            <strong>Laboratory:</strong>{" "}
            {gem.laboratory}
          </p>

          <p>
            <strong>Certificate No:</strong>{" "}
            {gem.certificate_no}
          </p>

          <p>
            <strong>Status:</strong>{" "}
            {gem.treatment === "Unheated"
              ? "✅ Unheated"
              : "🔥 Heated"}
          </p>

          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "30px",
            }}
          >
            <button
              style={{
                background: "#198754",
                color: "#fff",
                border: "none",
                padding: "15px 30px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Buy Now
            </button>

            <button
              style={{
                background: "#0d6efd",
                color: "#fff",
                border: "none",
                padding: "15px 30px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Contact Seller
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
