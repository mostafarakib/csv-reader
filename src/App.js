import React, { useState } from "react";
import "./App.css";
import TopBar from "./components/TopBar";
import HomePage from "./components/HomePage/HomePage";
import Result from "./components/Result/Result";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [minX, setMinX] = useState(0);
  const [minY, setMinY] = useState(0);
  const [minZ, setMinZ] = useState(0);
  const [maxX, setMaxX] = useState(0);
  const [maxY, setMaxY] = useState(0);
  const [maxZ, setMaxZ] = useState(0);
  const [data, setData] = useState([
    { KP: "0", X: minX, Y: minY, Z: minZ },
    { KP: "1", X: maxX, Y: maxY, Z: maxZ },
  ]);
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <HomePage
                setData={setData}
                minX={minX}
                setMinX={setMinX}
                minY={minY}
                setMinY={setMinY}
                minZ={minZ}
                setMinZ={setMinZ}
                maxX={maxX}
                setMaxX={setMaxX}
                maxY={maxY}
                setMaxY={setMaxY}
                maxZ={maxZ}
                setMaxZ={setMaxZ}
              />
            }
          />
          <Route path="/result" element={<Result data={data} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
