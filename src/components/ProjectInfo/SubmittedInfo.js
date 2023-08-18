import React from "react";
import "./ProjectInfo.css";

const SubmittedInfo = ({ pName, client, contractor, desc }) => {
  return (
    <div className="project-info-form">
      <h6>
        Project Name: <span className="submittedValue">{pName}</span>
      </h6>
      <h6>
        Client: <span className="submittedValue">{client}</span>
      </h6>
      <h6>
        Contractor: <span className="submittedValue">{contractor}</span>
      </h6>
      <h6>
        Project Description: <span className="submittedValue">{desc}</span>
      </h6>
    </div>
  );
};

export default SubmittedInfo;
