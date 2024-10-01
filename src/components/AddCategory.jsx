import { useState } from "react";

export const AddCategory = () => {
  const [searchValue, setSearchValue] = useState("One Punch");

  const onInputChange = (event) => setSearchValue(event.target.value);

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

      <button className="btn btn-outline-secondary" type="button">
        Agregar
      </button>
    </div>
  );
};
