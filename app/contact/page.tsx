export default function ContactPage() {
  return (
    <main
      style={{
        background: "#07111f",
        minHeight: "100vh",
        color: "#ffffff",
        padding: "40px",
      }}
    >
      {/* Hero Section */}
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
          📞 Contact Royal Ceylon Gems
        </h1>

        <p
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            color: "#E5E7EB",
            fontSize: "20px",
            lineHeight: "1.8",
          }}
        >
          Connect with our team for gemstone inquiries,
          certification support, sourcing assistance,
          auctions, and international trading opportunities.
        </p>
      </section>

      {/* Contact Information */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(300px,1fr))",
          gap: "25px",
          marginBottom: "50px",
        }}
      >
        <div
          style={{
            background: "#111827",
            border: "1px solid #D4AF37",
            borderRadius: "18px",
            padding: "25px",
          }}
        >
          <h2 style={{ color: "#D4AF37" }}>
            📧 Email
          </h2>

          <p>kalanaudayanga3@gmail.com</p>
        </div>

        <div
          style={{
            background: "#111827",
            border: "1px solid #D4AF37",
            borderRadius: "18px",
            padding: "25px",
          }}
        >
          <h2 style={{ color: "#D4AF37" }}>
            📱 WhatsApp
          </h2>

          <p>+94 XX XXX XXXX</p>
        </div>

        <div
          style={{
            background: "#111827",
            border: "1px solid #D4AF37",
            borderRadius: "18px",
            padding: "25px",
          }}
        >
          <h2 style={{ color: "#D4AF37" }}>
            🌍 Location
          </h2>

          <p>Sri Lanka</p>
        </div>
      </section>

      {/* Business Hours */}
      <section
        style={{
          background: "#111827",
          border: "1px solid #D4AF37",
          borderRadius: "20px",
          padding: "30px",
          marginBottom: "50px",
        }}
      >
        <h2
          style={{
            color: "#D4AF37",
            marginBottom: "20px",
          }}
        >
          🕒 Business Hours
        </h2>

        <p>Monday - Friday : 8.30 AM - 5.30 PM</p>
        <p>Saturday : 9.00 AM - 1.00 PM</p>
        <p>Sunday : Closed</p>
      </section>

      {/* Contact Form */}
      <section
        style={{
          background: "#111827",
          border: "1px solid #D4AF37",
          borderRadius: "20px",
          padding: "35px",
        }}
      >
        <h2
          style={{
            color: "#D4AF37",
            marginBottom: "25px",
          }}
        >
          📨 Send Us A Message
        </h2>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            style={{
              padding: "14px",
              borderRadius: "10px",
              border: "1px solid #374151",
            }}
          />

          <input
            type="email"
            placeholder="Your Email"
            style={{
              padding: "14px",
              borderRadius: "10px",
              border: "1px solid #374151",
            }}
          />

          <input
            type="text"
            placeholder="Subject"
            style={{
              padding: "14px",
              borderRadius: "10px",
              border: "1px solid #374151",
            }}
          />

          <textarea
            placeholder="Your Message"
            rows={6}
            style={{
              padding: "14px",
              borderRadius: "10px",
              border: "1px solid #374151",
            }}
          />

          <button
            type="button"
            style={{
              background: "#D4AF37",
              color: "#000",
              border: "none",
              borderRadius: "10px",
              padding: "14px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
