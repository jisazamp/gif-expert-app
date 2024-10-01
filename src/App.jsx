import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

const App = () => {
  const [categories, setCategories] = useState([]);

  return (
    <div className="container mt-3">
      {/* title */}
      <h1 className="mb-3">Gif Expert</h1>
      {/* input */}
      <AddCategory setCategories={setCategories} />

      {/* listado de gifs */}
      <ol className="mt-3">
        {categories.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ol>
    </div>
  );
};

export default App;
