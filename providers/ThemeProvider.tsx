import { defaultConfig } from "@tamagui/config/v4";
import { ReactNode } from "react";
import { createTamagui, TamaguiProvider } from "tamagui";
import { themes } from "../lib/theme.config";

export const config = createTamagui({
  ...defaultConfig,
  themes,
});

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return <TamaguiProvider config={config}>{children}</TamaguiProvider>;
}
