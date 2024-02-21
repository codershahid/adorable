import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h2>Adopt Me!</h2>
      <p>Find your perfect furry, feathered, or scaly buddy through adoption at Adorable!</p>
      <SearchParams />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
