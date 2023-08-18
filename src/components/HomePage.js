import React, { useRef, useState } from "react";
import Papa from "papaparse";
import DataTable from "./DataTable";
import ProjectInfo from "./ProjectInfo/ProjectInfo";
import SubmittedInfo from "./ProjectInfo/SubmittedInfo";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [isSubmittedNext, setIsSubmittedNext] = useState(false);
  const [pName, setPName] = useState("");
  const [client, setClient] = useState("");
  const [contractor, setContractor] = useState("");
  const [desc, setDesc] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        setData(results.data);
      },
    });
  };
  console.log(data, isSubmittedNext);
  return (
    <div
      className="p-5"
      style={{ backgroundColor: "rgb(224, 255, 245)", minHeight: "100vh" }}
    >
      {isSubmittedNext ? (
        <SubmittedInfo
          pName={pName}
          client={client}
          contractor={contractor}
          desc={desc}
        />
      ) : (
        <ProjectInfo
          setIsSubmittedNext={setIsSubmittedNext}
          setPName={setPName}
          setClient={setClient}
          setContractor={setContractor}
          setDesc={setDesc}
        />
      )}

      <input type="file" accept=".csv" onChange={handleFileUpload} />
      {data.length ? <DataTable data={data}></DataTable> : null}
    </div>
  );
};

export default HomePage;
