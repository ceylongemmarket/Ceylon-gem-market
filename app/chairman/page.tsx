"use client";

import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";

export default function ChairmanDashboard() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [sellers, setSellers] = useState<any[]>([]);

  const chairmanPassword = "KalanaRCG2026";

  const handleLogin = () => {
    if (password === chairmanPassword) {
      setAuthenticated(true);
    } else {
      alert("Invalid Chairman Password");
    }
  };

  useEffect(() => {
    if (authenticated) {
      fetchSellers();
    }
  }, [authenticated]);

  const fetchSellers = async () => {
    const { data, error } = await supabase
      .from("sellers")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
    } else {
      setSellers(data || []);
    }
  };

  if (!authenticated) {
    return (
      <main
        style={{
          padding: "40px",
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        <h1>Chairman Access</h1>

        <input
          type="password"
          placeholder="
