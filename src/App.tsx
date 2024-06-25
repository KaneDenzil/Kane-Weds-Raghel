// UnderConstruction.tsx
import React from "react";
import backGroundVideo from "./assets/underConstructionBackground.mp4";

// TypeScript interface for style objects
interface Style {
  [key: string]: React.CSSProperties;
}

// Styles
const styles: Style = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    fontFamily: '"Arial", sans-serif',
  },
  videoContainer: {},
  emoji: {
    fontSize: "48px",
    margin: "20px 0",
  },
  message: {
    fontSize: "24px",
    textAlign: "center",
    maxWidth: "80%",
  },
};

const UnderConstruction: React.FC = () => {
  return (
    <div style={styles.container}>
      <div style={styles.videoContainer}>
        <video autoPlay loop muted id="video">
          <source src={backGroundVideo} type="video/mp4" />
        </video>
      </div>
      <div>
        <div style={styles.emoji}>🚧</div>
        <h1>Under Construction</h1>
        <p style={styles.message}>
          We're currently working on creating something fantastic. We'll be here
          soon!
        </p>
      </div>
    </div>
  );
};

export default UnderConstruction;
