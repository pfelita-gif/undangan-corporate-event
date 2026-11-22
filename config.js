// GANTI DENGAN DATA DARI SUPABASE (Project Settings > API)
const SUPABASE_URL = "https://zlvzqzhbuisgxoillbcr.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsdnpxemhidWlzZ3hvaWxsYmNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTUzNTYxNjMsImV4cCI6MjExMDkzMjE2M30.8XRqn6GQ_xM8azZyB91sSIwuP-f9Jxxd-cUYHoAU2Ik";

// Inisialisasi koneksi (Jangan diubah)
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);