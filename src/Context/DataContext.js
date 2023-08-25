import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [minMaxValues, setMinMaxValues] = useState({
    minX: 0,
    minY: 0,
    minZ: 0,
    maxX: 0,
    maxY: 0,
    maxZ: 0,
  });

  return (
    <DataContext.Provider
      value={{ data, setData, minMaxValues, setMinMaxValues }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
