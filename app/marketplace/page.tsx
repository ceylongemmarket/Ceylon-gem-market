import { supabase } from "@/lib/supabase";

export default async function GemDetailsPage({
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
        Gem Not Found
      </div>
    );
  }

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px",
        background: "#f8f9fa",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
        }}
      >
        <div>
          {gem.gem_image ? (
            <img
              src={gem.gem_image}
              alt={gem.gem_name}
              style={{
                width: "100%",
                borderRadius: "12px",
              }}
            />
          ) : (
            <div>No Image</div>
          )}

          {gem.certificate_image && (
            <>
              <h3
                style={{
                  marginTop: "25px",
                }}
              >
                Certificate
              </h3>

              <img
                src={gem.certificate_image}
                alt="Certificate"
                style={{
                  width: "100%",
                  borderRadius: "12px",
                }}
              />
            </>
          )}
        </div>

        <div>
          <h1>{gem.gem_name}</h1>

          <h2
            style={{
              color: "#d32f2f",
            }}
          >
            USD {gem.gem_price}
          </h2>

          <div
            style={{
              display: "flex",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                background: "#e8f5e9",
                padding: "6px 12px",
                borderRadius: "20px",
              }}
            >
              ✓ Verified Seller
            </span>

            <span
              style={{
                background:
                  gem.treatment === "Unheated"
                    ? "#d4edda"
                    : "#fff3cd",
                padding: "6px 12px",
                borderRadius: "20px",
              }}
            >
              {gem.treatment === "Unheated"
                ? "✅ Unheated"
                : "🔥 Heated"}
            </span>
          </div>

          <h3>Gem Information</h3>

          <p>
            <strong>Type:</strong> {gem.gem_type}
          </p>

          <p>
            <strong>Weight:</strong>{" "}
            {gem.gem_carat} Ct
          </p>

          <p>
            <strong>Color:</strong> {gem.color}
          </p>

          <p>
            <strong>Shape:</strong> {gem.shape}
          </p>

          <p>
            <strong>Dimensions:</strong>{" "}
            {gem.dimensions}
          </p>

          <p>
            <strong>Transparency:</strong>{" "}
            {gem.transparency}
          </p>

          <hr />

          <h3>Origin</h3>

          <p>
            <strong>Country:</strong>{" "}
            {gem.origin_country}
          </p>

          <p>
            <strong>Region:</strong>{" "}
            {gem.origin_region}
          </p>

          <hr />

          <h3>Certification</h3>

          <p>
            <strong>Laboratory:</strong>{" "}
            {gem.laboratory}
          </p>

          <p>
            <strong>Certificate No:</strong>{" "}
            {gem.certificate_no}
          </p>

          <hr />

          <h3>Seller</h3>

          <p>{gem.seller_name}</p>

          <hr />

          <h3>Description</h3>

          <p>{gem.description}</p>

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
                padding: "15px 25px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Contact Seller
            </button>

            <button
              style={{
                background: "#0d6efd",
                color: "#fff",
                border: "none",
                padding: "15px 25px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Request Certificate
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
