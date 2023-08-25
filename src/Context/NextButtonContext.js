import React, { createContext, useState, useContext } from "react";

const isSubmittedNextContext = createContext();

export const IsSubmittedNextProvider = ({ children }) => {
  const [isSubmittedNext, setIsSubmittedNext] = useState(false);
  const [isFileLoaded, setIsFileLoaded] = useState(false);

  return (
    <isSubmittedNextContext.Provider
      value={{
        isSubmittedNext,
        setIsSubmittedNext,
        isFileLoaded,
        setIsFileLoaded,
      }}
    >
      {children}
    </isSubmittedNextContext.Provider>
  );
};

export const useIsSubmittedNextContext = () => {
  return useContext(isSubmittedNextContext);
};
