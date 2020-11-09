import React, { useContext } from "react";

import { HerokuContext } from "../context/herokuContext";

export const AddNote = () => {
  const { note, addNote, inputChange, inputReset } = useContext(HerokuContext);

  const handleChange = (e) => {
    inputChange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.title.trim()) {
      addNote();
    }
    inputReset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="title"
          className="form-control"
          placeholder="add here ..."
          onChange={handleChange}
          value={note.title}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
};
