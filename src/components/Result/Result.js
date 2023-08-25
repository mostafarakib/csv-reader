import React from "react";
import DataTable from "./DataTable";
import { useDataContext } from "../../Context/DataContext";

const Result = () => {
  const { data } = useDataContext();
  return (
    <div>
      <h3 className="p-5 text-center">Here is the results</h3>
      {data.length ? <DataTable data={data}></DataTable> : null}
    </div>
  );
};

export default Result;
