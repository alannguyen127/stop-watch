import React from "react";

function Lap({ lap }) {
  return (
    <div className="laps">
      <h2>
        <span>Laps</span>
        <span>Time</span>
      </h2>
      <ul>
        {lap.map((lap, index) => (
          <li key={index}>
            <span>{`Lap #${index + 1}`}</span>
            <span>{lap}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lap;
