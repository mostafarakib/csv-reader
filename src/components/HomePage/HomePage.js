import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import ProjectInfo from "../ProjectInfo/ProjectInfo";
import SubmittedInfo from "../ProjectInfo/SubmittedInfo";
import MinMaxForm from "./MinMaxForm";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const HomePage = ({ data, setData }) => {
  const [isSubmittedNext, setIsSubmittedNext] = useState(false);
  const [isFileLoaded, setIsFileLoaded] = useState(false);
  const [pName, setPName] = useState("");
  const [client, setClient] = useState("");
  const [contractor, setContractor] = useState("");
  const [desc, setDesc] = useState("");
  const [minX, setMinX] = useState(0);
  const [minY, setMinY] = useState(0);
  const [minZ, setMinZ] = useState(0);
  const [maxX, setMaxX] = useState(0);
  const [maxY, setMaxY] = useState(0);
  const [maxZ, setMaxZ] = useState(0);

  useEffect(() => {
    const defaultData = [
      { KP: "0", X: minX, Y: minY, Z: minZ },
      { KP: "1", X: maxX, Y: maxY, Z: maxZ },
    ];
    if (!isFileLoaded) {
      setData(defaultData);
    }
  }, [isFileLoaded, minX, maxX, minY, maxY, minZ, maxZ]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        setIsFileLoaded(true);
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

  const chartData = {
    labels: data.map((item) => item.KP),
    datasets: [
      {
        label: "X Values",
        data: data.map((item) => parseFloat(item.X)),
        fill: false,
        borderColor: "blue",
      },
    ],
  };

  return (
    <div
      className="px-5 pt-4"
      style={{ backgroundColor: "#aac8c3", minHeight: "100vh" }}
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
      {isFileLoaded ? <Line data={chartData} /> : null}
    </div>
  );
};

export default HomePage;
