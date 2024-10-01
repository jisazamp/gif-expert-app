import { useState } from "react";

export const AddCategory = ({ categories, setCategories }) => {
  const [searchValue, setSearchValue] = useState("");

  const onInputChange = (event) => setSearchValue(event.target.value);

  const onCategorySubmit = () => {
    if (searchValue.trim().length <= 1) return;
    if (categories.includes(searchValue.trim())) return;
    setCategories((categories) => [...categories, searchValue.trim()]);
    setSearchValue("");
  };

  return (
    <div className="input-group mt-3">
      <input
        aria-label="Recipient's username with two button addons"
        className="form-control"
        placeholder="Gifs de piolín"
        type="text"
        value={searchValue}
        onChange={onInputChange}
      />

      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={onCategorySubmit}
      >
        Agregar
      </button>
    </div>
  );
};
