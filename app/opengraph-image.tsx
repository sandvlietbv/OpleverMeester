import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "OpleverMeester — woningontruiming en opleveren in Noord-Nederland";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", background: "#12344d", color: "white", padding: "72px" }}>
      <div style={{ fontSize: 34, fontWeight: 700, color: "#ff8a3d" }}>OpleverMeester</div>
      <div style={{ marginTop: 28, maxWidth: 950, fontSize: 72, lineHeight: 1.05, fontWeight: 700 }}>Ruimte opleveren? Wij regelen wat nodig is.</div>
      <div style={{ marginTop: 30, fontSize: 30, color: "#dbe7ee" }}>Groningen · Friesland · Drenthe · 06 45 31 68 51</div>
    </div>,
    size,
  );
}
