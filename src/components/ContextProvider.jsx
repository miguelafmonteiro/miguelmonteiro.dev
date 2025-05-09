import { createContext, useState, useContext } from "react";
import { dark } from '../assets/colors';

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [colors, setColors] = useState(dark);

  return (
    <Context.Provider value={{colors, setColors}}>
      {children}
    </Context.Provider>
  );
};

export const context = () => useContext(Context);
