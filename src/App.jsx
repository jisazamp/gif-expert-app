import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GridGif } from "./components/GridGif";

const App = () => {
  const [categories, setCategories] = useState([]);

  return (
    <div className="container mt-3">
      {/* title */}
      <h1 className="mb-3">Gif Expert</h1>
      {/* input */}
      <AddCategory categories={categories} setCategories={setCategories} />

      {/* listado de gifs */}
      {categories.map((c) => (
        <GridGif key={c} category={c} />
      ))}
    </div>
  );
};

export default App;
