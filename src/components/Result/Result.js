import React from "react";
import DataTable from "./DataTable";

const Result = ({ data }) => {
  return (
    <div>
      <h3 className="p-5 text-center">Here is the results</h3>
      {data.length ? <DataTable data={data}></DataTable> : null}
    </div>
  );
};

export default Result;
