import React from "react";
import "./ProjectInfo.css";

const ProjectInfo = (props) => {
  const { setPName, setClient, setContractor, setDesc, setIsSubmittedNext } =
    props;

  const projectInfoSubmitHandler = (e) => {
    setIsSubmittedNext(true);
    e.preventDefault();
  };
  return (
    <form
      className="d-flex flex-column justify-items-start project-info-form"
      onSubmit={projectInfoSubmitHandler}
    >
      <div className="equal-input-container">
        <label>Project Name:</label>
        <input
          onChange={(e) => setPName(e.target.value)}
          type="text"
          name="name"
        />
      </div>

      <div className="equal-input-container">
        <label>Client:</label>
        <input
          onChange={(e) => setClient(e.target.value)}
          type="text"
          name="client"
        />
      </div>
      <div className="equal-input-container">
        <label>Contractor:</label>
        <input
          onChange={(e) => setContractor(e.target.value)}
          type="text"
          name="contractor"
        />
      </div>
      <div className="equal-input-container">
        <label>Project Description:</label>
        <textarea
          onChange={(e) => setDesc(e.target.value)}
          name="desc"
          rows="4"
        ></textarea>
      </div>
      <input
        className="btn btn-primary align-self-end px-4 mt-2"
        type="submit"
        value="Next"
      />
    </form>
  );
};

export default ProjectInfo;
