import React from "react";

export const ProgressCircle = ({ progress }: { progress: number }) => {
  const radius = 20;
  const strokeWidth = 4;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width="50" height="50" viewBox="0 0 50 50">

      <circle
        cx="25"
        cy="25"
        r={radius}
        stroke="#ddd"
        strokeWidth={strokeWidth}
        fill="transparent"
      />

      <circle
        cx="25"
        cy="25"
        r={radius}
        stroke="green"
        strokeWidth={strokeWidth}
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 25 25)"
      />

      <text
        x="25"
        y="28"
        fontSize="10"
        fontWeight="bold"
        textAnchor="middle"
        fill="green"
      >
        {progress}%
      </text>
    </svg>
  );
}
