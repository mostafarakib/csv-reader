import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import "./App.css";
import DataTable from "./components/DataTable";

function App() {
  const [data, setData] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        setData(results.data);
      },
    });
  };
  console.log(data);
  useEffect(() => {}, []);

  return (
    <div className="App">
      <h1>CSV Data Manipulation App</h1>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      {data.length ? <DataTable data={data}></DataTable> : null}
    </div>
  );
}

export default App;
