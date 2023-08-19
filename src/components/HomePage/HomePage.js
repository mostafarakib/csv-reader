import React, { useState } from "react";
import Papa from "papaparse";
import ProjectInfo from "../ProjectInfo/ProjectInfo";
import SubmittedInfo from "../ProjectInfo/SubmittedInfo";
import MinMaxForm from "./MinMaxForm";

const HomePage = (props) => {
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
    setData,
  } = props;
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
        const filteredData = results.data.filter(
          (item) =>
            item.X !== undefined && item.Y !== undefined && item.Z !== undefined
        );

        const getXValues = filteredData.map((item) => parseFloat(item.X));
        const getYValues = filteredData.map((item) => parseFloat(item.Y));
        const getZValues = filteredData.map((item) => parseFloat(item.Z));

        const minimumX = Math.min(...getXValues);
        const minimumY = Math.min(...getYValues);
        const minimumZ = Math.min(...getZValues);

        const maximumX = Math.max(...getXValues);
        const maximumY = Math.max(...getYValues);
        const maximumZ = Math.max(...getZValues);

        setMinX(minimumX);
        setMinY(minimumY);
        setMinZ(minimumZ);

        setMaxX(maximumX);
        setMaxY(maximumY);
        setMaxZ(maximumZ);

        setData(filteredData);
      },
    });
  };
  return (
    <div
      className="px-5 pt-4"
      style={{ backgroundColor: "rgb(224, 255, 245)", minHeight: "100vh" }}
    >
      <div>
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
      </div>

      {isSubmittedNext ? (
        <div className="mt-3 mb-3">
          <input
            className="form-control"
            type="file"
            id="formFile"
            accept=".csv"
            onChange={handleFileUpload}
            style={{ width: "49%" }}
          />
          <MinMaxForm
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
        </div>
      ) : null}
    </div>
  );
};

export default HomePage;
