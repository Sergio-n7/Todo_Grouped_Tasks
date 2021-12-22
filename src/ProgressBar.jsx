import React from "react";

export default function ProgressBar({ normalize, max }) {
  // array.reduce((currentGroup, nextGroup)=> )
  return (
    <div className="progress">
      <progress className="bar" value={normalize} max={max}>
        {(normalize / max) * 100}%
      </progress>
    </div>
  );
}
