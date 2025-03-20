import { createContext, useState, useContext } from "react";
import { colors } from '../assets/colors';

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [nameStyle, setNameStyle] = useState("gradient-text-frappe-rfp");
  const [matrixFontColor, setMatrixFontColor] = useState(colors.catppuccin.latte.rosewater.hex);

  return (
    <Context.Provider value={{nameStyle, setNameStyle, matrixFontColor, setMatrixFontColor}}>
      {children}
    </Context.Provider>
  );
};

export const context = () => useContext(Context);
