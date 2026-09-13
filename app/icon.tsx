import { ImageResponse } from "next/og";

export const size = { width: 192, height: 192 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#12344d",
          borderRadius: 42,
        }}
      >
        <svg width="132" height="132" viewBox="0 0 64 64">
          <path d="M18 9h28v9H27v9h16v9H27v10h19v9H18z" fill="#ff6a13" />
        </svg>
      </div>
    ),
    size,
  );
}
