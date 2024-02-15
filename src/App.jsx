import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <p>Find your perfect furry, feathered, or scaly companion through adoption at Adorable</p>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);