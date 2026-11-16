export default function SellerDashboardPage() {
  const stats = [
    { title: "Total Listings", value: "12", icon: "💎" },
    { title: "Approved Gems", value: "8", icon: "✅" },
    { title: "Pending Approval", value: "4", icon: "⏳" },
    { title: "Buyer Inquiries", value: "27", icon: "📩" },
  ];

  return (
    <main
      style={{
        background: "#07111f",
        minHeight: "100vh",
        color: "#ffffff",
        padding: "40px",
      }}
    >
      {/* Hero */}
      <section
        style={{
          textAlign: "center",
          marginBottom: "60px",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            color: "#D4AF37",
            marginBottom: "20px",
          }}
        >
          💎 Seller Dashboard
        </h1>

        <p
          style={{
            color: "#E5E7EB",
            fontSize: "20px",
          }}
        >
          Manage your gemstone listings, inquiries and marketplace activity.
        </p>
      </section>

      {/* Statistics */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginBottom: "50px",
        }}
      >
        {stats.map((item) => (
          <div
            key={item.title}
            style={{
              background: "#111827",
              border: "1px solid #D4AF37",
              borderRadius: "18px",
              padding: "25px",
            }}
          >
            <div style={{ fontSize: "40px" }}>
              {item.icon}
            </div>

            <h2
              style={{
                color: "#D4AF37",
              }}
            >
              {item.value}
            </h2>

            <p>{item.title}</p>
          </div>
        ))}
      </section>

      {/* Quick Actions */}
      <section
        style={{
          marginBottom: "50px",
        }}
      >
        <h2
          style={{
            color: "#D4AF37",
            marginBottom: "20px",
          }}
        >
          ⚡ Quick Actions
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "#111827",
              padding: "25px",
              borderRadius: "18px",
              border: "1px solid #D4AF37",
            }}
          >
            ➕ Add New Gem
          </div>

          <div
            style={{
              background: "#111827",
              padding: "25px",
              borderRadius: "18px",
              border: "1px solid #D4AF37",
            }}
          >
            📋 View Listings
          </div>

          <div
            style={{
              background: "#111827",
              padding: "25px",
              borderRadius: "18px",
              border: "1px solid #D4AF37",
            }}
          >
            📩 Buyer Inquiries
          </div>

          <div
            style={{
              background: "#111827",
              padding: "25px",
              borderRadius: "18px",
              border: "1px solid #D4AF37",
            }}
          >
            📊 Analytics
          </div>
        </div>
      </section>

      {/* Recent Listings */}
      <section
        style={{
          background: "#111827",
          border: "1px solid #D4AF37",
          borderRadius: "20px",
          padding: "30px",
          marginBottom: "40px",
        }}
      >
        <h2
          style={{
            color: "#D4AF37",
            marginBottom: "20px",
          }}
        >
          💎 Recent Listings
        </h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th align="left">Gem</th>
              <th align="left">Status</th>
              <th align="left">Price</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Royal Blue Sapphire</td>
              <td>✅ Approved</td>
              <td>USD 2,500</td>
            </tr>

            <tr>
              <td>Ruby</td>
              <td>⏳ Pending</td>
              <td>USD 1,800</td>
            </tr>

            <tr>
              <td>Cat's Eye</td>
              <td>✅ Approved</td>
              <td>USD 950</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Seller Benefits */}
      <section
        style={{
          background: "#111827",
          border: "1px solid #D4AF37",
          borderRadius: "20px",
          padding: "30px",
        }}
      >
        <h2
          style={{
            color: "#D4AF37",
            marginBottom: "20px",
          }}
        >
          🏆 Seller Benefits
        </h2>

        <ul
          style={{
            lineHeight: "2",
            color: "#E5E7EB",
          }}
        >
          <li>✅ Global Buyer Exposure</li>
          <li>✅ Chairman Approved Marketplace</li>
          <li>✅ International Visibility</li>
          <li>✅ Auction Participation</li>
          <li>✅ Secure Buyer Inquiries</li>
          <li>✅ Professional Seller Profile</li>
        </ul>
      </section>
    </main>
  );
}
