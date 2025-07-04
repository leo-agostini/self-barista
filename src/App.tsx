import { AllProviders } from "./providers/AllProviders";
import { Navigation } from "./routes";

export default function App() {
  return (
    <AllProviders>
      <Navigation />
    </AllProviders>
  );
}
