import { ImageResponse } from "next/og";

export const alt = "Trovey — Data, exactly as you need it. Early access, pre-launch.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0F1E",
          color: "#F0F4F8",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 18, height: 18, borderRadius: 9, background: "#14B8A6" }} />
          <div style={{ fontSize: 28, letterSpacing: 8, fontWeight: 700 }}>TROVEY</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05, letterSpacing: -1.5, maxWidth: 900 }}>
            Data, exactly as you need it.
          </div>
          <div style={{ marginTop: 28, fontSize: 28, color: "#14B8A6" }}>Early access · Pre-launch</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
