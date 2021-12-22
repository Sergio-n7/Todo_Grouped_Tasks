import React from "react";

export default function ProgressBar({ normalize, max }) {
  // array.reduce((currentGroup, nextGroup)=> )
  return (
    <div className="progress">
      <progress className="bar" value={normalize} max={max}></progress>
      <span>{Math.floor((normalize / max) * 100)}%</span>
    </div>
  );
}
