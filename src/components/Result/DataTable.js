import React, { useState } from "react";

const MemoizedInputCell = React.memo(({ value, onChange }) => {
  return (
    <input
      className="w-100 border-0 px-2 py-1"
      type="number"
      value={value}
      onChange={onChange}
    />
  );
});
const DataTable = ({ data }) => {
  const [inputData, setInputData] = useState(data);
  const keys = Object.keys(data[0]);
  const handleInputChange = (index, key, value) => {
    const updatedData = [...inputData];
    updatedData[index][key] = value;
    setInputData(updatedData);
  };
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          {keys.map((key) => (
            <th
              style={{ backgroundColor: "#ECECEC" }}
              className="px-2 py-1"
              key={key}
            >
              {key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((dataObject, index) => (
          <tr key={index}>
            {keys.map((key) => (
              <td className="p-0" key={key}>
                <MemoizedInputCell
                  value={dataObject[key]}
                  onChange={(e) =>
                    handleInputChange(index, key, e.target.value)
                  }
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
