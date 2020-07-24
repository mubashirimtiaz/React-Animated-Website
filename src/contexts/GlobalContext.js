import React, { createContext, useReducer } from "react";
import { globalReducer } from "../reducers/globalReducer";
export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, {
    base: "",
    toppings: [],
  });
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
