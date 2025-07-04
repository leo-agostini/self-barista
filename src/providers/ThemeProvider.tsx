import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { createContext, ReactNode, useState } from "react";
import { Appearance, ColorSchemeName } from "react-native";
import appTheme from "../lib/app-theme.json";

interface ThemeProviderProps {
  children: ReactNode;
}

interface IThemeContext {
  themeName: ColorSchemeName;
  theme: typeof appTheme;
  toggleTheme: VoidFunction;
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const systemAppearance = Appearance.getColorScheme();
  const [themeName, setThemeName] = useState(systemAppearance || "light");

  const theme = { ...eva[themeName], ...appTheme };

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setThemeName(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeName }}>
      <ApplicationProvider {...eva} theme={theme}>
        <IconRegistry icons={EvaIconsPack} />
        {children}
      </ApplicationProvider>
    </ThemeContext.Provider>
  );
}
