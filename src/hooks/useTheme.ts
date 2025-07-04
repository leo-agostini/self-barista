import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};
