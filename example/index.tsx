import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import LoadingSnakes from "../src/LoadingSnakes";

const App = () => {
  const [dotCount, setDotCount] = useState(3);

  const handleDotCountChange = (count: number) => {
    console.log(`Snake now has ${count} dots!`);
    setDotCount(count);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#282c34",
        color: "white",
      }}
    >
      <h1>Loading Snakes Demo</h1>
      <p>Press any arrow key to start playing the snake game!</p>
      <p>Current snake length: {dotCount}</p>

      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          border: "1px solid #61dafb",
          borderRadius: "8px",
          width: "500px",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LoadingSnakes />
      </div>

      <div style={{ marginTop: "40px" }}>
        <h3>Instructions:</h3>
        <ol>
          <li>Watch the animated loading dots</li>
          <li>Press any arrow key to transform it into a snake game</li>
          <li>Use arrow keys to control the snake</li>
          <li>Collect the targets to grow your snake</li>
          <li>Don't hit yourself!</li>
        </ol>
      </div>
    </div>
  );
};

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
