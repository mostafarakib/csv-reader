import React from "react";

const DataTable = ({ data }) => {
  const keys = Object.keys(data[0]);
  return (
    <table>
      <thead>
        <tr>
          {keys.map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((dataObject, index) => (
          <tr key={index}>
            {keys.map((key) => (
              <td key={key}>{dataObject[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
