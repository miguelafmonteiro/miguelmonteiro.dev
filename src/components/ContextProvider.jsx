import { createContext, useState, useContext } from "react";
import { colors } from "../assets/colors";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [colors, setColors] = useState(colors);

  return (
    <Context.Provider value={{ colors, setColors }}>
      {children}
    </Context.Provider>
  );
};

export const context = () => useContext(Context);
