import React from "react";

export default function ProgressBar({ normalize }) {
  return (
    <div className="progress">
      <div
        className="progress-done"
        style={{
          opacity: 1,
          width: `${Math.floor(normalize)}%`,
        }}
      >
        {Math.floor(normalize)}%
      </div>
    </div>
  );
}
