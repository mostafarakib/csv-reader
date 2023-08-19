import React from "react";

const MinMaxForm = (props) => {
  const {
    minX,
    setMinX,
    minY,
    setMinY,
    minZ,
    setMinZ,
    maxX,
    setMaxX,
    maxY,
    setMaxY,
    maxZ,
    setMaxZ,
  } = props;
  return (
    <form className="row mt-4">
      <div className="col-6">
        <div className="equal-input-container my-2">
          <label>Minimum X:</label>
          <input
            type="number"
            name="minX"
            value={minX}
            onChange={(e) => setMinX(e.target.value)}
          />
        </div>
        <div className="equal-input-container my-2">
          <label>Minimum Y:</label>
          <input
            type="number"
            name="minY"
            value={minY}
            onChange={(e) => setMinY(e.target.value)}
          />
        </div>
        <div className="equal-input-container my-2">
          <label>Minimum Z:</label>
          <input
            type="number"
            name="minZ"
            value={minZ}
            onChange={(e) => setMinZ(e.target.value)}
          />
        </div>
      </div>
      <div className="col-6">
        <div className="equal-input-container my-2">
          <label>Maximum X:</label>
          <input
            type="number"
            name="maxX"
            value={maxX}
            onChange={(e) => setMaxX(e.target.value)}
          />
        </div>
        <div className="equal-input-container my-2">
          <label>Maximum Y:</label>
          <input
            type="number"
            name="maxY"
            value={maxY}
            onChange={(e) => setMaxY(e.target.value)}
          />
        </div>
        <div className="equal-input-container my-2">
          <label>Maximum Z:</label>
          <input
            type="number"
            name="maxZ"
            value={maxZ}
            onChange={(e) => setMaxZ(e.target.value)}
          />
        </div>
      </div>
    </form>
  );
};

export default MinMaxForm;
