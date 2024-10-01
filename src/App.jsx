import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

const App = () => {
  const [categories, setCategories] = useState([]);

  return (
    <div className="container mt-3">
      {/* title */}
      <h1>Gif Expert</h1>
      {/* input */}
      <AddCategory />

      {/* listado de gifs */}
      <ol>
        {categories.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ol>
    </div>
  );
};

export default App;
