import React from "react";

const MapDisplay = ({ map }) => {
  return (
    <div>
      <h2>Data:</h2>
      <ul>
        {Array.from(map).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MapDisplay;
