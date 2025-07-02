import { ReactNode } from "react";
import { ThemeProvider } from "./ThemeProvider";

const providers = [[ThemeProvider, {}]] as const;

interface AllProvidersProps {
  children: ReactNode;
}

export function AllProviders({ children }: AllProvidersProps) {
  return providers.reduceRight(
    (children, [Provider, props]) => <Provider {...props}>{children}</Provider>,
    children
  );
}
