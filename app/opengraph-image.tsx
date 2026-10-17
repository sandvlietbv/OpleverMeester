import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "OpleverMeester — Wij regelen. Jij gaat verder.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg,#fffdf9 0%,#f7f0e4 100%)",
      color: "#171717",
      padding: "70px",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{ position: "absolute", width: 760, height: 220, left: -220, top: -110, border: "2px solid rgba(211,141,8,.32)", borderRadius: 999, transform: "rotate(18deg)" }} />
      <div style={{ position: "absolute", width: 650, height: 190, right: -180, bottom: -100, border: "2px solid rgba(211,141,8,.28)", borderRadius: 999, transform: "rotate(-18deg)" }} />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <svg width="220" height="120" viewBox="0 0 140 72">
          <defs>
            <linearGradient id="gold-og" x1="0" y1="0" x2="0.9" y2="1">
              <stop offset="0%" stopColor="#f1b52b" />
              <stop offset="42%" stopColor="#d38d08" />
              <stop offset="64%" stopColor="#8f8a84" />
              <stop offset="100%" stopColor="#666462" />
            </linearGradient>
          </defs>
          <path d="M45 10a27 27 0 1 0 0 54c13.8 0 23.2-6.3 30.4-17.4l6.8-10.4H122c5.4 0 9.8-4.4 9.8-9.8s-4.4-9.8-9.8-9.8H74.9c-3.4 0-6.5 1.7-8.3 4.6l-7.7 11.9C54.8 39.6 50.8 43 45 43a11.6 11.6 0 1 1 10.3-16.9h17.2A27 27 0 0 0 45 10Z" fill="url(#gold-og)" />
          <circle cx="45" cy="37" r="6.4" fill="#d99408" />
          <path d="M98 36h11v18a5.5 5.5 0 0 1-11 0V36Z" fill="#6f6c69" />
          <path d="M115 36h10v20a5 5 0 0 1-10 0V36Z" fill="#d99408" />
        </svg>
        <div style={{ marginTop: 10, fontFamily: "Georgia, serif", fontSize: 82, letterSpacing: "-4px" }}>OpleverMeester</div>
        <div style={{ marginTop: 12, fontSize: 34, color: "#5f5a54" }}>Wij regelen. Jij gaat verder.</div>
        <div style={{ marginTop: 34, fontSize: 24, color: "#7b736a" }}>Groningen · Friesland · Drenthe · 06 45 31 68 51</div>
      </div>
    </div>,
    size,
  );
}
