import React from "react";

export default function ProgressBar({ value, max }) {

    // array.reduce((currentGroup, nextGroup)=> )
  return (
    <div className="progress">
      <progress className="bar" value={value} max={max} />
      <span>{(value / max) * 100}%</span>
    </div>
  );
}
