import { ReactNode } from "react";
import { ThemeProvider } from "./ThemeProvider";

interface AllProvidersProps {
  children: ReactNode;
}

export function AllProviders({ children }: AllProvidersProps) {
  return (
    <>
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
}
