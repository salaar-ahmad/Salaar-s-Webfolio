import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Salaar Ahmad Furqan - Technical Project Manager";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0c0c0c",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(77, 166, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(77, 166, 255, 0.1) 0%, transparent 50%)",
        }}
      >
        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: 68,
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "-2px",
              marginBottom: 12,
            }}
          >
            SALAAR AHMAD FURQAN
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 36,
              fontWeight: 600,
              color: "#4da6ff",
              marginBottom: 50,
              textAlign: "center",
            }}
          >
            Technical Project Manager
          </div>

          {/* Tech stack */}
          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              justifyContent: "center",
              maxWidth: 900,
            }}
          >
            {["ClickUp Expert", "SAP", "Azure DevOps", "Agile", "Automation"].map(
              (tech) => (
                <div
                  key={tech}
                  style={{
                    backgroundColor: "rgba(77, 166, 255, 0.1)",
                    color: "rgba(255, 255, 255, 0.9)",
                    padding: "12px 24px",
                    borderRadius: 50,
                    fontSize: 20,
                    fontWeight: 600,
                    border: "1px solid rgba(77, 166, 255, 0.3)",
                  }}
                >
                  {tech}
                </div>
              )
            )}
          </div>
        </div>

        {/* Subtitle */}
        <div
          style={{
            position: "absolute",
            bottom: 50,
            fontSize: 18,
            color: "rgba(255, 255, 255, 0.6)",
            textAlign: "center",
          }}
        >
          Top Rated on Upwork | SAP Integration | Enterprise Project Delivery
        </div>

        {/* Decorative border */}
        <div
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            right: 20,
            bottom: 20,
            border: "2px solid rgba(77, 166, 255, 0.3)",
            borderRadius: 20,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
