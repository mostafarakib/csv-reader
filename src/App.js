import React from "react";
import "./App.css";
import TopBar from "./components/TopBar";
import HomePage from "./components/HomePage/HomePage";
import Result from "./components/Result/Result";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataProvider } from "./Context/DataContext";
import { IsSubmittedNextProvider } from "./Context/NextButtonContext";

function App() {
  // const [data, setData] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <IsSubmittedNextProvider>
          <DataProvider>
            <TopBar />
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/result" element={<Result />} />
            </Routes>
          </DataProvider>
        </IsSubmittedNextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
