import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Salaar Ahmad - Project Manager";
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
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(232, 93, 4, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(232, 93, 4, 0.1) 0%, transparent 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-2px",
              marginBottom: 8,
            }}
          >
            Salaar Ahmad
          </div>

          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: "#4da6ff",
              marginBottom: 40,
            }}
          >
            Project Manager
          </div>

          <div
            style={{
              display: "flex",
              gap: 16,
            }}
          >
            {["React", "Next.js", "Node.js", "TypeScript", "MongoDB"].map(
              (tech) => (
                <div
                  key={tech}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: "rgba(255, 255, 255, 0.8)",
                    padding: "10px 20px",
                    borderRadius: 20,
                    fontSize: 18,
                    fontWeight: 500,
                  }}
                >
                  {tech}
                </div>
              )
            )}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 20,
            color: "rgba(255, 255, 255, 0.5)",
          }}
        >
          
        </div>

        <div
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            right: 20,
            bottom: 20,
            border: "1px solid rgba(232, 93, 4, 0.3)",
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
