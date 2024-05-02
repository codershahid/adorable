import { useState, lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchParams from "./SearchParams";
import AdoptedPetContext from "./AdoptedPetContext";
const Details = lazy(() => import("./Details"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
      suspense: true,
    },
  },
});

const App = () => {
  const adoptedPetHook = useState(null);
  return (
    <QueryClientProvider client={queryClient}>
      <AdoptedPetContext.Provider value={adoptedPetHook}>
        <Suspense
          fallback={
            <div className="loading-pane">
              <h2 className="loader"> 🐶 </h2>
            </div>
          }
        >
          <Link to={"/"}>
            <h2>Adopt Me!</h2>
          </Link>
          <p>Find your perfect furry, feathered, or scaly buddy through adoption at Adorable!</p>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </Suspense>
      </AdoptedPetContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
