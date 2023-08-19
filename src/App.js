import React, { useState } from "react";
import "./App.css";
import TopBar from "./components/TopBar";
import HomePage from "./components/HomePage/HomePage";
import Result from "./components/Result/Result";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route
            exact
            path="/"
            element={<HomePage data={data} setData={setData} />}
          />
          <Route path="/result" element={<Result data={data} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
