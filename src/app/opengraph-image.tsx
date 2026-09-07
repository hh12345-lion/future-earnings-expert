import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Future Earnings Expert — forensic economics for UK litigation";
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
          background: "#1a2e24",
          color: "#f5f0e8",
          padding: "64px 72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#c4a484",
          }}
        >
          Forensic economics · Expert witness
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.05 }}>
            Future Earnings Expert
          </div>
          <div style={{ fontSize: 30, lineHeight: 1.35, maxWidth: 920, color: "#d9cfc0" }}>
            Court-ready quantification of future earnings and economic damages for UK solicitors
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#c4a484" }}>
          futureearningsexpert.com
        </div>
      </div>
    ),
    { ...size },
  );
}
