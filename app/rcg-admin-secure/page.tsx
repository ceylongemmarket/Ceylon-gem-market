"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

const cardStyle = {
  background: "#111827",
  border: "1px solid #D4AF37",
  borderRadius: "20px",
  padding: "25px",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "6px",
  marginBottom: "15px",
  borderRadius: "10px",
  border: "1px solid #374151",
  background: "#1F2937",
  color: "#fff",
} as const;

export default function ChairmanDashboard() {
  const [brokerCommission, setBrokerCommission] = useState(5);
  const [registrationFee, setRegistrationFee] = useState(50);
  const [auctionCommission, setAuctionCommission] = useState(10);
  const [certificationFee, setCertificationFee] = useState(25);
  const [featuredFee, setFeaturedFee] = useState(15);

  const [whatsappNumber, setWhatsappNumber] = useState("94771234567");
  const [priorityFee, setPriorityFee] = useState(3);
  const [consultationFee, setConsultationFee] = useState(15);
  const [supportEmail, setSupportEmail] = useState(
    "support@royalceylongems.com"
  );
useEffect(() => {
  loadSettings();
}, []);

const loadSettings = async () => {
  const { data } = await supabase
    .from("site_settings")
    .select("*")
    .eq("id", 1)
    .single();

  if (data) {
    setSupportEmail(data.support_email || "");
    setPriorityFee(data.priority_whatsapp_fee || 3);
    setConsultationFee(data.consultation_fee || 15);
  }
};

const savePlatformSettings = async () => {
  const { error } = await supabase
    .from("site_settings")
    .update({
      support_email: supportEmail,
      priority_whatsapp_fee: priorityFee,
      consultation_fee: consultationFee,
    })
    .eq("id", 1);

  if (error) {
    alert("Save Failed");
    return;
  }

  alert("Platform Settings Saved ✅");
};
  return (
    <main
      style={{
        background: "#07111f",
        minHeight: "100vh",
        color: "#fff",
        padding: "40px",
      }}
    >
      <h1
        style={{
          color: "#D4AF37",
          fontSize: "52px",
          marginBottom: "10px",
        }}
      >
        👑 Chairman Dashboard Pro
      </h1>

      <p style={{ color: "#9CA3AF", marginBottom: "30px" }}>
        Royal Ceylon Gems Executive Control Center
      </p>

      {/* Stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        {[
          {
            title: "Total Sellers",
            value: "125",
            icon: "👥",
          },
          {
            title: "Total Gems",
            value: "850",
            icon: "💎",
          },
          {
            title: "Live Auctions",
            value: "12",
            icon: "🔨",
          },
          {
            title: "Revenue",
            value: "$12,450",
            icon: "💰",
          },
        ].map((card) => (
          <div key={card.title} style={cardStyle}>
            <h3 style={{ color: "#D4AF37" }}>{card.icon}</h3>
            <h2>{card.value}</h2>
            <p>{card.title}</p>
          </div>
        ))}
      </div>

      {/* Financial Settings */}
      <div style={{ ...cardStyle, marginBottom: "30px" }}>
        <h2 style={{ color: "#D4AF37" }}>
          💰 Financial Settings
        </h2>

        <label>Broker Commission (%)</label>
        <input
          type="number"
          value={brokerCommission}
          onChange={(e) =>
            setBrokerCommission(Number(e.target.value))
          }
          style={inputStyle}
        />

        <label>Seller Registration Fee ($)</label>
        <input
          type="number"
          value={registrationFee}
          onChange={(e) =>
            setRegistrationFee(Number(e.target.value))
          }
          style={inputStyle}
        />

        <label>Auction Commission (%)</label>
        <input
          type="number"
          value={auctionCommission}
          onChange={(e) =>
            setAuctionCommission(Number(e.target.value))
          }
          style={inputStyle}
        />

        <label>Certification Fee ($)</label>
        <input
          type="number"
          value={certificationFee}
          onChange={(e) =>
            setCertificationFee(Number(e.target.value))
          }
          style={inputStyle}
        />

        <label>Featured Listing Fee ($)</label>
        <input
          type="number"
          value={featuredFee}
          onChange={(e) =>
            setFeaturedFee(Number(e.target.value))
          }
          style={inputStyle}
        />

        <button
          onClick={() =>
            alert("Financial Settings Saved")
          }
          style={{
            background: "#D4AF37",
            color: "#000",
            border: "none",
            padding: "12px 25px",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Save Settings
        </button>
      </div>

      {/* Revenue */}
      <div style={{ ...cardStyle, marginBottom: "30px" }}>
        <h2 style={{ color: "#D4AF37" }}>
          📈 Revenue Center
        </h2>

        <p>💰 Broker Income : $4,250</p>
        <p>📝 Registration Income : $1,200</p>
        <p>🔨 Auction Income : $5,400</p>
        <p>📜 Certificate Income : $875</p>
        <p>⭐ Featured Income : $725</p>
        <p>📱 Priority WhatsApp Income : $320</p>
        <p>💎 Consultation Income : $650</p>

        <h3 style={{ color: "#D4AF37" }}>
          Total Revenue : $13,420
        </h3>
      </div>

      {/* Management Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <div style={cardStyle}>
          <h2 style={{ color: "#D4AF37" }}>
            👥 Seller Management
          </h2>

          <p>✅ Approved Sellers : 95</p>
          <p>⏳ Pending Sellers : 18</p>
          <p>🚫 Blocked Sellers : 5</p>
          <p>🪪 Verification Requests : 7</p>
        </div>

        <div style={cardStyle}>
          <h2 style={{ color: "#D4AF37" }}>
            💎 Gem Management
          </h2>

          <p>✅ Approved Gems : 600</p>
          <p>⏳ Pending Gems : 40</p>
          <p>⭐ Featured Gems : 55</p>
          <p>🚫 Rejected Gems : 12</p>
        </div>

        <div style={cardStyle}>
          <h2 style={{ color: "#D4AF37" }}>
            🔨 Auction Management
          </h2>

          <p>Create Auctions</p>
          <p>Approve Entries</p>
          <p>Manage Live Auctions</p>
          <p>Monitor Bids</p>
        </div>
      </div>

      {/* Announcement */}
      <div
        style={{
          ...cardStyle,
          marginBottom: "30px",
        }}
      >
        <h2 style={{ color: "#D4AF37" }}>
          📢 Chairman Announcement
        </h2>

        <textarea
          placeholder="Type announcement..."
          style={{
            width: "100%",
            height: "150px",
            borderRadius: "10px",
            padding: "12px",
            background: "#1F2937",
            color: "#fff",
            border: "1px solid #374151",
          }}
        />

        <button
          style={{
            marginTop: "12px",
            background: "#D4AF37",
            color: "#000",
            border: "none",
            padding: "12px 25px",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Publish Announcement
        </button>
      </div>

      {/* Platform Settings */}
      <div
        style={{
          ...cardStyle,
          marginBottom: "30px",
        }}
      >
        <h2 style={{ color: "#D4AF37" }}>
          📱 Platform Settings
        </h2>

        <label>WhatsApp Number</label>
        <input
          type="text"
          value={whatsappNumber}
          onChange={(e) =>
            setWhatsappNumber(e.target.value)
          }
          style={inputStyle}
        />

        <label>Priority WhatsApp Fee ($)</label>
        <input
          type="number"
          value={priorityFee}
          onChange={(e) =>
            setPriorityFee(Number(e.target.value))
          }
          style={inputStyle}
        />

        <label>Premium Consultation Fee ($)</label>
        <input
          type="number"
          value={consultationFee}
          onChange={(e) =>
            setConsultationFee(Number(e.target.value))
          }
          style={inputStyle}
        />

        <label>Support Email</label>
        <input
          type="email"
          value={supportEmail}
          onChange={(e) =>
            setSupportEmail(e.target.value)
          }
          style={inputStyle}
        />

        <button
  onClick={savePlatformSettings}
  style={{
    background: "#D4AF37",
    color: "#000",
    border: "none",
    padding: "12px 25px",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
  }}
>
  Save Platform Settings
</button>
      </div>

      {/* Meeting Section */}
      <div style={cardStyle}>
        <h2 style={{ color: "#D4AF37" }}>
          🎤 Public Chairman Meetings
        </h2>

        <p>
          Sri Lanka Gem Market Investment Summit
        </p>
        <p>Date : 15 December 2026</p>
        <p>Time : 7.00 PM</p>
        <p>Mode : Online Webinar</p>

        <button
          style={{
            marginTop: "15px",
            background: "#D4AF37",
            color: "#000",
            border: "none",
            padding: "12px 25px",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Create New Meeting
        </button>
      </div>
    </main>
  );
}
