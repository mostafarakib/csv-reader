import React from "react";
import { useDataContext } from "../../Context/DataContext";

const MinMaxForm = () => {
  const { minMaxValues, setMinMaxValues } = useDataContext();

  const handleMinMaxChange = (key, value) => {
    setMinMaxValues((prevMinMaxValues) => ({
      ...prevMinMaxValues,
      [key]: value,
    }));
  };
  return (
    <form className="row mt-4">
      <div className="col-6">
        <div className="equal-input-container my-2">
          <label>Minimum X:</label>
          <input
            type="number"
            name="minX"
            value={minMaxValues.minX}
            onChange={(e) => handleMinMaxChange("minX", e.target.value)}
          />
        </div>
        <div className="equal-input-container my-2">
          <label>Minimum Y:</label>
          <input
            type="number"
            name="minY"
            value={minMaxValues.minY}
            onChange={(e) => handleMinMaxChange("minY", e.target.value)}
          />
        </div>
        <div className="equal-input-container my-2">
          <label>Minimum Z:</label>
          <input
            type="number"
            name="minZ"
            value={minMaxValues.minZ}
            onChange={(e) => handleMinMaxChange("minZ", e.target.value)}
          />
        </div>
      </div>
      <div className="col-6">
        <div className="equal-input-container my-2">
          <label>Maximum X:</label>
          <input
            type="number"
            name="maxX"
            value={minMaxValues.maxX}
            onChange={(e) => handleMinMaxChange("maxX", e.target.value)}
          />
        </div>
        <div className="equal-input-container my-2">
          <label>Maximum Y:</label>
          <input
            type="number"
            name="maxY"
            value={minMaxValues.maxY}
            onChange={(e) => handleMinMaxChange("maxY", e.target.value)}
          />
        </div>
        <div className="equal-input-container my-2">
          <label>Maximum Z:</label>
          <input
            type="number"
            name="maxZ"
            value={minMaxValues.maxZ}
            onChange={(e) => handleMinMaxChange("maxZ", e.target.value)}
          />
        </div>
      </div>
    </form>
  );
};

export default MinMaxForm;
